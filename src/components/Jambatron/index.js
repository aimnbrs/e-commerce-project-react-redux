import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useTransition, animated, config, interpolate } from "react-spring";

import slide01 from "./slide-01.jpg";
import slide02 from "./slide-02.jpg";
import slide03 from "./slide-03.jpg";
import "./index.css";

const Jambatron = (props) => {
  const slide = [
    {
      id: 1,
      url: slide01,
      textOne: "Women Collection 2018",
      textTwo: "NEW SEASON",
    },
    {
      id: 2,
      url: slide02,
      textOne: "Men New-Season",
      textTwo: "Jackets & Coats",
    },
    {
      id: 3,
      url: slide03,
      textOne: "Men Collection 2018",
      textTwo: "New arrivals",
    },
  ];
  const [index, setIndex] = useState(0);
  const ref = useRef();
  const incrementRef = useRef(0);
  const transitions = useTransition(slide[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: (item, state) =>
      state === "leave" ? { duration: 100 } : config.slow,
  });

  const transitionsText = useTransition(slide[index], (item) => item.id, {
    from: { x: 1, opacity: 0 },
    enter: () => async (next) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await next({ x: 0, opacity: 1 });
    },
    leave: { x: 0, opacity: 0 },
    config: (item, state) =>
      state === "leave"
        ? { duration: 100 }
        : { mass: 1, tension: 280, friction: 60 },
  });

  const transitionsTextTwo = useTransition(slide[index], (item) => item.id, {
    from: { x: 1, opacity: 0 },
    enter: (item) => async (next, cancel) => {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      await next({ x: 0, opacity: 1 });
    },
    leave: { x: 0, opacity: 0 },
    config: (item, state) =>
      state === "leave"
        ? { duration: 1 }
        : item.id == 2
        ? config.wobbly
        : { mass: 1, tension: 280, friction: 60 },
  });
  const transitionsButton = useTransition(slide[index], (item) => item.id, {
    from: { x: 1, opacity: 0 },
    enter: (item) => async (next, cancel) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await next({ x: 0, opacity: 1 });
    },
    leave: { x: 0, opacity: 0 },
    config: (item, state) =>
      state === "leave"
        ? { duration: 1 }
        : item.id == 3
        ? config.fast
        : config.default,
  });

  const nextPrev = useCallback((e) => {
    e.target.className == "next"
      ? setIndex((state) => (state + 1) % 3)
      : setIndex((state) => state == 0 ? 2 : (state - 1) % 3);
    return () => {
      clearInterval(ref.current);
      console.log("clean1");
    };
  });
  useEffect(() => {
    ref.current = setInterval(() => {
      document.hasFocus() ? setIndex((index + 1) % 3) : clearInterval(this);
    }, 6000);
    return () => {
      clearInterval(ref.current);
      console.log("clean");
    };
  }, [index]);

  console.log(index);
  return (
    <Fragment>
      <section className="f-s">
        <div id="slide">
          <div className="next" onClick={nextPrev}>
            <i class="fas fa-caret-right fa-3x"></i>
          </div>
          <div className="prev" onClick={nextPrev}>
            <i class="fas fa-caret-left fa-3x"></i>
          </div>
          {transitions.map(({ item, key, props }) => (
            <animated.div
              id="slide1"
              key={key}
              style={{
                opacity: props.opacity,
                backgroundImage: `url(${item.url})`,
              }}
            >
              {" "}
            </animated.div>
          ))}
          <div className="txtslide">
            <div className="txtsld1">
              {transitionsText.map(({ item, key, props }) => (
                <animated.p
                  key={key}
                  style={{
                    transformOrigin: item.id == 3 ? "0 100%" : "50% 50%",
                    transform:
                      item.id == 1
                        ? props.x.interpolate(
                            (x) => `translateY(${-x * 100}px)`
                          )
                        : item.id == 2
                        ? props.x.interpolate(
                            (x) =>
                              `translateX(${-x * 300}px) rotate(${-x * 100}deg)`
                          )
                        : props.x.interpolate((x) => `rotate(${-x * 100}deg)`),
                    opacity: props.opacity,
                  }}
                >
                  {item.textOne}
                </animated.p>
              ))}
              {transitionsTextTwo.map(({ item, key, props }) => (
                <animated.h1
                  style={{
                    transformOrigin:
                      item.id != 1 && item.id == 2 ? "0 0%" : "100% 100%",
                    transform:
                      item.id == 1
                        ? props.x.interpolate((x) => `translateY(${x * 200}px)`)
                        : item.id == 2
                        ? props.x.interpolate(
                            (x) =>
                              `translateX(${x * 300}px) skewX(${60 * x}deg) `
                          )
                        : props.x.interpolate(
                            (x) => `rotate(${-x * 100}deg)
                          `
                          ),
                    opacity: props.opacity,
                  }}
                >
                  {item.textTwo}
                </animated.h1>
              ))}

              <div className="ho">
                {transitionsButton.map(({ item, key, props }) => (
                  <animated.a
                    href="#"
                    className="slideButn"
                    key={key}
                    style={{
                      transform:
                        item.id == 1
                          ? props.x.interpolate((x) => `scale(${1 - x})`)
                          : item.id == 2
                          ? props.x.interpolate(
                              (x) => `translateY(${x * 100}px)`
                            )
                          : props.x.interpolate(
                              (x) => `rotate(${-x * 360}deg)`
                            ),
                      opacity: props.opacity,
                    }}
                  >
                    SHOP NOW
                  </animated.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Jambatron;

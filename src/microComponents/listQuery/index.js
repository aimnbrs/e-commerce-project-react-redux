import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useMediaQuery } from "react-responsive";
import "./index.css";

const MainCollapse = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  background-color: ${(props) => props.bgMainClps || ""};
`;
const Collapse = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${(props) => props.bgColorCollapse || "#f5f6fa"};
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 560px) {
    justify-content: flex-start;
  }
`;

const ListPart = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 560px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const Ulist = styled.ul`
  list-style: none;
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 900px) {
    width: 188px;
  }
`;

const List = styled.li`
  color: #8a8989;
  font-family: "Blinker", sans-serif;
  margin-top: 0.5rem;
  transition: color 0.3s linear;
  &:first-child {
    font-size: 1.2rem;
    color : ${(props) => props.firstHead || "#2f2f30"};
    padding-bottom: 10px;
  }
  &:not(:first-child):hover {
    color: blue;
  }
`;

const ListQuery = ({
  firstList,
  secondeList,
  thirdList,
  forthList,
  bgMainClps,
  bgColorCollapse,
  firstHead,
}) => {

  return (
    <Fragment>
      <MainCollapse bgMainClps = {bgMainClps} >
        <Collapse bgColorCollapse = {bgColorCollapse}>
          <ListPart>
            <Ulist>
              {firstList.map((title) => (
                <List firstHead = {firstHead}>{title}</List>
              ))}
            </Ulist>
            <Ulist>
              {secondeList.map((title) => (
                <List  firstHead = {firstHead} >{title}</List>
              ))}
            </Ulist>
          </ListPart>
          <ListPart>
            <Ulist>
              {thirdList.map((title) => (
                <List  firstHead = {firstHead} >{title}</List>
              ))}
            </Ulist>
            <Ulist>
              {forthList.map((title) => (
                <List  firstHead = {firstHead} >{title}</List>
              ))}
            </Ulist>
          </ListPart>
        </Collapse>
      </MainCollapse>
    </Fragment>
  );
};

export default ListQuery;

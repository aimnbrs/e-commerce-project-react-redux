import React from "react"

export const switchConsts = {
    sideToggelSwitch : 'sideToggelSwitch',
    productDetailsToggelSwitch : 'productDetailsToggelSwitch',
}
export const DispatchSwitch = React.createContext();
export const StateSwitch = React.createContext();


const initialState = {
    sideToggel : false ,
    productDetailsToggel : false,
}
function switchReducer(state, action) {
    switch (action.type) {
        case "sideToggelSwitch" :
            return {sideToggel : !state.sideToggel }
    }
    switch (action.type) {
        case "productDetailsToggelSwitch" :
            return {productDetailsToggel : !state.productDetailsToggel }
        default:
            throw new Error("action failed");
    }
   
}

export default function SwitchContext(props) {
    const [state, dispatch] = React.useReducer(switchReducer, initialState)
    return (
        <DispatchSwitch.Provider value={dispatch}>
        <StateSwitch.Provider value={state}>
            {props.children}
        </StateSwitch.Provider>    
        </DispatchSwitch.Provider>
    ) 
}
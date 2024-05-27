import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    value:AuthState;
}

type AuthState = {
    isAuth:boolean;
    username:string;
    email:string;
}

const initialState:InitialState = {
    value:{
        isAuth:false,
        username:"",
        email:""
    }
}

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut:()=>{
            return initialState;
        },
        logIn: (state,action:PayloadAction<any>) => {
            return {
                value:{
                    isAuth:true,
                    username:action.payload.username,
                    email:action.payload.email
                }
            };
        }

    }
});


export const {logIn,logOut} = auth.actions;
export default auth.reducer;
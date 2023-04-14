import { configureStore } from '@reduxjs/toolkit';
import SignInRedux from "./Redux/Auth/SignIn-Redux"
import SignUpRedux from "./Redux/Auth/SignUp-Redux"
export const Store = configureStore({
    reducer: {

        SignInRedux:SignInRedux,
        SignUpRedux:SignUpRedux,
        
    }
})

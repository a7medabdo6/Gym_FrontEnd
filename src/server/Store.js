import { configureStore } from '@reduxjs/toolkit';
import SignInRedux from "./Redux/Auth/SignIn-Redux"
import SignUpRedux from "./Redux/Auth/SignUp-Redux"
import GetMenuRedux from "./Redux/Menu/Get-Menu-Redux"
import GetBusinesRedux from "./Redux/Menu/Get-Busines-Redux"
export const Store = configureStore({
    reducer: {

        SignInRedux:SignInRedux,
        SignUpRedux:SignUpRedux,
        GetMenuRedux:GetMenuRedux,
        GetBusinesRedux:GetBusinesRedux,
        
    }
})

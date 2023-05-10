import { configureStore } from '@reduxjs/toolkit';
import SignInRedux from "./Redux/Auth/SignIn-Redux"
import SignUpRedux from "./Redux/Auth/SignUp-Redux"
import GetMenuRedux from "./Redux/Menu/Get-Menu-Redux"
import GetBusinesRedux from "./Redux/Menu/Get-Busines-Redux"
import GetOffersRedux from "./Redux/Offers/Get-Offers-Redux"
import GetRateRedux from "./Redux/Rate/Get-Rate-Redux"
import PostRateRedux from "./Redux/Rate/Post-Rate-Redux"
export const Store = configureStore({
    reducer: {

        SignInRedux:SignInRedux,
        SignUpRedux:SignUpRedux,
        GetMenuRedux:GetMenuRedux,
        GetBusinesRedux:GetBusinesRedux,
        GetOffersRedux:GetOffersRedux,
        GetRateRedux:GetRateRedux,
        PostRateRedux:PostRateRedux
        
    }
})

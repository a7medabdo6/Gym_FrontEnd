import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector, useDispatch } from 'react-redux';
import { UseSigninApi } from '../../Api/Auth/Use-Login-User-Api';
import { SignInDataInfo } from '../../Redux/Auth/SignIn-Redux';
import { GetOffersDataInfo } from '../../Redux/Offers/Get-Offers-Redux';
import { UseGetOffersApi } from '../../Api/Offers/Use-Get-Offers-Api';




export const GetOffersApi = itemid => {
    const dispatch = useDispatch();
    const QueryClient = useQueryClient();

    return useQuery(["GetOffersHook",itemid],(itemid)=>UseGetOffersApi(itemid), {
      onSuccess: res => {
        
        
         dispatch(GetOffersDataInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;

      }
    });
  };


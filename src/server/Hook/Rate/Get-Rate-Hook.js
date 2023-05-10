import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector, useDispatch } from 'react-redux';
import { UseSigninApi } from '../../Api/Auth/Use-Login-User-Api';
import { SignInDataInfo } from '../../Redux/Auth/SignIn-Redux';
import { UseGetRateApi } from '../../Api/Rate/Use-Get-Rate-Api';
import { GetRateDataInfo } from '../../Redux/Rate/Get-Rate-Redux';





export const GetRateApi = itemid => {
    const dispatch = useDispatch();
    const QueryClient = useQueryClient();

    return useQuery(["GetRateHook",itemid],(itemid)=>UseGetRateApi(itemid), {
      onSuccess: res => {
        
        
         dispatch(GetRateDataInfo(res));
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


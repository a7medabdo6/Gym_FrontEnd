import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector, useDispatch } from 'react-redux';
import { UseSigninApi } from '../../Api/Auth/Use-Login-User-Api';
import { SignInDataInfo } from '../../Redux/Auth/SignIn-Redux';
import { UseGetBusinesApi } from '../../Api/Menu/Use-Get-Busines-Api';
import { GetBusinesDataInfo } from '../../Redux/Menu/Get-Busines-Redux';




export const GetBusinesApi = itemId => {
    const dispatch = useDispatch();
    const QueryClient = useQueryClient();
    // console.log(itemId,"333333333333333333333333");

    return useQuery(["GetBusinesHook",itemId],(itemId)=> UseGetBusinesApi(itemId), {
      onSuccess: res => {
        
        
         dispatch(GetBusinesDataInfo(res));
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


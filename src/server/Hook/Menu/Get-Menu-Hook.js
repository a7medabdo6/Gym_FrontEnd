import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector, useDispatch } from 'react-redux';
import { UseSigninApi } from '../../Api/Auth/Use-Login-User-Api';
import { SignInDataInfo } from '../../Redux/Auth/SignIn-Redux';
import { UseGetMenuApi } from '../../Api/Menu/Use-Get-Menu-Api';
import { GetMenuDataInfo } from '../../Redux/Menu/Get-Menu-Redux';



export const GetMenuApi = formData => {
    const dispatch = useDispatch();
    const QueryClient = useQueryClient();

    return useQuery("GetMenuHook",UseGetMenuApi, {
      onSuccess: res => {
        
        
         dispatch(GetMenuDataInfo(res));
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


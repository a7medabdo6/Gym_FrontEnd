import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector, useDispatch } from 'react-redux';
import { UseSignUpApi } from '../../Api/Auth/Use-SignUp-User-Api';
import { SignUpDataInfo } from '../../Redux/Auth/SignUp-Redux';
import { useNavigation } from '@react-navigation/native';



export const SignUpApi = data =>{
  const navigation = useNavigation();

    const dispatch = useDispatch();
    const QueryClient = useQueryClient();
    return(useMutation(UseSignUpApi,{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(SignUpDataInfo(result.data));
        
          navigation.navigate('Login');

     
  
  

    
        },
        onError: err => {
          const result = {
            status: err.status + '-' + err.statusText,
            headers: err.headers,
            data: err?.response?.data?.message
          };
          // console.log(result,"eroorrrrrrrr");

          console.log(err,"err");
          dispatch(errors(result?.data));

          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
         
  
        }
      }))

} 

import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector, useDispatch } from 'react-redux';
import { PostRateDataInfo } from '../../Redux/Rate/Post-Rate-Redux';
import { UsePostRateApi } from '../../Api/Rate/Use-Post-Rate-Api';






export const PostRateApi = data =>{
    const dispatch = useDispatch();
    const QueryClient = useQueryClient();
    return(useMutation(UsePostRateApi,{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(PostRateDataInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');

        //   setTimeout(()=>{ router.history.push('/CarePlan');
        // },2000)
  
  
  //  setTimeout(() => {
  //     router.history.push('/presentation');
  //  }, 2000);
    
        },
        onError: err => {
          const result = {
            status: err.status + '-' + err.statusText,
            headers: err.headers,
            data: err?.response?.data?.message
          };
          // console.log(result,"eroorrrrrrrr");

          console.log(err);
          dispatch(errors(result?.data));

          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
         
  
        }
      }))

} 


import BaseUrl from '../../BaseUrl'


export const UseSignUpApi  = async data => {
  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  try {
    const res = await BaseUrl.post(
      'users/signup',data ,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res,"res");

      return res
  } catch (error) {
    console.log(error,"error")
  }
 
};



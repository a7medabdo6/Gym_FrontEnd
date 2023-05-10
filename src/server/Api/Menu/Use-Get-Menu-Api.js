
import BaseUrl from '../../BaseUrl'


export const UseGetMenuApi  = async data => {
  console.log(data,"111111111111111111111111");
  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  return await BaseUrl.get(
    'busines-type',data );
};

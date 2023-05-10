
import BaseUrl from '../../BaseUrl'


export const UseGetBusinesApi  = async itemId => {
  let id =itemId?.queryKey[1]
  // console.log(itemId?.queryKey[1],"333333333333333333333333");

  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  return await BaseUrl.get(
    `busines/busines-bycategory/${id}` );
};

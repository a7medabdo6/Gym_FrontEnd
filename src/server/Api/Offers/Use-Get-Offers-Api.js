



import BaseUrl from '../../BaseUrl'


export const UseGetOffersApi  = async itemid => {
  let id =itemid?.queryKey[1]

  return await BaseUrl.get(
    `business-offers/all/${id}`);
};




// import BaseUrl from '../../BaseUrl'


// export const UseGetOffersApi  = async itemid => {
//   let id =itemid?.queryKey[1]
//   console.log("333jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj333333333333333333333");

//   // const config = {
//   //     headers: {
          
//   //         token: localStorage.getItem("token")
//   //     }
//   // }
//   return await BaseUrl.get(
//     `business-offers/all/9` );
// };

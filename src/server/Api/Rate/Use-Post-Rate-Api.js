



import BaseUrl from '../../BaseUrl'


export const UsePostRateApi  = async data => {
  console.log(data,"8888888888888888888888888888888888");

  return await BaseUrl.post(
    `review`,data);
};





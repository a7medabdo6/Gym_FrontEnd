



import BaseUrl from '../../BaseUrl'


export const UseGetRateApi  = async itemid => {
  // let id =itemid?.queryKey[1]

  return await BaseUrl.get(
    `review`);
};





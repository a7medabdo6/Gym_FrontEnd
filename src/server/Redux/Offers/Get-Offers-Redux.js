import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetOffersData: null,
    isSuccses:false,
  error:[]
};

export const GetOffersRedux = createSlice({
    name: 'GetOffers',
    initialState,
    reducers: {
        GetOffersDataInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.GetOffersData = action.payload;
        console.log(state.GetOffersData);

      },
      errors: (state, action) => {
        state.error = action.payload;
        console.log(state.error);

          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
        },
    
    }
  });

  // Action creators are generated for each case reducer function
export const { GetOffersDataInfo ,errors} = GetOffersRedux.actions;

export default GetOffersRedux.reducer;

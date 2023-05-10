import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetRateData: null,
    isSuccses:false,
  error:[]
};

export const GetRateRedux = createSlice({
    name: 'GetRate',
    initialState,
    reducers: {
        GetRateDataInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.GetRateData = action.payload;
        console.log(state.GetRateData);

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
export const { GetRateDataInfo ,errors} = GetRateRedux.actions;

export default GetRateRedux.reducer;

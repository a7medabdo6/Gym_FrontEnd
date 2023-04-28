import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetBusinesData: null,
    isSuccses:false,
  error:[]
};

export const GetBusinesRedux = createSlice({
    name: 'GetBusines',
    initialState,
    reducers: {
        GetBusinesDataInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.GetBusinesData = action.payload;
        console.log(state.GetBusinesData);

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
export const { GetBusinesDataInfo ,errors} = GetBusinesRedux.actions;

export default GetBusinesRedux.reducer;

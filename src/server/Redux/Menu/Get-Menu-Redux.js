import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    GetMenuData: null,
    isSuccses:false,
  error:[]
};

export const GetMenuRedux = createSlice({
    name: 'GetMenu',
    initialState,
    reducers: {
        GetMenuDataInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.GetMenuData = action.payload;
        console.log(state.GetMenuData);

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
export const { GetMenuDataInfo ,errors} = GetMenuRedux.actions;

export default GetMenuRedux.reducer;

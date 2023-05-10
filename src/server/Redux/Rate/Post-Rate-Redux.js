import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    PostRateData: null,
    isSuccses:false,
  error:[]
};

export const PostRateRedux = createSlice({
    name: 'PostRate',
    initialState,
    reducers: {
        PostRateDataInfo: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.PostRateData = action.payload;
        console.log(state.PostRateData);

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
export const { PostRateDataInfo ,errors} = PostRateRedux.actions;

export default PostRateRedux.reducer;

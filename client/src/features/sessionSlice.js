import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: null,
    buddy: { id: null, name: null, online: null },
    buddyProgress: {},
    interests: [],
    mainGoals: [],
  },
  reducers: {
    setUser: (state, action) => {
      console.log('session user', action);
      return { ...state, user: {...action.payload} };
    },
    setBuddy: (state, action) => {
      return { ...state, buddy: { ...state.buddy, ...action.payload } };
    },
    setInterests: (state, action) => {
      return { ...state, interests: {...action.payload} };
    },
    updateInterest: (state, action) => {
      const { id, checked } = action.payload;
      return { ...state, interests: {...state.interests, [id]: {...state.interests[id], isInterest: checked }} }
    },
    resetSession: (state, action) => {
      return { ...state, 
        user: null, 
        buddy: { id: null, name: null, online: null },
        buddyProgress: {},
        interests: [],
        mainGoals:[] 
      };
    },
    //MAIN GOAL STATE
    addNewGoal: (state, action) => {
      console.log('Added new goal', state);
      state.mainGoals.push(action.payload);
    },
    setGoals: (state,action) => {
      return { ...state, mainGoals: action.payload };
    },
    //BUDDY PROGRESS
    setBuddyProgress: (state, action) => {
      console.log('buddy progress',action.payload);
      return { ...state, buddyProgress: { ...action.payload } };
    },

  }
});

// Action creators are generated for each case reducer function
export const { setUser, setBuddy, setInterests, updateInterest, resetSession, setBuddyProgress } = sessionSlice.actions;
export default sessionSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import apis from './apis';

const initialState = {
  isAddingClink: false,
  isAddingBookmark: false,
  isFetchingClinks: false,
  isFetchingBookmarks: false,
  clinks: [],
  bookmarks: []
};

const clinkSlice = createSlice({
  name: 'clink',
  initialState,
  reducers: {
    addClinkStart(state){
      state.isAddingClink = true;
    },
    addClinkSucceed(state, action){
      state.isAddingClink = false;
      state.clinks = [action.payload, ...state.clinks]
      delete state.clinkError;
    },
    addClinkFailed(state, action){
      state.isAddingClink = false;
      state.clinkError = action.payload;
    },
    addBookmarkStart(state){
      state.isAddingBookmark = true;
    },
    addBookmarkSucceed(state, action){
      state.isAddingBookmark = false;
      state.bookmarks = [action.payload, ...state.bookmarks]
      delete state.clinkError;
    },
    addBookmarkFailed(state, action){
      state.isAddingBookmark = false;
      state.bookmarkError = action.payload;
    },
    fetchClinksStart(state){
      state.isFetchingClinks = true;
    },
    fetchClinksSucceed(state, action){
      state.isFetchingClinks = false;
      state.clinks = action.payload
      delete state.clinkError;
    },
    fetchClinksFailed(state, action){
      state.isFetchingClinks = false;
      state.clinkError = action.payload;
    },
    fetchBookmarksStart(state){
      state.isFetchingBookmarks = true;
    },
    fetchBookmarksSucceed(state, action){
      state.isFetchingBookmarks = false;
      state.bookmarks = action.payload
      delete state.bookmarkError;
    },
    fetchBookmarksFailed(state, action){
      state.isFetchingBookmarks = false;
      state.bookmarkError = action.payload;
    }     
  },
});

export const {
  addClinkStart, addClinkSucceed, addClinkFailed, 
  addBookmarkStart, addBookmarkSucceed, addBookmarkFailed,
  fetchClinksStart, fetchClinksSucceed, fetchClinksFailed,
  fetchBookmarksStart, fetchBookmarksSucceed, fetchBookmarksFailed
} = clinkSlice.actions;

export const addClink = (title, token, callbackSucceed, callbackFailed) => async dispatch => {
  try {
    dispatch(addClinkStart())
    const response = await apis.addClink(title, token) 
    dispatch(addClinkSucceed(response.data))
    callbackSucceed()
  } catch (err) {
    dispatch(addClinkFailed(err.response.data.message))
    callbackFailed(err.response.data.message)
  }
}

export const addBookmark = (link, title, description, clink, callbackSucceed, callbackFailed) => async dispatch => {
  try {
    dispatch(addBookmarkStart())
    const response = await apis.addBookmark(link, title, description, clink)
    console.log(response)
    dispatch(addBookmarkSucceed(response.data))
    callbackSucceed()
  } catch (err) {
    dispatch(addBookmarkFailed(err.response.data.message))
    callbackFailed(err.response.data.message)
  }
}

export const fetchClinks = (token) => async dispatch => {
  try {
    dispatch(fetchClinksStart())
    const response = await apis.fetchClinks(token)
    dispatch(fetchClinksSucceed(response.data))
  } catch (err) {
    dispatch(fetchClinksFailed(err.response.data.message))
  }
}

export const fetchBookmarks = (token, clinkId) => async dispatch => {
  try {
    dispatch(fetchBookmarksStart())
    const response = await apis.fetchBookmarks(token, clinkId)
    console.log(response)
    dispatch(fetchBookmarksSucceed(response.data))
  } catch (err) {
    dispatch(fetchBookmarksFailed(err.response.data.message))
  }
}

export default clinkSlice.reducer;
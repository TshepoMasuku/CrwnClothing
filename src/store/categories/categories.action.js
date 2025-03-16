import { getCategoriesAndDocuments } from "./../../utils/firebase/firebase.util";
import { createAction } from './../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from "./categories.types";


export const fetchCategoriesRequest = () => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST, "");

export const fetchCategoriesRequestSuccess = (categoriesArray) => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesRequestFailed = (error) => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesRequestSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesRequestFailed(error.message));
  }
};

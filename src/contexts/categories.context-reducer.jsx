import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";
import { createAction } from "../utils/reducer/reducer.utils";
// import SHOP_DATA from "../shop-data.js";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

const INITIAL_STATE = {
  categoriesMap: {}
}

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP',
}

const categoriesReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return({ ...state, categoriesMap: payload });
    default:
      throw new Error(`Unhandled type ${type} from categories reducer.`);
  }
}

export const CategoriesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(categoriesReducer, INITIAL_STATE);
  const { categoriesMap } = state;

  const setCategoriesMap = (categoryMap) => {
    dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap))
  };

  useEffect(() => {
    // Adding a new collection and documents in our firestore
    // addCollectionAndDocuments('categories', SHOP_DATA)

    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};

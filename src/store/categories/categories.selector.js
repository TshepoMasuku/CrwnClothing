import { createSelector } from 'reselect';


const selectCategoriesSlice = (state) => state.categories;

// selectExample1 = createSelector([inputSelector], (outputSelector) => {});
// selectExample2 = createSelector([selectorFuncName], (selector'sOutputVariable) => {});

export const selectCategoriesMap = createSelector(
  [selectCategoriesSlice], 
  (categories) => categories.categoriesMap
); 
// export const selectCategoriesMap = (state) => state.categories.categoriesMap;

// From Yihua's Lesson on Reselect and creating this selector.
// export const selectCategoriesMapping = createSelector(
//   [selectCategoriesMap], (categoriesMap) => {
//     categoriesMap.reduce((acc, category) => {
//       const { title, items } = categoriesMap[category];
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// });

// My approach to creating this selector referencing Yihua's Lesson and selector.
export const selectCategoriesMapping = createSelector(
  [selectCategoriesMap], (categoriesMap) => {
    return Object.keys(categoriesMap).reduce((total, category) => {
      const title = category;
      const items = categoriesMap[category];
      total[title.toLowerCase()] = items;
      return total;
    }, {})
});

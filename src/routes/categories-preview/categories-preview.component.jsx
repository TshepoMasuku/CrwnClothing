import { Fragment } from "react";
// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/Spinner.component";


function CategoriesPreview() {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log('isLoading :>> ', isLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
        ) : (
        Object.keys(categoriesMap).map((categoryTitle) => {
          const products = categoriesMap[categoryTitle];
          return (
            <CategoryPreview key={categoryTitle} title={categoryTitle} products={products} />
          );
        })
      )}
    </Fragment>
  )
}

export default CategoriesPreview;

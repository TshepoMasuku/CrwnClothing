import { Fragment } from "react";
// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";


function CategoriesPreview() {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((categoryTitle) => {
        const products = categoriesMap[categoryTitle];
        return (
          <CategoryPreview
            key={categoryTitle}
            title={categoryTitle}
            products={products}
          />
        );
      })}
    </Fragment>
  )
}

export default CategoriesPreview;

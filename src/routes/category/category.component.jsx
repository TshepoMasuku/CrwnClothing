import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";


function Category() {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <CategoryTitle>
        {category.toUpperCase()}
      </CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </CategoryContainer>
    </Fragment>
  );
}

export default Category;

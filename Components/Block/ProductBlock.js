// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ProductData from '../Data/ProductData';

function ProductBlock(props) {
  // Access post fields map
  // console.log(props)
  const product = props.product.fields;
  // console.log(product)

  return (
    <div className='productSection'>
      {/* <p>Block Title: {product.blockTitle}</p> */}
      <p class='productHeading'>Style: {product.style}</p>
      <ProductData product={product.productComponent} />
    </div>
  );
}

export default ProductBlock;

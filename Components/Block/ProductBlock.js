// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ProductData from '../Data/ProductData';

function ProductBlock(props) {
  // Access post fields map
  // console.log(props)
  const product = props.product.fields;
  // console.log(product)
  let teaser = false
  if (product.style == 'Teaser') {
    teaser = true
  }
  if (product.style == 'PurchasePath') {
    product.productComponent.url = '/product/' + product.productComponent.fields.slug
  }
  // console.log(product)

  return (
    <div className='productSection'>
      {/* <p>Block Title: {product.blockTitle}</p> */}
      <p className='productHeading'>Style: {product.style}</p>
      <ProductData product={product.productComponent} teaser={teaser}/>
    </div>
  );
}

export default ProductBlock;

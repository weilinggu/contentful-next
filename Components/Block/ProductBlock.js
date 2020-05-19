// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ProductData from '../Data/ProductData';

function ProductBlock(product, key, productOnly) {
  // Access post fields map
  const productFields = product.fields;
  // console.log(product)
  let teaser = false
  if (product.style == 'Teaser') {
    teaser = true
  }
  if (product.style == 'PurchasePath') {
    product.productComponent.url = '/product/' + product.productComponent.fields.slug
  }

  return (
    <div className='productSection'>
      {/* <p>Block Title: {product.blockTitle}</p> */}
      <p className='productHeading'>Style: {product.style}</p>
      <ProductData product={product} teaser={teaser}/>
    </div>
  );
}

export default ProductBlock;


// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ProductComponent from './ProductComponent'

function ProductBlock(props) {
    // Access post fields map
    // console.log(props)
    const product = props.product.fields;
    // console.log(product)
  
    return (
      <div className="card">
          <p>Block Title: {product.blockTitle}</p>
          <p>Style: {product.style}</p>
        <ProductComponent product={product.productComponent}/>
      </div>
    );
  }
  
  export default ProductBlock;
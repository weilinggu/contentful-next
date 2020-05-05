import ProductBlock from './ProductBlock'

function ProductPage(props) {
    // console.log(props.product.fields)
    const product = props.product.fields;
  
    return (
      <div className="column">
        <p>Page Title: {product.pageTitle}</p>
        <ProductBlock product={product.productBlock}/>
      </div>
    );
  }
  
  export default ProductPage;
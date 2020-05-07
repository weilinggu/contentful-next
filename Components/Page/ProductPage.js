import ProductBlock from '../Block/ProductBlock'
import InstructionBlock from '../Block/InstructionBlock'

function ProductPage(props) {
    console.log(props.product.fields.instructionBlock)
    const product = props.product.fields;
  
    return (
      <div className="column">
        <p>Page Title: {product.pageTitle}</p>
        <ProductBlock product={product.productBlock}/>
        {product.instructionBlock && <InstructionBlock block={product.instructionBlock}/>}
      </div>
    );
  }
  
  export default ProductPage;
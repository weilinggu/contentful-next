import ProductBlock from '../Block/ProductBlock'
import InstructionBlock from '../Block/InstructionBlock'

function ProductPage(props) {
    const product = props.product.fields;
    console.log(product.instructionBlock)
  
    return (
      <div className="column">
        <h1>{product.pageTitle}</h1>
        <ProductBlock product={product.productBlock}/>
        {product.instructionBlock && props.productOnly === undefined && <InstructionBlock block={product.instructionBlock}/>}
      </div>
    );
  }
  
  export default ProductPage;
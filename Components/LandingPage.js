import ProductBlock from './ProductBlock'
import InstructionBlock from './InstructionBlock'

function LandingPage(props) {
    // console.log(props.page.fields)
    const page = props.page.fields;
    console.log(page.blocks[0].sys.contentType.sys.id)
    let block_component = []
    page.blocks.forEach(block => {
      if (block.sys.contentType.sys.id == 'productBlock') {
        block_component.push(<ProductBlock product={block} key={block.fields.blockTitle} />)
      }
      if (block.sys.contentType.sys.id == 'instructionBlock') {
        block_component.push(<InstructionBlock block={block} key={block.fields.title} />)
      }
    })
    // console.log(block_component)
  
    return (
      <div className="column">
        <p>Page Title: {page.title}</p>
        <p>Page Description: {page.description}</p>
        {/* {page.blocks &&
                page.blocks.map(block => (
                  (block.sys.contentType.sys.id == 'productBlock' ? 
                    <ProductBlock product={block} key={block.fields.blockTitle} />
                    :
                    <InstructionBlock product={block} key={block.fields.blockTitle} />
                )
                  // (block.sys.contentType.sys.id == 'instructionBlock' && (
                  //   <InstructionBlock product={block} key={block.fields.blockTitle} />
                  // ))
                ))} */}
          {block_component}
      </div>
    );
  }
  
  export default LandingPage;
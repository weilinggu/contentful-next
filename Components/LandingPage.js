import ProductBlock from './ProductBlock'

function LandingPage(props) {
    // console.log(props.page.fields)
    const page = props.page.fields;
    console.log(page.blocks[0].sys.contentType.sys.id)
  
    return (
      <div className="column">
        <p>Page Title: {page.title}</p>
        <p>Page Description: {page.description}</p>
        {page.blocks &&
                page.blocks.map(block => (
                  (block.sys.contentType.sys.id == 'productBlock' && (
                    <ProductBlock product={block} key={block.fields.blockTitle} />
                  ))
                ))}
      </div>
    );
  }
  
  export default LandingPage;
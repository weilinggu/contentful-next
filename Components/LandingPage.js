import ProductBlock from './ProductBlock'

function LandingPage(props) {
    // console.log(props.page.fields)
    const page = props.page.fields;
    console.log(page.blocks[0])
  
    return (
      <div className="column">
        <p>Page Title: {page.title}</p>
        <p>Page Description: {page.description}</p>
        {/* <ProductBlock product={page.blocks[0]} key={page.blocks[0].fields.blockTitle} /> */}
        {page.blocks &&
                page.blocks.map(block => (
                  <ProductBlock product={block} key={block.fields.blockTitle} />
                ))}
      </div>
    );
  }
  
  export default LandingPage;
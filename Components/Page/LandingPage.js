import ProductBlock from '../Block/ProductBlock';
import InstructionBlock from '../Block/InstructionBlock';
import StoryCarouselBlock from '../Block/StoryCarouselBlock';

function LandingPage(props) {
  // console.log(props.page.fields)
  const page = props.page.fields;
  let block_component = [];
  if (page.blocks) {
    page.blocks.forEach(block => {
      if (block.sys.contentType.sys.id == 'productBlock') {
        block_component.push(
          <ProductBlock product={block} key={block.fields.blockTitle} />
        );
      }
      if (block.sys.contentType.sys.id == 'instructionBlock') {
        block_component.push(
          <InstructionBlock block={block} key={block.fields.title} />
        );
      }
      if (block.sys.contentType.sys.id == 'storyCarouselBlock') {
        block_component.push(
          <StoryCarouselBlock block={block} key={block.fields.title} />
        );
      }
    });
  }
  
  // console.log(block_component)

  return (
    <div className='column landing'>
      <h1>{page.title}</h1>
      <p className='pageDescription'>Page Description: {page.description}</p>
      {block_component}
    </div>
  );
}

export default LandingPage;

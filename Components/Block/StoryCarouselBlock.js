
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import StoryData from '../Data/StoryData'

function StoryCarouselBlock(props) {
    // Access post fields map
    // console.log(props)
    const block = props.block.fields;
    console.log(block)
  
    return (
      <div className="card">
          <p>Block Title: {block.title}</p>
          <p>Style: {block.style}</p>
          {block.data &&
          block.data.map(data => (
            <StoryData data={data} key={data.sys.id}/>
          ))}
      </div>
    );
  }
  
  export default StoryCarouselBlock;
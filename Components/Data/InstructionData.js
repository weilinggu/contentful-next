
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import TextImageData from './TextImageData'

function InstructionData(props) {
  // Access post fields map
  // console.log(props)
  const block = props.block.fields;
  console.log(block)

  return (
    <div className="column">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-header">
          <div className="card-title h5">{block.title}</div>
        </div>
        {block.instructions &&
                block.instructions.map(instruction => (
                  <TextImageData data={instruction} key={instruction.sys.id}/>
                )
                  
                )
        }
      </div>
    </div>
  );
}

export default InstructionData;
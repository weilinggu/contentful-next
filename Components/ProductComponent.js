
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

function ProductComponent(props) {
  // Access post fields map
  // console.log(props)
  const product = props.product.fields;
  // console.log(product)

  return (
    <div className="column">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-image">
          {product.image &&
                product.image.map(image => (
                  <img key={image.fields.file.url} src={image.fields.file.url} className="img-responsive img-fit-cover" style={{ height: 265 }} />
                ))}
        </div>
        <div className="card-header">
          <div className="card-title h5">{product.productName}</div>
        </div>
        <div className="card-body">{product.productDescription}</div>
      </div>
    </div>
  );
}

export default ProductComponent;
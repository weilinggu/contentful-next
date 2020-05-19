
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

function ProductData(product, teaser) {
  // Access post fields map
  // const productFields = product.fields;

  const productComponent = product.product.product.fields.productComponent
  const fields = productComponent.fields

  return (
    <div className="column">
      <div className="card" style={{ height: "100%" }}>
      {
        <a><div className="card-title h5">{fields.productName}</div></a>}
        <div className="card-image">
          {fields.image &&
                fields.image.map(image => (
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

export default ProductData;
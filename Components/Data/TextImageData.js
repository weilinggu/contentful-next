function TextImageData(props) {
  // Access post fields map
  // console.log(props)
  const data = props.data.fields;
//   console.log(data);

  return (
    <div className="column">
      <div className="card-image">
        <img
          key={data.image.fields.file.url}
          src={data.image.fields.file.url}
          className="img-responsive img-fit-cover"
          style={{ height: 265 }}
        />
      </div>
      <div className="card-body">{data.text}</div>
    </div>
  );
}

export default TextImageData;

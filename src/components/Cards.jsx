const Cards = (props) => {
  return (
    <div className="card">
      <figure className="card-css">
        <img src={props.imgurl} alt={props.imgalt} />
        <figcaption>
          <h3>{props.text}</h3>
        </figcaption>
      </figure>
    </div>
  );
};

export default Cards;

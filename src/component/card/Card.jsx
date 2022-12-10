const Card = ({ thumbnail, title, description, brand, price }) => {
  return (
    <div className="card__container">
      <div className="card__contents">
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="brand-et-price">
          <p className="brand">{brand}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

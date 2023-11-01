import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

  const {_id, title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-red-500 text-xl font-semibold">${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button  className="btn text-white bg-orange-600">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
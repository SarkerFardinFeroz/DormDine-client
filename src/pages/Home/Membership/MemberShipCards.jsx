import { Link } from "react-router-dom";

const MemberShipCards = ({ plan }) => {
  const { image, type } = plan;
  return (
    <div className="my-6">
      <div className="card flex-row shadow-xl border">
        <figure>
          <img className="w-[320px] h-[250px] object-cover" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{type} Membership</h2>
          <p>Click the button to get exclusive package</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${type}`}>
              <button className="py-3 px-5 rounded-xl  bg-[#871900] text-white ">
                PURCHASE
              </button>
            </Link>
            {/* TODO:complete task 5  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipCards;

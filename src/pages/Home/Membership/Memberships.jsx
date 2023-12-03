import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import MemberShipCards from "./MemberShipCards";
import Cover from "../../../components/Cover/Cover";

const Memberships = () => {
  const image = "https://i.ibb.co/K97v9XR/cover2.png";
  const [plan, setPlan] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/membership").then((res) => {
      setPlan(res.data);
    });
  },[axiosPublic]);
  return (
    <>
      <div className="mt-5">
        <Cover img={image} title="EXCLUSIVE MEMBERSHIP" />
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-5">
        {plan.map((plan, idx) => (
          <MemberShipCards key={idx} plan={plan} />
        ))}
        {/* <Silver />
      <Gold />
      <Platinum /> */}
      </div>
    </>
  );
};

export default Memberships;

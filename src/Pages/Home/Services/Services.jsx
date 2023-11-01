// import { useEffect } from "react";
// import { useState } from "react";
import ServiceCard from "./ServiceCard";
import UseServices from "../../../Hooks/UseServices";

const Services = () => {

  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch('https://car-doc-server-pink.vercel.app/services').then(res => res.json()).then(data => setServices(data));

  // }, [])

  const services = UseServices();
  console.log(services);
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3 className="text-5xl text-orange-500 font-bold">Our Services</h3>
        <h3 className="text-3xl text-gray-500 font-semibold">Our Service Area</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt beatae corrupti at? Repudiandae doloribus saepe nostrum! Eaque qui corporis, quisquam sed tempora pariatur quibusdam eius perferendis veniam iusto placeat magnam?</p>
      </div>
      
      <div className="grid grid-cols-3 gap-5">
        {
         services && services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
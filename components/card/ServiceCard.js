import ServiceCardWrapper from "./ServiceCardWrapper";

function ServiceCard(image) {
  return (
    <div className="mt-24">
      <span className="text-center">
        <p className="text-bold capitalize text-5xl">Our Services</p>
      </span>
      <ServiceCardWrapper />
    </div>
  );
}

export default ServiceCard;

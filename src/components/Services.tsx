import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import ServiceCarousel from "./servicesOffered/ServicesCarousel";
function Services() {
  const service_body = [
    {
      name: "3 body sculpting session package",
      image: "service.png",
    },
    {
      name: "6 body sculpting session package",
      image: "service.png",
    },
    {
      name: "8 body sculpting session package",
      image: "service.png",
    },
    {
      name: "10 body sculpting session package",
      image: "service.png",
    },
  ];
  const service_bbl = [
    {
      name: "Non-Invasive BBL 3 sessions",
      image: "service.png",
    },
    {
      name: "Non-Invasive BBL 6 sessions",
      image: "service.png",
    },
    {
      name: "Non-Invasive BBL 8 sessions",
      image: "service.png",
    },
  ];
  const service_woodtherapy = [
    {
      name: "Chin Sculpting",
      image: "service.png",
    },
    {
      name: "Full body massage",
      image: "service.png",
    },
    {
      name: "360 body treatment",
      image: "service.png",
    },
  ];
  return (
    <div className="p-4">
      <div className="text-3xl font-medium text-900 mb-3">Services</div>
      <Divider />
      {/* <div className="text-3xl font-medium text-900 mb-3">
        Body Sculpting 1 area
      </div>
      <ServiceCarousel service={service_body} />
      <div className="text-3xl font-medium text-900 mb-3">Non-Invasive BBL</div>
      <ServiceCarousel service={service_bbl} />
      <div className="text-3xl font-medium text-900 mb-3">
        Wood Therapy Add on
      </div>
      <ServiceCarousel service={service_woodtherapy} /> */}
      <div className="max-w-sm">
        <Image src="/prices.jpeg" alt="prices" preview />
      </div>
    </div>
  );
}
export default Services;

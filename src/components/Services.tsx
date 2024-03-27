import { Divider } from "primereact/divider";
import ServiceCarousel from "./servicesOffered/ServicesCarousel";
function Services() {
  return (
    <div className="p-4">
      <div className="text-3xl font-medium text-900 mb-3">Services</div>
      <Divider />
      <ServiceCarousel />
    </div>
  );
}
export default Services;

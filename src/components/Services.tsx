import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
function Services() {
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
      <div className="flex flex-column md:flex-row gap-5 align-items-center">
        <Image src="/prices.jpeg" alt="prices" preview width="275" />
        <div style={{ maxWidth: "1100px" }}>
          <div className="mb-3 font-bold text-3xl">
            <span className="text-900">Our </span>
            <span className="text-primary">Service Area</span>
          </div>
          <p>
            We proudly serve Federal Way and the surrounding areas with our
            exceptional wood therapy and massage services. Our commitment is to
            bring relaxation, wellness, and rejuvenation to your doorstep.
            Discover the natural beauty of Federal Way while experiencing the
            transformative power of our therapies.
          </p>
          <p className="text-md font-bold">
            Here is additional information on services we provide:
          </p>
          <p>
            <span className="text-primary font-bold">
              Ultrasonic cavitation
            </span>{" "}
            is a noninvasive way to break down fats using ultrasound waves.
            Resulting in liquefying fat cells which then use the lymphatic
            system to flush out the fat cells naturally. Results can be
            maintained by healthy habits
          </p>
          <p>
            <span className="text-primary font-bold">
              Ultrasonic cavitation
            </span>{" "}
            is a noninvasive way to break down fats using ultrasound waves.
            Resulting in liquefying fat cells which then use the lymphatic
            system to flush out the fat cells naturally. Results can be
            maintained by healthy habits
          </p>
          <p>
            <span className="text-primary font-bold">Radio frequency</span> (RF)
            is used to tighten skin and eliminate fat. RF uses electromagnetic
            devices that gives off heat to stimulate the production of collagen
            and elastin.
          </p>
          <p>
            <span className="text-primary font-bold">Laser Lipo</span> shrinks
            fat cells using noninvasice laser pads placed directly on the skin
            creating small holes in the cell's membrane allowing to release
            stored fatty acid.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
/*  const service_body = [
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
  ];*/

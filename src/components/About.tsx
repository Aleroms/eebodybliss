import { Button } from "primereact/button";

function About() {
  return (
    <div className=" m-4 surface-0 text-center">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">About </span>
        <span className="text-primary">E & E Body Bliss</span>
      </div>
      <div
        className="text-700 mb-6 text-center m-auto line-height-3"
        style={{ maxWidth: "700px" }}
      >
        At E&E Body Bliss, our mission is to guide you on a journey of
        self-discovery and well-being through the transformative power of wood
        therapy and massage. We proudly serve Federal Way, Washington and the
        surrounding areas with our exceptional wood therapy and massage
        services.
      </div>
      <Button label="contact" />
    </div>
  );
}
export default About;

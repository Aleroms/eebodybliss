import { Button } from "primereact/button";
function Hero() {
  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section id="Home">
          <span className="block text-6xl font-bold mb-1">
            E & E Body Bliss Sculpting
          </span>
          <div className="text-6xl text-primary font-bold mb-3">
            relaxation, rejuvenation, balance
          </div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Body sculpture, or body contouring, is a noninvasive way to target
            and reduce stubborn body fat, tone and sculpt your body along with
            restoring firmness, and reduce cellulite. With no downtime and is a
            great alternative to surgery.
          </p>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Through expertly crafted techniques, tailored sessions, and a deep
            passion for holistic healing, we aim to bring you relaxation,
            rejuvenation, and a profound sense of balance. Join us, and
            together, let's unlock the harmony within you.
          </p>

          <Button label="Services" type="button" className="p-button-raised" />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img
          src="/hero.jpg"
          alt="hero"
          className="md:ml-auto block md:h-full"
          style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
        />
      </div>
    </div>
  );
}
export default Hero;

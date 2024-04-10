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
            Body sculpture, or body contouring, is a noninvasive technique to
            target and reduce stubborn body fat, tone and sculpt your body along
            with restoring firmness, and reduce cellulite. With no downtime and
            is a great alternative to surgery.
          </p>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Wood Therapy is 100% natural technique to sculpt the body using
            wooden tools that help contour the body and break down localized
            fat.
          </p>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Through expertly crafted techniques, tailored sessions, and a deep
            passion for holistic healing, we aim to bring you relaxation,
            rejuvenation, and a profound sense of balance. Join us, and
            together, let's unlock the harmony within you.
          </p>

          <Button label="Services" type="button" className="p-button-raised" />
          <div className="grid mt-8">
            {/* instagram  */}
            <div className=" mb-4 px-5 align-items-centers">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-instagram text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">Instagram</div>
              <span className="text-700 line-height-3">
                <a
                  href="https://www.instagram.com/e_e_body_bliss/"
                  target="_blank"
                  className="text-primary"
                >
                  @e_e_body_bliss
                </a>
              </span>
            </div>
            {/* phone number */}
            <div className="mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-phone text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">Contact</div>
              <span className="text-700 line-height-3">(951) 258-5080</span>
            </div>
          </div>
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

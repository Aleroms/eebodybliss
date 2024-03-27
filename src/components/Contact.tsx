
function Contact() {
  return (
    <div className="text-center">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">Get in </span>
        <span className="text-blue-600">Touch</span>
      </div>
      <div className="text-700 mb-6">
        Join us on a journey to well-being! Book your session today and discover
        the harmony of mind, body, and spirit with E&E Body Bliss. 🌿✨
      </div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-map-marker text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Service area</div>
          <span className="text-700 line-height-3">
            Federal Way WA and surrounding area
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-phone text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Contact</div>
          <span className="text-700 line-height-3">(xxx) xxx-xxxx</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-instagram text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Instagram</div>
          <span className="text-700 line-height-3">
            Follow me on{" "}
            <a
              href="https://www.instagram.com/e_e_body_bliss/"
              target="_blank"
              className="text-primary"
            >
              instagram
            </a>{" "}
            @e_e_body_bliss
          </span>
        </div>

      </div>
    </div>
  );
}
export default Contact;

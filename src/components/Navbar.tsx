import { Menubar } from "primereact/menubar";

function Navbar() {
  const start = (
    <img
      alt="logo"
      src="/eebodybliss_logo.jpg"
      height="40"
      className="mr-2"
      style={{ borderRadius: "55px" }}
    />
  );
  const items = [
    {
      label: "Home",
    },
    {
      label: "About",
    },
    {
      label: "Services",
    },
    {
      label: "Gallery",
    },
    {
      label: "Contact",
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} start={start} />
    </div>
  );
}
export default Navbar;

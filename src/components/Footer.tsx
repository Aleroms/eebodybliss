function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="m-4 p-4 flex align-items-center gap-5">
      <div>
        <img
          src="/eebodybliss_logo.jpg"
          alt="logo"
          className="border-round-xs"
          width={75}
        />
      </div>
      <p>©{currentYear}. All rights reserved</p>
    </footer>
  );
}
export default Footer;

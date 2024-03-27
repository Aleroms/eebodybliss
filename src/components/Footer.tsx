function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="m-4 p-4">
      <div className="flex">
        <img src="/eebodybliss_logo.jpg" alt="logo" className="rounded-full" />
      </div>
      <p>©{currentYear}. All rights reserved</p>
    </footer>
  );
}
export default Footer;

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-44    absolute  w-full  ">
      <div className="flex w-full items-center justify-start pt-16 gap-4 ">
        <svg
          width="47"
          height="50"
          viewBox="0 0 47 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M-1.90735e-06 17L16 17L16 3.24249e-05L-1.90735e-06 17Z"
            fill="white"
          />
          <path d="M47 17H16V50L47 17Z" fill="white" />
        </svg>
        <h3 className="text-white">TRAFICO.</h3>
      </div>
      <div className="flex items-center  w-full justify-center pt-12 gap-x-24">
        <p>ABOUT</p>
        <p>HOW TO</p>
        <p>FAQS</p>
        <p>CONTACT US</p>
      </div>
    </nav>
  );
};

export default Navigation;

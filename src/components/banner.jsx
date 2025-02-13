const Banner = ({ img = "banner.jpg", children }) => {
  return (
    <section className={`banner bg-black bg-[url(banner.jpg)] bg-cover`}>
      <span className="block font-bold text-[40px] text-white text-center">
        {children}
      </span>
    </section>
  );
};

export default Banner;

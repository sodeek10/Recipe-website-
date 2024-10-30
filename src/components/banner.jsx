const Banner = ({ img = "banner.jpg", children }) => {
  return (
    <section className={`bg-black py-[133px] bg-[url(banner.jpg)] bg-cover`}>
      <span className="block font-bold text-[40px] text-white text-center">
        {children}
      </span>
    </section>
  );
};

export default Banner;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-100 py-[36px] px-[77px] text-[var(--neutral-600)] bg-yellow-400">
      <div className="flex gap-x-[270px] items-center">
        <div className="flex gap-x-[16px] items-center">
          <img src="/Ico.png" alt="ico" />
          <span className="font-medium text-[26px]">Delight at the table</span>
        </div>
        <div className="">
          <div className="text-[26px]"> Social Media:</div>
          <div className="flex gap-4">
            <Link to="/Youtube.png">
              <img src="/Youtube.png" alt="" />
            </Link>
            <Link to="/Twitter.png">
              <img src="/Twitter.png" alt="" />
            </Link>
            <Link to="/Browser.png">
              <img src="/Browser.png" alt="" />
            </Link>
            <Link to="/Pinterest.png">
              <img src="/Pinterest.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

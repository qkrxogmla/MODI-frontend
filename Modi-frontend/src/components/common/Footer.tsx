import { useNavigate } from "react-router-dom";
import style from "./Footer.module.css";

const FooterIcon: { [key: string]: string } = {
  home: "/icons/home.svg",
  search: "/icons/search.svg",
  add: "/icons/add.svg",
  map: "/icons/map.svg",
  mypage: "/icons/mypage.svg",
};

const Footer = () => {
  const navigator = useNavigate();
  return (
    <div className={style.footer_wrapper}>
      <div className={style.footer_container}>
        {Object.values(FooterIcon).map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={icon}
            onClick={() => {
              switch (index) {
                case 0:
                  navigator("/home");
                  break;
                case 1:
                  navigator("/search");
                  break;
                case 2:
                  navigator("/diary");
                  break;
                case 3:
                  navigator("/map");
                  break;
                case 4:
                  navigator("/mypage");
                  break;
                default:
                  break;
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;

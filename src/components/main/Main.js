import styles from "./Main.module.css";
import { Link, useLocation } from "react-router-dom";
import Overview from "./overview/Overview";
import Characters from "./characters/Characters";
import Review from "./review/Review";

const Main = () => {
  const location = useLocation();

  const style = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <ul className={styles.nav_links}>
        <Link style={style} to="/main/overview">
          <li>Overview</li>
        </Link>
        <Link style={style} to="/main/characters">
          <li>Characters</li>
        </Link>
        <Link style={style} to="/main/review">
          <li>Review</li>
        </Link>
      </ul>
      {location.pathname === "/main/overview" && <Overview />}
      {location.pathname === "/main/characters" && <Characters />}
      {location.pathname === "/main/review" && <Review />}
    </div>
  );
};

export default Main;

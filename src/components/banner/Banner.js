import styles from "./Banner.module.css";
import { Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <div className={styles.sticky_header}>
      <div className={styles.sticky_body}>
        <h3>MONEY HEIST</h3>
        <FaStar className={styles.fas_tar} />
        <FaStar className={styles.fas_tar} />
        <FaStar className={styles.fas_tar} />
        <FaStar className={styles.fas_tar} />
        <FaStar className={styles.fas_tar} />
        <p>2200 reviews</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </p>
        <Button variant="danger" className={styles.button}>
          Watch Trailer
        </Button>
        <Button variant="dark" className={styles.button}>
          Add Watchlist
        </Button>
      </div>
    </div>
  );
};

export default Banner;

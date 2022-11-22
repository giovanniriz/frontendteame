import { img_300, unavailable } from "../../config/Config";
import styles from "./SingleCharacter.module.css";

const SingleCharacter = ({
  id,
  poster,
  title,
  lang,
  name,
  media_type,
  vote_average,
  backdrop_path,
}) => {
  return (
    <div className={styles.media}>
      <img
        className={styles.poster}
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      {/* <img className='poster 'src={ backdrop_path? `${img_300}/${backdrop_path}` : unavailable} alt={title}/> */}

      <b className={styles.character}>{name}</b>
      <b>{id}</b>
      <span className={styles.subTitle}>
        {media_type === "tv" ? "TV Series" : "Movie"}
      </span>
      <span className={styles.subTitle}>{lang}</span>
    </div>
  );
};

export default SingleCharacter;

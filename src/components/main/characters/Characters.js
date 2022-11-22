import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Characters.module.css";
import SingleCharacter from "../../singlecharacter/SingleCharacter";

const Characters = () => {
  //   const [content, setContent] = useState([]);

  const fetchCharacters = async () => {
    const { data } = await axios.get(
      "https://movieapp-be-tim-e.herokuapp.com/api/characters"
    );
    console.log(data);
    // setContent(FormData)
  };

  //   useEffect(() => {
  //     fetchCharacters();
  //   });

  return (
    <div className={styles.characters}>
      <div className={styles.characters_1}>
        {/* {content && content.map((c) => <SingleCharacter 
                key={c.id} 
                id={c.id} 
                poster={c.poster_path} 
                title={c.title || c.name}
                name={c.original_name}
                lang={c.original_language}
                media_type={c.media_type}
                vote_average={c.vote_average}
                backdrop_path={c.backdrop_path}
                />)} */}

        <h1>Ini Characters!</h1>
      </div>
    </div>
  );
};

//   return (
//     <div className={styles.characters}>
//       <div className={styles.characters_1}>
//         {content &&
//           content.map((c) => (
//             <SingleCharacter
//               key={c.id}
//               id={c.id}
//               poster={c.poster_path}
//               title={c.title || c.name}
//               name={c.original_name}
//               lang={c.original_language}
//               media_type={c.media_type}
//               vote_average={c.vote_average}
//               backdrop_path={c.backdrop_path}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

export default Characters;

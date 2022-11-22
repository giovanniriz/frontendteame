import axios from "axios";
const Player = () => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/players/seasons",
    headers: {
      "x-rapidapi-key": "2a5440b533mshfa44e136bfdab11p1b8782jsn767015e2b156",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div>{console.log(options)}</div>;
};

export default Player;

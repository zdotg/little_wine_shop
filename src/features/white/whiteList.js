import { selectAllWhites } from "./whitesSlice";
import { useSelector } from "react-redux";
import { styles } from "../../listStyles";
import { Link } from "react-router-dom";

const WhiteList = () => {
  const { whiteList, isLoading, errMsg } = useSelector(selectAllWhites);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      <p>White List:</p>
      {whiteList.map((white) => (
        <li key={white.id} style={styles.listItem}>
          <Link to={`/white/${white.id}`}>
            <img src={white.image} alt={white.name} style={styles.image} />
          </Link>
          <p style={styles.text}>
            {white.name} ({white.year})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default WhiteList;

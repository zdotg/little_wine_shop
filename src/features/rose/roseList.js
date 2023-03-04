import { selectAllRoses } from "./rosesSlice";
import { useSelector } from "react-redux";
import { styles } from "../../listStyles";
import { Link } from "react-router-dom";

const RoseList = () => {
  const { roseList, isLoading, errMsg } = useSelector(selectAllRoses);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      <p>Rosé List:</p>
      {roseList.map((rose) => (
        <li key={rose.id} style={styles.listItem}>
          <Link to={`/rose/${rose.id}`}>
            <img src={rose.image} alt={rose.name} style={styles.image} />
          </Link>
          <p style={styles.text}>
            {rose.name} ({rose.year})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default RoseList;

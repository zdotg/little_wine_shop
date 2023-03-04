import { selectAllSparklings } from "./sparklingsSlice";
import { useSelector } from "react-redux";
import { styles } from "../../listStyles";
import { Link } from "react-router-dom";

const SparklingList = () => {
  const { sparklingList, isLoading, errMsg } = useSelector(selectAllSparklings);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      <p>Sparkling List:</p>
      {sparklingList.map((sparkling) => (
        <li key={sparkling.id} style={styles.listItem}>
          <Link to={`/sparkling/${sparkling.id}`}>
            <img
              src={sparkling.image}
              alt={sparkling.name}
              style={styles.image}
            />
          </Link>
          <p style={styles.text}>
            {sparkling.name} ({sparkling.year})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default SparklingList;

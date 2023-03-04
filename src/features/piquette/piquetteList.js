import { selectAllPiquettes } from "./piquettesSlice";
import { useSelector } from "react-redux";
import { styles } from "../../listStyles";
import { Link } from "react-router-dom";

const PiquetteList = () => {
  const { piquetteList, isLoading, errMsg } = useSelector(selectAllPiquettes);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      <p>Piquette List:</p>
      {piquetteList.map((piquette) => (
        <li key={piquette.id} style={styles.listItem}>
          <Link to={`/piquette/${piquette.id}`}>
            <img
              src={piquette.image}
              alt={piquette.name}
              style={styles.image}
            />
          </Link>
          <p style={styles.text}>
            {piquette.name} ({piquette.year})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PiquetteList;

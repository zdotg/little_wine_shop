import { selectAllPetnats } from "./petnatsSlice";
import { useSelector } from "react-redux";
import { styles } from "../../listStyles";
import { Link } from "react-router-dom";

const PetnatList = () => {
  const { petnatList, isLoading, errMsg } = useSelector(selectAllPetnats);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      <p>Petnat List:</p>
      {petnatList.map((petnat) => (
        <li key={petnat.id} style={styles.listItem}>
          <Link to={`/petnat/${petnat.id}`}>
            <img src={petnat.image} alt={petnat.name} style={styles.image} />
          </Link>
          <p style={styles.text}>
            {petnat.name} ({petnat.year})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PetnatList;

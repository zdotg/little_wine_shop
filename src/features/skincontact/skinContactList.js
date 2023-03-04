import { selectAllSkinContacts } from "./skincontactsSlice";
import { useSelector } from "react-redux";
import { styles } from "../../listStyles";
import { Link } from "react-router-dom";

const SkinContactsList = () => {
  const { skinContactList, isLoading, errMsg } = useSelector(
    selectAllSkinContacts
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      <p>Skincontact List:</p>
      {skinContactList.map((skincontact) => (
        <li key={skincontact.id} style={styles.listItem}>
          <Link to={`/skincontact/${skincontact.id}`}>
            <img
              src={skincontact.image}
              alt={skincontact.name}
              style={styles.image}
            />
          </Link>
          <p style={styles.text}>
            {skincontact.name} ({skincontact.year})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default SkinContactsList;

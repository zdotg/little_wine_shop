import { selectAllSkinContacts } from './skincontactsSlice';
import { useSelector } from 'react-redux';
import { styles } from '../../listStyles';

const SkinContactsList = () => {
  const { skinContactList, isLoading, errMsg } = useSelector(selectAllSkinContacts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      Skincontact List:
      {skinContactList.map((skincontact) => (
        <li key={skincontact.id} style={styles.listItem}>
          <a href={skincontact.url}>
            <img src={skincontact.image} alt={skincontact.name} style={styles.image} />
          </a>
          <p style={styles.text}>{skincontact.name} ({skincontact.year})</p>
        </li>
      ))}
    </ul>
  );
};

export default SkinContactsList;

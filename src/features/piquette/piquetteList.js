import { selectAllPiquettes } from './piquettesSlice';
import { useSelector } from 'react-redux';
import { styles } from '../../listStyles';

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
     Piquette List:
      {piquetteList.map((piquette) => (
        <li key={piquette.id} style={styles.listItem}>
          <a href={piquette.url}>
            <img src={piquette.image} alt={piquette.name} style={styles.image} />
          </a>
          <p style={styles.text}>{piquette.name} ({piquette.year})</p>
        </li>
      ))}
    </ul>
  );
};

export default PiquetteList;

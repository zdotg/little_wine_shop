import { selectAllSparklings } from './sparklingsSlice';
import { useSelector } from 'react-redux';
import { styles } from '../../listStyles';

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
      Sparkling List:
      {sparklingList.map((sparkling) => (
        <li key={sparkling.id} style={styles.listItem}>
          <a href={sparkling.url}>
            <img src={sparkling.image} alt={sparkling.name} style={styles.image} />
          </a>  
          <p style={styles.text}>{sparkling.name} ({sparkling.year})</p>
        </li>
      ))}
    </ul>
  );
};

export default SparklingList;

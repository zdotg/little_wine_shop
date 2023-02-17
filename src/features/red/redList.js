import { selectAllReds } from './redsSlice';
import { useSelector } from 'react-redux';
import { styles } from '../../listStyles';

const RedList = () => {
  const { redList, isLoading, errMsg } = useSelector(selectAllReds);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={styles.list}>
      <p>Red List:</p>
      {redList.map((red) => (
        <li key={red.id} style={styles.listItem}>
          <a href={red.url}>
            <img src={red.image} alt={red.name} style={styles.image} />
          </a>
          <p style={styles.text}>{red.name} ({red.year})</p>
        </li>
      ))}
    </ul>
  );
};

export default RedList;

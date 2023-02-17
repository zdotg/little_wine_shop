import { selectAllWhites } from './whitesSlice';
import { useSelector } from 'react-redux';
import { styles } from '../../listStyles';

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
          <a href={white.url}>
            <img src={white.image} alt={white.name} style={styles.image} />
          </a>  
          <p style={styles.text}>{white.name} ({white.year})</p>
        </li>
      ))}
    </ul>
  );
};

export default WhiteList;

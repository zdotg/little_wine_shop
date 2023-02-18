import { selectAllMerch } from './merchSlice';
import { useSelector } from 'react-redux';
import { merchStyles } from '../merchListStyles';

const MerchList = () => {
  const { merchList, isLoading, errMsg } = useSelector(selectAllMerch);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errMsg) {
    return <p>{errMsg}</p>;
  }

  return (
    <ul style={merchStyles.list}>
      <p>Merch:</p>
      {merchList.map((merch) => (
        <li key={merch.id} style={merchStyles.listItem}>
          <a href={merch.url}>
            <img src={merch.image} alt={merch.name} style={merchStyles.image} />
          </a>  
          <p style={merchStyles.text}>{merch.name} </p>
        </li>
      ))}
    </ul>
  );
};

export default MerchList;

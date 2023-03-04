import { selectAllMerch } from "./merchSlice";
import { useSelector } from "react-redux";
import { merchStyles } from "../merchListStyles";
import { Link } from "react-router-dom";

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
          <Link to={`/merch/${merch.id}`}>
            <img src={merch.image} alt={merch.name} style={merchStyles.image} />
          </Link>
          <p style={merchStyles.text}>{merch.name} </p>
        </li>
      ))}
    </ul>
  );
};

export default MerchList;

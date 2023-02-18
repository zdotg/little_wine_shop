import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectAllMerch } from '../../misc/merchSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';



const DisplayMerchList = () => {
    const items = useSelector((state) => [
        selectAllMerch(state)
    ]);
    console.log('display items:', items);
    return (
        <Row>
        {items.map((item, idx) => {
            const { merchItem, isLoading, errMsg } = item;
            if (isLoading) {
                return <Loading key={idx} />;
            }
            if (errMsg) {
                return <Error errMsg={errMsg} key={idx} />;
            }
            return (
                merchItem && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={merchItem} />
                    </Col>
                )
            );
        })}
    </Row>
    );
};

export default DisplayMerchList;
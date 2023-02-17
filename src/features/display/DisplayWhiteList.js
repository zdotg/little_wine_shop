import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllWhites } from '../white/whitesSlice';




const DisplayWhiteList = () => {
    const items = useSelector((state) => [
        selectAllWhites(state)
    ]);
    console.log('display items:', items);
    return (
        <Row>
        {items.map((item, idx) => {
            const { whiteList, isLoading, errMsg } = item;
            if (isLoading) {
                return <Loading key={idx} />;
            }
            if (errMsg) {
                return <Error errMsg={errMsg} key={idx} />;
            }
            return (
                whiteList && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={whiteList} />
                    </Col>
                )
            );
        })}
    </Row>
    );
};

export default DisplayWhiteList;
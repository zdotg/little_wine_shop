import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllReds } from '../red/redsSlice';



const DisplayRedList = () => {
    const items = useSelector((state) => [
        selectAllReds(state)
    ]);
    console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { redList, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    redList && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={redList} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayRedList;
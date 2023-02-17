import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllSparklings } from '../sparkling/sparklingsSlice';




const DisplaySparklingList = () => {
    const items = useSelector((state) => [
        selectAllSparklings(state)
    ]);
    console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { sparklingList, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    sparklingList && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={sparklingList} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplaySparklingList;
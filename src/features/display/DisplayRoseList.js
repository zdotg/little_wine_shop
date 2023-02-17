import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllRoses } from '../rose/rosesSlice';




const DisplayWineList = () => {
    const items = useSelector((state) => [
        selectAllRoses(state)
    ]);
    console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { roseList, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    roseList && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={roseList} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayWineList;
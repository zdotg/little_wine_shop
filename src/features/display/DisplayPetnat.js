import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllPetnats } from '../petnat/petnatsSlice';



const DisplayPetNatList = () => {
    const items = useSelector((state) => [
        selectAllPetnats(state)
    ]);
    console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { petnatList, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    petnatList && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={petnatList} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayPetNatList;
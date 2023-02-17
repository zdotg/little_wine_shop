import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllPiquettes } from '../piquette/piquettesSlice';




const DisplayPiquetteList = () => {
    const items = useSelector((state) => [
        selectAllPiquettes(state),
    ]);
    console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { piquetteList, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    piquetteList && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={piquetteList} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayPiquetteList;
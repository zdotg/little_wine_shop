import { selectAllWines } from './winesSlice';
import { Col, Row } from 'reactstrap';
import WineCard from './WineCard';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const WinesList = () => {
    const wines = useSelector(selectAllWines);
    console.log('wines:', wines);
    const isLoading = useSelector((state) => state.wines.isLoading);
    const errMsg = useSelector((state) => state.wines.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row className='ms-auto'>
            {wines.map((wine) => {
                return (
                    <Col md='5' className='m-4' key={wine.id}>
                        <WineCard wine={wine} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default WinesList;

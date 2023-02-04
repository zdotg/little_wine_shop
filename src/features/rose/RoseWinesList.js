import { selectAllRoses } from './rosesSlice';
import { Col, Row } from 'reactstrap';
import RoseCard from './RoseCard';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const RoseWinesList = () => {
    const roses = useSelector(selectAllRoses);
    console.log('roses:', roses);
    const isLoading = useSelector((state) => state.roses.isLoading);
    const errMsg = useSelector((state) => state.roses.errMsg);

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
            {roses.map((rose) => {
                return (
                    <Col md='5' className='m-4' key={rose.id}>
                        <RoseCard color={rose} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default RoseWinesList;

import { selectAllWhites } from './whitesSlice';
import { Col, Row } from 'reactstrap';
import WhiteWineCard from './WhiteWineCard';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const WhiteWinesList = () => {
    const whites = useSelector(selectAllWhites);
    console.log('whites:', whites);
    const isLoading = useSelector((state) => state.whites.isLoading);
    const errMsg = useSelector((state) => state.whites.errMsg);

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
            {whites.map((white) => {
                return (
                    <Col md='5' className='m-4' key={white.id}>
                        <WhiteWineCard color={white} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default WhiteWinesList;

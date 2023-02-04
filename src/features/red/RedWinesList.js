import { selectAllReds } from './redsSlice';
import { Col, Row } from 'reactstrap';
import RedWineCard from './RedWineCard';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const RedWinesList = () => {
    const reds = useSelector(selectAllReds);
    console.log('reds:', reds);
    const isLoading = useSelector((state) => state.reds.isLoading);
    const errMsg = useSelector((state) => state.reds.errMsg);

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
            {reds.map((red) => {
                return (
                    <Col md='5' className='m-4' key={red.id}>
                        <RedWineCard color={red} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default RedWinesList;

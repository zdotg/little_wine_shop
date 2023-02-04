import { selectAllSkincontacts } from './skincontactsSlice';
import { Col, Row } from 'reactstrap';
import SkincontactCard from './SkinContactCard';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const SkincontactsList = () => {
    const skincontacts = useSelector(selectAllSkincontacts);
    console.log('skincontacts:', skincontacts);
    const isLoading = useSelector((state) => state.skincontacts.isLoading);
    const errMsg = useSelector((state) => state.skincontacts.errMsg);

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
            {skincontacts.map((skincontact) => {
                return (
                    <Col md='5' className='m-4' key={skincontact.id}>
                        <SkincontactCard color={skincontact} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default SkincontactsList;

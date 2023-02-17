import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllSkinContacts } from '../skincontact/skincontactsSlice';




const DisplaySkinContactList = () => {
    const items = useSelector((state) => [
        selectAllSkinContacts(state)

    ]);
    console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { skinContactList, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    skinContactList && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={skinContactList} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplaySkinContactList;
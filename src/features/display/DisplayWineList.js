import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { selectAllReds } from '../red/redsSlice';
import { selectAllRoses } from '../rose/rosesSlice';
import { selectAllSkinContacts } from '../skincontact/skincontactsSlice';
import { selectAllWhites } from '../white/whitesSlice';



const DisplayWineList = () => {
    const items = useSelector((state) => [
        selectAllReds(state),
        selectAllRoses(state),
        selectAllSkinContacts(state),
        selectAllWhites(state),
    ]);
    console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { redList, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    redList && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={redList} />
                        </Col>
                    )
                );
            })}
        </Row>,
        <Row>
        {items.map((item, idx) => {
            const { whiteList, isLoading, errMsg } = item;
            if (isLoading) {
                return <Loading key={idx} />;
            }
            if (errMsg) {
                return <Error errMsg={errMsg} key={idx} />;
            }
            return (
                whiteList && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={whiteList} />
                    </Col>
                )
            );
        })}
    </Row>,
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
    </Row>,
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

export default DisplayWineList;
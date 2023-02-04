import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectFeaturedRed } from '../red/redsSlice';
import { selectFeaturedWhite } from '../white/whitesSlice';
// import { selectReviewsByWineId } from '../reviews/reviewsSlice';
import { selectFeaturedPromotion} from '../promotions/promotionsSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';


const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedRed(state),
        selectFeaturedWhite(state),
        selectFeaturedPromotion(state)
        // selectReviewsByWineId(state)
    ]);
    console.log('display items:', items);
    return (
        <Row>
        {items.map((item, idx) => {
            const { featuredItem, isLoading, errMsg } = item;
            if (isLoading) {
                return <Loading key={idx} />;
            }
            if (errMsg) {
                return <Error errMsg={errMsg} key={idx} />;
            }
            return (
                featuredItem && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={featuredItem} />
                    </Col>
                )
            );
        })}
    </Row>
    );
};

export default DisplayList;
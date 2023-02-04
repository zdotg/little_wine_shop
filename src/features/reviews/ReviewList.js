import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Review from './Review';
import { selectReviewsByWineId } from './reviewsSlice';
import ReviewForm from './ReviewForm';

const ReviewsList = ({ id }) => {
    const reviews = useSelector(selectReviewsByWineId(id));

    if (reviews && reviews.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Reviews</h4>
                {reviews.map((review) => {
                    return <Review key={review.id} review={review} />;
                })}
                <ReviewForm wineId={id} />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no reviews for this wine yet.
        </Col>
    );
};

export default ReviewsList;
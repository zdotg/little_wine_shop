import { formatDate } from "../../utils/formatDate";

const Review = ({review}) => {
    const { text: reviewText, rating, author, date } = review;
    return (
        <p>
            {reviewText}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)}
        </p>
    )
};

export default Review;
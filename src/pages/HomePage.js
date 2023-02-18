import { Container } from 'reactstrap';
import DisplayFeaturedList from '../features/display/DisplayFeaturedList';
import DisplayMerchList from '../features/display/DisplayMerch';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='New Arrivals' />
            <DisplayFeaturedList />
            <DisplayMerchList />
        </Container>
    )
};

export default HomePage;
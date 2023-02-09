import { Container } from 'reactstrap';
import DisplayFeaturedList from '../features/display/DisplayFeaturedList';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='New Arrivals' />
            <DisplayFeaturedList />
        </Container>
    )
};

export default HomePage;
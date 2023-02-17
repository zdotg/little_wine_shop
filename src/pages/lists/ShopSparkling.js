import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import SparklingList from '../../features/sparkling/sparklingList';

const ShopSparklingsPage = () => {
    return (
        <Container>
            <SubHeader current='Sparkling' />
            <SparklingList />
        </Container>
    )
};

export default ShopSparklingsPage;
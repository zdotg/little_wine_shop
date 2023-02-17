import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import RoseList from '../../features/rose/roseList';

const ShopRosesPage = () => {
    return (
        <Container>
            <SubHeader current='Rosé' />
            <RoseList />
        </Container>
    )
};

export default ShopRosesPage;
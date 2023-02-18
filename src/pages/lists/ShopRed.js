import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import RedList from '../../features/red/redList';

const ShopRedsPage = () => {
    return (
        <Container>
            <SubHeader current='Red' />
            <RedList />
        </Container>
    )
};

export default ShopRedsPage;
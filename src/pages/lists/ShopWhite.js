import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import WhiteList from '../../features/white/whiteList';

const ShopWhitesPage = () => {
    return (
        <Container>
            <SubHeader current='white' />
            <WhiteList />
        </Container>
    )
};

export default ShopWhitesPage;
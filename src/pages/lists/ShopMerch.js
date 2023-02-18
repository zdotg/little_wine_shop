import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import MerchList from '../../misc/merchlist';

const ShopMerchPage = () => {
    return (
        <Container>
            <SubHeader current='Merch' />
            <MerchList />
        </Container>
    )
};

export default ShopMerchPage;
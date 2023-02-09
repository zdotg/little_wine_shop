import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import RedList from '../features/red/redList';
import WhiteList from '../features/white/whiteList';
import SkinContactsList from '../features/skincontact/skinContactList';
import RoseList from '../features/rose/roseList';

const ShopAllPage = () => {
    return (
        <Container>
            <SubHeader current='Shop All' />
            <RedList />
            <WhiteList />
            <RoseList />
            <SkinContactsList />
        </Container>
    )
};

export default ShopAllPage;
import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import SkinContactsList from '../../features/skincontact/skinContactList';

const ShopSkinContactsPage = () => {
    return (
        <Container>
            <SubHeader current='Skin Contact' />
            <SkinContactsList />
        </Container>
    )
};

export default ShopSkinContactsPage;
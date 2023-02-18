import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import RedList from '../features/red/redList';
import WhiteList from '../features/white/whiteList';
import SkinContactsList from '../features/skincontact/skinContactList';
import RoseList from '../features/rose/roseList';
import PiquetteList from '../features/piquette/piquetteList';
import SparklingList from '../features/sparkling/sparklingList';
import PetnatList from '../features/petnat/petnatList';
import MerchList from '../misc/merchlist';

const ShopAllPage = () => {
    return (
        <Container>
            <SubHeader current='Shop All' />
            <RedList />
            <WhiteList />
            <RoseList />
            <SkinContactsList />
            <PiquetteList />
            <SparklingList />
            <PetnatList />
            <MerchList />
        </Container>
    )
};

export default ShopAllPage;
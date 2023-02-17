import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import PiquetteList from '../../features/piquette/piquetteList';

const ShopPiquettesPage = () => {
    return (
        <Container>
            <SubHeader current='Piquette' />
            <PiquetteList />
        </Container>
    )
};

export default ShopPiquettesPage;
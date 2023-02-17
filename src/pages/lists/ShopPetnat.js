import { Container } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import PetnatList from '../../features/petnat/petnatList';

const ShopPetnatsPage = () => {
    return (
        <Container>
            <SubHeader current='PetNat' />
            <PetnatList />
        </Container>
    )
};

export default ShopPetnatsPage;
import { Container } from 'reactstrap';
import RedWinesList from '../features/red/RedWinesList';
import RoseWinesList from '../features/rose/RoseWinesList';
import WhiteWinesList from '../features/white/WhiteWinesList';
import SkincontactsList from '../features/skincontact/SkinContactsList';
import SubHeader from '../components/SubHeader';

const WineListPage = () => {
    return (
        <Container>
            <SubHeader current='Shop All' />
            <RedWinesList />
            <RoseWinesList />
            <SkincontactsList />
            <WhiteWinesList />
        </Container>
    );
};

export default WineListPage;
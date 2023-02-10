import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectRedById } from '../features/red/redsSlice';
import { selectWhiteById } from '../features/white/whitesSlice';
import { selectRoseById } from '../features/rose/rosesSlice';
import { selectPiquetteById } from '../features/piquette/piquettesSlice';
import { selectPetnatById } from '../features/petnat/petnatsSlice';
import { selectSkinContactById } from '../features/skincontact/skincontactsSlice';
import { selectSparklingById } from '../features/sparkling/sparklingsSlice';
import WhiteWineDetail from '../features/white/WhiteWineDetail';
import RedWineDetail from '../features/red/RedWineDetail';
import RoseWineDetail from '../features/rose/RoseWIneDetail';
import PiquetteWineDetail from '../features/piquette/PiquetteWineDetail';
import PetnatWineDetail from '../features/petnat/PetnatWineDetail';
import SkinContactWineDetail from '../features/skincontact/SkinContactDetail';
import SparklingWineDetail from '../features/sparkling/SparklingWineDetail';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';


const WineDetailPage = () => {
    const { id } = useParams();
    // Figure out a way to make a variable that holds all the selectors below, or figure out how to make this individual for each kind of winesReducer, and populate on click.
    const red = useSelector(selectRedById(id));
    const rose = useSelector(selectRoseById(id));
    const white = useSelector(selectWhiteById(id));
    const petnat = useSelector(selectPetnatById(id));
    const skincontact = useSelector(selectSkinContactById(id));
    const sparkling = useSelector(selectSparklingById(id));
    const piquette = useSelector(selectPiquetteById(id));
    console.log('red:', red);
    console.log('rose:', rose);
    console.log('white:', white);
    console.log('petnat:', petnat);
    console.log('skincontac:', skincontact);
    console.log('sparkling:', sparkling);
    console.log('piquette:', piquette);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
};

export default CampsiteDetailPage;
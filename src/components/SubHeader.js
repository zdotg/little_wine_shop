import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/shopall'>Shop All</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/red'>Red</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/white'>White</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/rose'>Rose</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/skinContact'>Skin Contact</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/piquette'>Piquette</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/sparkling'>Sparkling</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/petnat'>PetNat</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
                <hr />
            </Col>
        </Row>
    );
};

export default SubHeader;
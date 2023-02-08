import React, { useState, useEffect } from "react";
import WineCategory from "./WineCategory";


const WineList = ({ dbWineshop }) => {
    const categories = [
      { name: 'Reds', key: 'reds' },
      { name: 'Whites', key: 'whites' },
      { name: 'Roses', key: 'roses' },
      { name: 'Skin Contacts', key: 'skincontacts' },
      { name: 'Pet Nats', key: 'petnats' },
      { name: 'Piquettes', key: 'piquettes' },
      { name: 'Sparklings', key: 'sparklings' },
    ];
  
    return (
      <div>
        {categories.map(({ name, key }) => (
          <WineCategory key={key} category={name} wines={dbWineshop[key]} />
        ))}
      </div>
    );
  };
  
  export default WineList;






































// import { Container } from 'reactstrap';
// import RedWinesList from '../features/red/RedWinesList';
// import RoseWinesList from '../features/rose/RoseWinesList';
// import WhiteWinesList from '../features/white/WhiteWinesList';
// import SkincontactsList from '../features/skincontact/SkinContactsList';
// import SubHeader from '../components/SubHeader';

// const WineListPage = () => {
//     return (
//         <Container>
//             <SubHeader current='Shop All' />
//             <RedWinesList />
//             <RoseWinesList />
//             <SkincontactsList />
//             <WhiteWinesList />
//         </Container>
//     );
// };

// export default WineListPage;
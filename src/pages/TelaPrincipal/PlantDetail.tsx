import React from 'react';
import {
  IonContent,
  IonTitle,
  IonText,
  IonRouterLink,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import './PlantDetail.css';

interface LocationState {
  plantData: {
    id: number;
    name: string;
    location: string;
    subtitle: string;
    image: string;
  };
}

const PlantDetail: React.FC = () => {
  const location = useLocation<LocationState>();
  const { plantData } = location.state || {};

  if (!plantData) {
    return <div>Plant not found</div>;
  }

  return (
    <>
      <IonContent className='container'>
        <Header />
        <div className="voltar">
          <IonRouterLink routerLink="/principal" routerDirection="back">
            <IonText>Back</IonText>
          </IonRouterLink>
          <IonTitle>{plantData.name}</IonTitle>
        </div>
        <img src={plantData.image} alt={plantData.name} />
        <p>Location: {plantData.location}</p>
        <p>Subtitle: {plantData.subtitle}</p>
      </IonContent>
    </>
  );
};

export default PlantDetail;



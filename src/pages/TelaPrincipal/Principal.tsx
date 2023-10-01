import React from 'react';
import { IonContent, IonPage, IonText } from '@ionic/react';
import Header from '../../components/Header/Header';
import './Principal.css';

import PlantData from './PlantData'; // Import plantData
import './PlantItem.css';

import { Link } from 'react-router-dom';

const Principal: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='container'>
        <Header />
        <IonText className='texto'>5.840 plantas gratuitas</IonText>

        {PlantData.map((plant) => (
          <Link key={plant.id} to={`/plant/${plant.id}`}>
            {/* Display plant information */}
            <div className="plant-item">
              <img src={plant.image} alt={plant.name} className="plant-image" />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p>{plant.location}</p>
                <p>{plant.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Principal;


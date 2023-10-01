import React from 'react';
import { IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import { useParams } from 'react-router-dom'; // Import useParams

import PlantData from './PlantData'; // Import plantData

const PlantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Access the 'id' route parameter

  // Find the specific plant object with the matching 'id'
  const plant = PlantData.find((item) => item.id === Number(id));

  // Check if the plant object exists
  if (!plant) {
    return <div>Plant not found</div>; // Handle the case when the plant is not found
  }

  return (
    <>
      <IonContent>
        {/* Plant details */}
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/principal" />
          </IonButtons>
          <IonTitle>{plant.name}</IonTitle>
        </IonToolbar>
        <img src={plant.image} alt={plant.name} />
        <p>Location: {plant.location}</p>
        <p>Subtitle: {plant.subtitle}</p>
      </IonContent>
    </>
  );
};

export default PlantDetail;

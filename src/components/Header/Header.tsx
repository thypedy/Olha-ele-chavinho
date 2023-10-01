import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonInput,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { searchOutline, personCircleOutline, reorderThree } from 'ionicons/icons';

import './Header.css';

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar className='container'>
        {/* Back Button */}
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>

        {/* Search Input */}
        <div className="searchContainer">
          <IonInput placeholder="Search"></IonInput>
          <IonIcon icon={searchOutline} size="medium" color="primary" />
        </div>

        {/* Profile Button */}
        <IonButton slot="end" fill="clear">
          <IonIcon icon={personCircleOutline} size="large" color="medium" />
        </IonButton>

        {/* Reorder Button */}
        <IonButton slot="end" fill="clear">
          <IonIcon icon={reorderThree} size="large" color="primary" />
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

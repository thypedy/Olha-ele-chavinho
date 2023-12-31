import React from "react";
import {
  IonContent,
  IonItem,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import { useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { heartOutline, ellipsisHorizontal } from "ionicons/icons";

import Header from "../../components/Header/Header";
import "./PlantDetail.css";

interface LocationState {
  plantData: {
    id: number;
    name: string;
    location: string;
    subtitle: string;
    image: string;
    valor: string;
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
      <IonContent className="container">
        <Header />
        <div className="custom-div">
          <IonRouterLink routerLink="/principal" routerDirection="back">
            <IonText>Back</IonText>
          </IonRouterLink>
          <div className="icons">
            <IonIcon icon={heartOutline} color="primary" />
            <IonIcon icon={ellipsisHorizontal} color="primary" />
          </div>
        </div>
        <img src={plantData.image} alt={plantData.name} />
        <p>{plantData.subtitle}</p>
        <div className="Loca-name">
          <p>{plantData.location}</p>
          <p>{plantData.name}</p>
        </div>

        <div className="box">
          <div className="text-line">
            <p className="textao">Valor da planta completa</p>
            <p className="preco">{plantData.valor}</p>
          </div>
          <div className="button-line">
            <IonButton expand="block" color="primary">
              Comprar a planta
            </IonButton>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default PlantDetail;

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonText,
  IonRouterLink,
} from '@ionic/react';

import './Cadastro.css';
import Logo from '../../img/Dapta models bluebg 1.svg';

const Cadastro: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='imagem'>
        <img
          src={Logo}
          alt="Your Image"
          className='logo'
        />
        </div>

        <div className="container2">
          <IonText className='cadastro-text'>Cadastro</IonText>
          {/* Email */}
          <IonInput
            type="email"
            placeholder="E-mail"
            className='input'
            clearInput
          ></IonInput>

          {/*Name*/}
          <IonInput
            className='input'
            placeholder='Nome'
            clearInput
          ></IonInput>

          {/* Password */}
          <IonInput
            type="password"
            placeholder="Senha"
            className='input'
            clearInput
          ></IonInput>

          {/* Confirm password */}
          <IonInput
            type="password"
            placeholder="Confirmar Senha"
            className='input'
            clearInput
          ></IonInput>


          <IonText className='text'>
            Já fez o cadastro? <IonRouterLink routerLink="/login">Login</IonRouterLink>
          </IonText>

          <IonButton><IonText>cadastro</IonText></IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;
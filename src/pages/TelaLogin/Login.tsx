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

import './Login.css';
import Logo from '../../img/Dapta models bluebg 1.svg';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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

        <div className="container1">
          <IonText className='login-text'>Login</IonText>
          {/* Email */}
          <IonInput
            type="email"
            placeholder="E-mail"
            className='input'
            clearInput
          ></IonInput>

          {/* Password */}
          <IonInput
            type="password"
            placeholder="Senha"
            className='input'
            clearInput
          ></IonInput>


          <IonText className='text'>
            Não tem uma conta? <IonRouterLink routerLink="/cadastro">Cadastro</IonRouterLink>
          </IonText>

          <IonRouterLink routerLink='/principal' className='login-button'>
            <IonButton><IonText>Login</IonText></IonButton>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
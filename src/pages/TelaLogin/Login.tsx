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

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonText className=''>Login</IonText>
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
            Don't have an account? <IonRouterLink routerLink="/register">Register</IonRouterLink>
          </IonText>

          <IonButton className='Login'><IonText>Login</IonText></IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
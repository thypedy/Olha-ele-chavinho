import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Home from './pages/Home';
import Login from './pages/TelaLogin/Login';

const AppRouter: React.FC = () => (
  <IonRouterOutlet>
    {/* Rota padrão redireciona para a página inicial */}
    <Route exact path="/" render={() => <Redirect to="/home" />} />

    <Route exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />

  </IonRouterOutlet>
);

export default AppRouter;

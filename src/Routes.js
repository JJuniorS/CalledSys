import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Login from './views/LoginView/index';


const Routes = createAppContainer(
  createStackNavigator({
    Login: Login,
  })
);

export default Routes;
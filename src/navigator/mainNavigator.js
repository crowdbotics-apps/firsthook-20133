import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial99334Navigator from '../features/Tutorial99334/navigator';
import NotificationList99306Navigator from '../features/NotificationList99306/navigator';
import Settings99305Navigator from '../features/Settings99305/navigator';
import Settings99297Navigator from '../features/Settings99297/navigator';
import UserProfile99295Navigator from '../features/UserProfile99295/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial99334: { screen: Tutorial99334Navigator },
NotificationList99306: { screen: NotificationList99306Navigator },
Settings99305: { screen: Settings99305Navigator },
Settings99297: { screen: Settings99297Navigator },
UserProfile99295: { screen: UserProfile99295Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

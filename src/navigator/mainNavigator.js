import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Contacts52273Navigator from '../features/Contacts52273/navigator';
import SignIn252271Navigator from '../features/SignIn252271/navigator';
import SignUp252270Navigator from '../features/SignUp252270/navigator';
import UserProfile52267Navigator from '../features/UserProfile52267/navigator';
import Settings52263Navigator from '../features/Settings52263/navigator';
import NotificationList52261Navigator from '../features/NotificationList52261/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Contacts52273: { screen: Contacts52273Navigator },
SignIn252271: { screen: SignIn252271Navigator },
SignUp252270: { screen: SignUp252270Navigator },
UserProfile52267: { screen: UserProfile52267Navigator },
Settings52263: { screen: Settings52263Navigator },
NotificationList52261: { screen: NotificationList52261Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

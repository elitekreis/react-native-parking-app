import { createStackNavigator } from 'react-navigation';
import { WelcomeScreen, MainScreen, ParkListScreen } from '../screens';

const router = createStackNavigator(
    {
        Welcome: { screen: WelcomeScreen },
        Main: { screen: MainScreen },
        ParkList: { screen: ParkListScreen },
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none',
        navigationOptions: {
            header: null,
        },
    }
);

export default router;

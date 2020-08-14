import { createAppContainer } from 'react-navigation';
import { router } from './src/router';

const AppContainer = createAppContainer(router);
export default AppContainer;

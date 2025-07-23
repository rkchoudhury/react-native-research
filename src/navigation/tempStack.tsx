import { createStackNavigator } from '@react-navigation/stack';
import { Browse } from '../temp/screens/browse/Browse';

// Define your navigation param list type
type RootStackParamList = {
  [RouteNames.Browse]: undefined;
  [RouteNames.Search]: undefined;
};

const RouteNames = {
  Browse: 'Browse',
  Search: 'Search',
};

const Stack = createStackNavigator();

function TempStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.Browse} component={Browse} />
      {/* <Stack.Screen name={RouteNames.ScreenB} component={ScreenB} /> */}
    </Stack.Navigator>
  );
}

export {
  TempStack,
  RouteNames as TempRoute,
  type RootStackParamList as TempParamList,
};

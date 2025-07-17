import { createStackNavigator } from '@react-navigation/stack';
import { ScreenA, ScreenB, ScreenC } from '../rightSwipe';

// Define your navigation param list type
type RootStackParamList = {
  [RouteNames.ScreenA]: undefined;
  [RouteNames.ScreenB]: undefined;
  [RouteNames.ScreenC]: undefined;
};

const RouteNames = {
  ScreenA: 'ScreenA',
  ScreenB: 'ScreenB',
  ScreenC: 'ScreenC',
};


const Stack = createStackNavigator();

function RightSwipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.ScreenA} component={ScreenA} />
      <Stack.Screen name={RouteNames.ScreenB} component={ScreenB} />
      <Stack.Screen name={RouteNames.ScreenC} component={ScreenC} />
    </Stack.Navigator>
  );
}

export { RightSwipeStack, RouteNames as RightGestureRoute, type RootStackParamList as RightSwipeGestureParamList };
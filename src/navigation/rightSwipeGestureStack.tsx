import { createStackNavigator } from '@react-navigation/stack';
import { ScreenA, ScreenB, ScreenC, ScreenD, ScreenE } from '../rightSwipe';

// Define your navigation param list type
type RootStackParamList = {
  [RouteNames.ScreenA]: undefined;
  [RouteNames.ScreenB]: undefined;
  [RouteNames.ScreenC]: undefined;
  [RouteNames.ScreenD]: undefined;
  [RouteNames.ScreenE]: undefined;
};

const RouteNames = {
  ScreenA: 'ScreenA',
  ScreenB: 'ScreenB',
  ScreenC: 'ScreenC',
  ScreenD: 'ScreenD',
  ScreenE: 'ScreenE',
};


const Stack = createStackNavigator();

function RightSwipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.ScreenA} component={ScreenA} />
      <Stack.Screen name={RouteNames.ScreenB} component={ScreenB} />
      <Stack.Screen name={RouteNames.ScreenC} component={ScreenC} />

      {/* 
        * Disable the default right swipe gesture for Screen D
        * By default the value of gestureEnabled is true for iOS
      */}
      <Stack.Screen name={RouteNames.ScreenD} component={ScreenD} options={{ gestureEnabled: false }} /> 
      <Stack.Screen name={RouteNames.ScreenE} component={ScreenE} />
    </Stack.Navigator>
  );
}

export { RightSwipeStack, RouteNames as RightGestureRoute, type RootStackParamList as RightSwipeGestureParamList };
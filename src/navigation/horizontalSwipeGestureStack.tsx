import { createStackNavigator } from '@react-navigation/stack';
import { ScreenA, ScreenB, ScreenC } from '../horizontalSwipeGesture';

const Stack = createStackNavigator();

function HorizontalSwipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
  );
}

export { HorizontalSwipeStack }
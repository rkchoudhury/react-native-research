import {NavigationContainer} from '@react-navigation/native';
import { HorizontalSwipeStack } from './horizontalSwipeGestureStack';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HorizontalSwipeStack />
    </NavigationContainer>
  );
}
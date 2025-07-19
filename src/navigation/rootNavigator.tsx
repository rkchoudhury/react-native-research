import {NavigationContainer} from '@react-navigation/native';
import { HorizontalSwipeStack } from './horizontalSwipeGestureStack';
import { RightSwipeStack } from './rightSwipeGestureStack';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <HorizontalSwipeStack /> */}
      <RightSwipeStack />
    </NavigationContainer>
  );
}
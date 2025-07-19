import {NavigationContainer} from '@react-navigation/native';
import { HorizontalSwipeStack } from './horizontalSwipeGestureStack';
import { RightSwipeStack } from './rightSwipeGestureStack';
import SpriteSVGExample from '../spriteImage/SpriteSVGExample';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <HorizontalSwipeStack /> */}
      {/* <RightSwipeStack /> */}
      <SpriteSVGExample />
    </NavigationContainer>
  );
}
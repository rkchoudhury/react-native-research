import { NavigationContainer } from '@react-navigation/native';
import { HorizontalSwipeStack } from './horizontalSwipeGestureStack';
import { RightSwipeStack } from './rightSwipeGestureStack';
import SpriteSVGExample from '../spriteImage/SpriteSVGExample';
import { TempStack } from './tempStack';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <HorizontalSwipeStack /> */}
      {/* <RightSwipeStack /> */}
      {/* <SpriteSVGExample /> */}
      <TempStack />
    </NavigationContainer>
  );
};

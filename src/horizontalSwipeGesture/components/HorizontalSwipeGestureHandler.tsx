import React from 'react';
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State as GestureState,
} from 'react-native-gesture-handler';
import {usePreventRightSwipe} from '../hooks/usePreventRightSwipe';

const SWIPEABLE_THRESHOLD = 30;

interface PanGestureHandlerProps {
  onRightSwipe: () => void;
  onLeftSwipe: () => void;
  children: React.ReactNode;
  swipeableThresholdDistance?: number;
  enableRightSwipe?: boolean;
  enableLeftSwipe?: boolean;
}

export const HorizontalSwipeGestureHandler = (
  props: PanGestureHandlerProps,
) => {
  const {
    onRightSwipe,
    onLeftSwipe,
    children,
    swipeableThresholdDistance = SWIPEABLE_THRESHOLD,
    enableRightSwipe = true,
    enableLeftSwipe = true,
  } = props;

  // Disabling the default swipe right behaviour for iOS
  usePreventRightSwipe();

  const onGestureEvent = ({
    nativeEvent,
  }: GestureEvent<PanGestureHandlerEventPayload>) => {
    const {translationX, translationY, state} = nativeEvent;

    const isHorizontalSwipe =
      Math.abs(translationX) > Math.abs(translationY) &&
      Math.abs(translationX) > swipeableThresholdDistance;

    if (state === GestureState.END && isHorizontalSwipe) {
      if (translationX < 0 && enableLeftSwipe) {
        onLeftSwipe?.();
      } else if (translationX > 0 && enableRightSwipe) {
        onRightSwipe?.();
      }
    }
  };

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        onHandlerStateChange={onGestureEvent}
        minDist={swipeableThresholdDistance}>
        {children}
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

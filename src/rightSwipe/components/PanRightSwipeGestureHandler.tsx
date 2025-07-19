import React from 'react';
import { Platform } from 'react-native';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import { usePreventRightSwipe } from '../hooks/usePreventRightSwipe';
import { runOnJS } from 'react-native-reanimated';

/**
 * 1. By default, the right swipe gesture is enabled for all screens by react-navigation in iOS.
 * 2. Using `usePreventRightSwipe` hook we can disable the default right swipe gesture of react-navigation.
 * 3. `PanRightSwipeGestureHandler` can be used to override or extend the right swipe behavior.
 * 4. The right swipe gesture is only applicable for iOS.
 */

// Define the distance from the left edge of the screen
const DEFAULT_DISTANCE_FROM_LEFT_EDGE = 100;

interface PanGestureHandlerProps {
  onHandleRightSwipe: () => void;
  children: React.ReactNode;
  gestureDistanceFromLeftEdge?: number;
  enableRightSwipe?: boolean;
}

export const PanRightSwipeGestureHandler = (props: PanGestureHandlerProps) => {
  const {
    onHandleRightSwipe,
    children,
    gestureDistanceFromLeftEdge = DEFAULT_DISTANCE_FROM_LEFT_EDGE,
    enableRightSwipe = true,
  } = props;

  // Disabling the default swipe right behaviour for iOS
  usePreventRightSwipe();

  const panGesture = Gesture.Pan().onEnd(event => {
    const { absoluteX, translationX } = event;
    if (
      enableRightSwipe &&
      translationX > 0 &&
      absoluteX < gestureDistanceFromLeftEdge
    ) {
      console.log('Right swipe detected called');
      // right swipe detected within the left threshold
      runOnJS(onHandleRightSwipe)?.();
    }
  });

  if (Platform.OS === 'ios') {
    return (
      <GestureHandlerRootView>
        <GestureDetector gesture={panGesture}>{children}</GestureDetector>
      </GestureHandlerRootView>
    );
  } else {
    return children; // For Android, no right swipe behaviour is applied
  }
};

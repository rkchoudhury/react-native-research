import React from 'react';
import { Platform } from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { usePreventRightSwipe } from '../hooks/usePreventRightSwipe';

// Define the distance from the left edge of the screen
const DEFAULT_DISTANCE_FROM_LEFT_EDGE = 50;

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

  const handleGesture = ({
    nativeEvent,
  }: GestureEvent<PanGestureHandlerEventPayload>) => {
    if (
      enableRightSwipe &&
      nativeEvent.translationX > 0 &&
      nativeEvent.absoluteX < gestureDistanceFromLeftEdge
    ) {
      // right swipe detected within the left threshold
      onHandleRightSwipe?.();
    }
  };

  if (Platform.OS === 'ios') {
    return (
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={handleGesture}>
          {children}
        </PanGestureHandler>
      </GestureHandlerRootView>
    );
  } else {
    return children; // For Android, no right swipe behaviour is applied
  }
};

import { Platform } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

/**
 * @hook usePreventRightSwipe
 *
 * @description Custom hook to control the right swipe gesture (typically for navigation) on the current screen for iOS.
 * @platform iOS
 * @param enableRightSwipe - If `true`, enables the right swipe gesture; if `false`, disables it (prevents right swipe).
 *
 * @example
 * usePreventRightSwipe(); // Disables right swipe gesture
 */
export const usePreventRightSwipe = (enableRightSwipe: boolean = false) => {
  const navigation = useNavigation();

  useFocusEffect(() => {
    if (Platform.OS === 'ios') {
      navigation.setOptions({ gestureEnabled: enableRightSwipe });
      navigation.getParent()?.setOptions({ gestureEnabled: enableRightSwipe });
    }

    return () => {
      if (Platform.OS === 'ios') {
        navigation.getParent()?.setOptions({ gestureEnabled: true });
        navigation.setOptions({ gestureEnabled: true });
      }
    };
  });
};

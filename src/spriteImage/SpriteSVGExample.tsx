import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SvgIcon } from './components/SpriteIcon';
import {
  SOCIAL_MEDIA_SHEET,
  SocialMediaEnum,
} from './assets/sprite-sheets/social-media';

const SpriteSVGExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Sprite SVG Example</Text>
        <SvgIcon
          {...SOCIAL_MEDIA_SHEET}
          iconIndex={SocialMediaEnum.Instagram}
          iconSize={64}
        />
        <SvgIcon
          {...SOCIAL_MEDIA_SHEET}
          iconIndex={SocialMediaEnum.Messenger}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpriteSVGExample;

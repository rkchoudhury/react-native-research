import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SvgIcon } from './components/SpriteIcon';
import {
  SOCIAL_MEDIA_SHEET,
  SocialMediaEnum,
} from './assets/sprite-sheets/social-media';

const SpriteSVGExample = () => {
  return (
    <SafeAreaView>
      <View>
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

export default SpriteSVGExample;

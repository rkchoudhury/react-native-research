import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IProps {
  source: any;
  iconIndex: number;
  iconSize: number;
  columns: number;
  totalIcons: number;
}

export const SvgIcon = ({
  source,
  iconIndex,
  iconSize,
  columns,
  totalIcons,
}: IProps) => {
  const SVG_IMAGE_SOURCE = source;

  if (!SVG_IMAGE_SOURCE) {
    return null;
  }

  const col = iconIndex % columns;
  const row = Math.floor(iconIndex / columns);
  const totalRows = Math.ceil(totalIcons / columns);

  return (
    <View
      style={[
        {
          height: iconSize,
          width: iconSize,
        },
        styles.iconContainer,
      ]}
    >
      <SVG_IMAGE_SOURCE
        height={iconSize * totalRows}
        width={iconSize * columns}
        top={-row * iconSize}
        left={-col * iconSize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    overflow: 'hidden',
  },
});

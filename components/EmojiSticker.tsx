import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Image, type ImageSource } from "expo-image";

type EmojiStickerProps = {
  imageSize: number;
  stickerSource: ImageSource;
};

const EmojiSticker: FC<EmojiStickerProps> = ({ imageSize, stickerSource }) => {
  return (
    <View style={{ top: -400, left: 200 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};

export default EmojiSticker;

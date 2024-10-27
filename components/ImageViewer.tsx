import { Image } from "expo-image";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type ImageViewerProps = {
  imgSource: string;
  selectedImage?: string;
};

const ImageViewer: FC<ImageViewerProps> = ({ imgSource, selectedImage }) => {
  const source = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={source} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

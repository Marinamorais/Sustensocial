import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";

export default function CardSobrenos({ images }) {
  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.cardContainer}>
      <Carousel
        data={images}
        renderItem={renderCarouselItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width * 0.8} // 80% da largura da tela
        loop
        autoplay
        autoplayInterval={3000}
        layout="default"
      />
    </View>
  );
}

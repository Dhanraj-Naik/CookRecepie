import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../utils/GlobalStyles";

const SeasonalSpecialSection = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.seasonalSpecialParent}>
        <Text style={[styles.seasonalSpecial, styles.seeAllFlexBox]}>
          Seasonal Special
        </Text>
        <Text style={[styles.seeAll, styles.seeAllFlexBox]}>See All</Text>
      </View>
      <View style={styles.frameGroup}>
        <View style={styles.rectangleLayout}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-4.png")}
          />
          <Text style={[styles.alooKobi, styles.seeAllFlexBox]}>Aloo Kobi</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.alooKobi, styles.seeAllFlexBox]}>
            Butter Paneer
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-42.png")}
          />
          <Text style={[styles.alooKobi, styles.seeAllFlexBox]}>
            Dal Makhni
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-43.png")}
          />
          <Text style={[styles.alooKobi, styles.seeAllFlexBox]}>
            Chicken Momo
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-44.png")}
          />
          <Text style={[styles.alooKobi, styles.seeAllFlexBox]}>Chowmen</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  seeAllFlexBox: {
    textAlign: "left",
    lineHeight: 17,
  },
  rectangleLayout: {
    width: 85,
    alignItems: "center",
  },
  seasonalSpecial: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 17,
  },
  seeAll: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.textFaded,
    textAlign: "left",
    lineHeight: 17,
  },
  seasonalSpecialParent: {
    width: 353,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_smi,
    width: 64,
    height: 90,
  },
  alooKobi: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    marginTop: 5,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 17,
  },
  rectangleGroup: {
    marginLeft: 10,
  },
  frameGroup: {
    marginTop: 15,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 14,
  },
});

export default SeasonalSpecialSection;

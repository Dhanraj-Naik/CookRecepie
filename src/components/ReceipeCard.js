import React, { useMemo, memo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import Property1Hard from "./Property1Hard";
import { Border, Color, FontSize, FontFamily } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ReceipeCard = memo(
  ({
    rectangle2,
    receipeName = "Cheery pancake",
    time = "20 min",
    hard,
    receipeCardWidth,
    receipeCardHeight,
    receipeCardMarginLeft,
    rectangleViewBackgroundColor,
    cheeryPancakeColor,
  }) => {
    const receipeCardStyle = useMemo(() => {
      return {
        ...getStyleValue("width", receipeCardWidth),
        ...getStyleValue("height", receipeCardHeight),
        ...getStyleValue("marginLeft", receipeCardMarginLeft),
      };
    }, [receipeCardWidth, receipeCardHeight, receipeCardMarginLeft]);

    const rectangleViewStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
      };
    }, [rectangleViewBackgroundColor]);

    const cheeryPancakeStyle = useMemo(() => {
      return {
        ...getStyleValue("color", cheeryPancakeColor),
      };
    }, [cheeryPancakeColor]);

    return (
      <View style={[styles.receipeCard, receipeCardStyle]}>
        <View
          style={[
            styles.receipeCardChild,
            styles.receipeCardPosition,
            rectangleViewStyle,
          ]}
        />
        <Image
          style={[styles.receipeCardItem, styles.receipeCardPosition]}
          resizeMode="cover"
          source={rectangle2}
        />
        <View style={styles.cheeryPancakeParent}>
          <Text style={[styles.cheeryPancake, cheeryPancakeStyle]}>
            {receipeName}
          </Text>
          <View style={styles.frameParent}>
            <View style={styles.alarmOnParent}>
              <Image
                style={styles.alarmOnIcon}
                resizeMode="cover"
                source={require("../assets/alarm-on.png")}
              />
              <Text style={styles.min}>{time}</Text>
            </View>
            <Property1Hard
              sentimentNeutral={require("../assets/sentiment-neutral.png")}
              hard="Hard"
              property1HardPosition="unset"
              property1HardMarginLeft={12}
            />
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  receipeCardPosition: {
    right: "0%",
    position: "absolute",
  },
  receipeCardChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_17xl,
    backgroundColor: Color.secondary,
  },
  receipeCardItem: {
    height: "66.18%",
    width: "86.76%",
    top: "1.84%",
    bottom: "31.99%",
    left: "13.24%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cheeryPancake: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    display: "flex",
    width: 186,
    alignItems: "center",
    textAlign: "left",
  },
  alarmOnIcon: {
    width: 14,
    height: 14,
  },
  min: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textFaded,
    marginLeft: 4,
    textAlign: "left",
  },
  alarmOnParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    marginTop: 7,
    flexDirection: "row",
  },
  cheeryPancakeParent: {
    height: "16.91%",
    width: "92.65%",
    top: "73.53%",
    right: "2.94%",
    bottom: "9.56%",
    left: "4.41%",
    position: "absolute",
  },
  receipeCard: {
    width: 204,
    height: 272,
  },
});

export default ReceipeCard;

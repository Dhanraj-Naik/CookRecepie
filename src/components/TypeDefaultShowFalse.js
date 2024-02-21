import React, { useMemo, memo } from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import { Border, Color } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeDefaultShowFalse = memo(
  ({
    cap,
    typeDefaultShowFalseWidth,
    typeDefaultShowFalseHeight,
    typeDefaultShowFalseMarginLeft,
    borderWidth,
    borderRight,
    borderBorderRadius,
    borderBorderWidth,
    capIconHeight,
    capIconWidth,
    capIconTop,
    capIconBottom,
    capIconLeft,
    capacityHeight,
    capacityWidth,
    capacityTop,
    capacityRight,
    capacityBottom,
    capacityLeft,
  }) => {
    const typeDefaultShowFalseStyle = useMemo(() => {
      return {
        ...getStyleValue("width", typeDefaultShowFalseWidth),
        ...getStyleValue("height", typeDefaultShowFalseHeight),
        ...getStyleValue("marginLeft", typeDefaultShowFalseMarginLeft),
      };
    }, [
      typeDefaultShowFalseWidth,
      typeDefaultShowFalseHeight,
      typeDefaultShowFalseMarginLeft,
    ]);

    const borderStyle = useMemo(() => {
      return {
        ...getStyleValue("width", borderWidth),
        ...getStyleValue("right", borderRight),
        ...getStyleValue("borderRadius", borderBorderRadius),
        ...getStyleValue("borderWidth", borderBorderWidth),
      };
    }, [borderWidth, borderRight, borderBorderRadius, borderBorderWidth]);

    const capIconStyle = useMemo(() => {
      return {
        ...getStyleValue("height", capIconHeight),
        ...getStyleValue("width", capIconWidth),
        ...getStyleValue("top", capIconTop),
        ...getStyleValue("bottom", capIconBottom),
        ...getStyleValue("left", capIconLeft),
      };
    }, [capIconHeight, capIconWidth, capIconTop, capIconBottom, capIconLeft]);

    const capacityStyle = useMemo(() => {
      return {
        ...getStyleValue("height", capacityHeight),
        ...getStyleValue("width", capacityWidth),
        ...getStyleValue("top", capacityTop),
        ...getStyleValue("right", capacityRight),
        ...getStyleValue("bottom", capacityBottom),
        ...getStyleValue("left", capacityLeft),
      };
    }, [
      capacityHeight,
      capacityWidth,
      capacityTop,
      capacityRight,
      capacityBottom,
      capacityLeft,
    ]);

    return (
      <View style={[styles.typedefaultShowFalse, typeDefaultShowFalseStyle]}>
        <View style={[styles.border, borderStyle]} />
        <Image
          style={[styles.capIcon, capIconStyle]}
          resizeMode="cover"
          source={cap}
        />
        <View style={[styles.capacity, capacityStyle]} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  border: {
    height: "100%",
    width: "91.58%",
    top: "0%",
    right: "8.42%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    opacity: 0.4,
    position: "absolute",
  },
  capIcon: {
    height: "30.77%",
    width: "4.76%",
    top: "34.62%",
    right: "0%",
    bottom: "34.62%",
    left: "95.24%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.5,
    position: "absolute",
  },
  capacity: {
    height: "69.23%",
    width: "62.27%",
    top: "15.38%",
    right: "30.4%",
    bottom: "15.38%",
    left: "7.33%",
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  typedefaultShowFalse: {
    width: 27,
    height: 13,
  },
});

export default TypeDefaultShowFalse;

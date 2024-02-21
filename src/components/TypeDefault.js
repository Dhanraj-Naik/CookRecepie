import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeDefault = memo(
  ({
    time = "9:41",
    iconSymbol = "􀋒",
    showIcon = false,
    typeDefaultPosition,
    typeDefaultTop,
    typeDefaultLeft,
  }) => {
    const typeDefaultStyle = useMemo(() => {
      return {
        ...getStyleValue("position", typeDefaultPosition),
        ...getStyleValue("top", typeDefaultTop),
        ...getStyleValue("left", typeDefaultLeft),
      };
    }, [typeDefaultPosition, typeDefaultTop, typeDefaultLeft]);

    return (
      <View style={[styles.typedefault, typeDefaultStyle]}>
        <View style={styles.clock}>
          <Text style={[styles.time, styles.timeTypo]}>{time}</Text>
          {showIcon && (
            <Text style={[styles.icon, styles.timeTypo]}>{iconSymbol}</Text>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  timeTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
  },
  time: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 17,
    fontFamily: FontFamily.sFPro,
  },
  icon: {
    fontSize: FontSize.size_mini,
    lineHeight: 14,
    fontFamily: FontFamily.sFProText,
    display: "none",
    marginLeft: 2,
  },
  clock: {
    position: "absolute",
    marginLeft: 11.5,
    top: 17,
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  typedefault: {
    width: 88,
    height: 47,
  },
});

export default TypeDefault;

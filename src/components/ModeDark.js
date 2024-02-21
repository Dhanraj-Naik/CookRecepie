import React, { useMemo, memo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import TypeDefault from "./TypeDefault";
import TypeDefaultShowFalse from "./TypeDefaultShowFalse";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ModeDark = memo(
  ({
    signal,
    connection,
    cap,
    indicator,
    showIndicator = false,
    modeDarkPosition,
    modeDarkMarginLeft,
    modeDarkTop,
    modeDarkLeft,
    modeDarkHeight,
    timeColor,
    iconColor,
    indicatorsGroupTop,
    borderWidth,
    borderRight,
    borderBorderColor,
    borderBorderWidth,
    capIconHeight,
    capIconTop,
    capIconBottom,
    capacityHeight,
    capacityWidth,
    capacityTop,
    capacityRight,
    capacityBottom,
    capacityBackgroundColor,
  }) => {
    const modeDarkStyle = useMemo(() => {
      return {
        ...getStyleValue("position", modeDarkPosition),
        ...getStyleValue("marginLeft", modeDarkMarginLeft),
        ...getStyleValue("top", modeDarkTop),
        ...getStyleValue("left", modeDarkLeft),
        ...getStyleValue("height", modeDarkHeight),
      };
    }, [
      modeDarkPosition,
      modeDarkMarginLeft,
      modeDarkTop,
      modeDarkLeft,
      modeDarkHeight,
    ]);

    const timeStyle = useMemo(() => {
      return {
        ...getStyleValue("color", timeColor),
      };
    }, [timeColor]);

    const iconStyle = useMemo(() => {
      return {
        ...getStyleValue("color", iconColor),
      };
    }, [iconColor]);

    const indicatorsGroupStyle = useMemo(() => {
      return {
        ...getStyleValue("top", indicatorsGroupTop),
      };
    }, [indicatorsGroupTop]);

    const borderStyle = useMemo(() => {
      return {
        ...getStyleValue("width", borderWidth),
        ...getStyleValue("right", borderRight),
        ...getStyleValue("borderColor", borderBorderColor),
        ...getStyleValue("borderWidth", borderBorderWidth),
      };
    }, [borderWidth, borderRight, borderBorderColor, borderBorderWidth]);

    const capIconStyle = useMemo(() => {
      return {
        ...getStyleValue("height", capIconHeight),
        ...getStyleValue("top", capIconTop),
        ...getStyleValue("bottom", capIconBottom),
      };
    }, [capIconHeight, capIconTop, capIconBottom]);

    const capacityStyle = useMemo(() => {
      return {
        ...getStyleValue("height", capacityHeight),
        ...getStyleValue("width", capacityWidth),
        ...getStyleValue("top", capacityTop),
        ...getStyleValue("right", capacityRight),
        ...getStyleValue("bottom", capacityBottom),
        ...getStyleValue("backgroundColor", capacityBackgroundColor),
      };
    }, [
      capacityHeight,
      capacityWidth,
      capacityTop,
      capacityRight,
      capacityBottom,
      capacityBackgroundColor,
    ]);

    return (
      <View style={[styles.modedark, modeDarkStyle]}>
        <TypeDefault
          time="9:41"
          iconSymbol="􀋒"
          showIcon={false}
          typeDefaultPosition="absolute"
          typeDefaultTop={0}
          typeDefaultLeft={0}
        />
        <View style={[styles.indicatorsGroup, indicatorsGroupStyle]}>
          <Image style={styles.signalIcon} resizeMode="cover" source={signal} />
          <Image
            style={styles.connectionIcon}
            resizeMode="cover"
            source={connection}
          />
          <TypeDefaultShowFalse
            cap={require("../assets/cap.png")}
            typeDefaultShowFalseWidth={31}
            typeDefaultShowFalseHeight={15}
            typeDefaultShowFalseMarginLeft={7}
            borderWidth="91.72%"
            borderRight="8.28%"
            borderBorderRadius={5}
            borderBorderWidth={1.2}
            capIconHeight="30.67%"
            capIconWidth="4.78%"
            capIconTop="34.67%"
            capIconBottom="34.67%"
            capIconLeft="95.22%"
            capacityHeight="69.33%"
            capacityWidth="62.42%"
            capacityTop="15.33%"
            capacityRight="30.25%"
            capacityBottom="15.33%"
            capacityLeft="7.32%"
          />
        </View>
        {showIndicator && (
          <Image
            style={styles.indicatorIcon}
            resizeMode="cover"
            source={indicator}
          />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  signalIcon: {
    width: 23,
    height: 14,
  },
  connectionIcon: {
    width: 20,
    marginLeft: 7,
    height: 14,
  },
  indicatorsGroup: {
    top: 17,
    right: 33,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 6,
    left: 301,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  modedark: {
    width: 428,
    height: 47,
    overflow: "hidden",
  },
});

export default ModeDark;

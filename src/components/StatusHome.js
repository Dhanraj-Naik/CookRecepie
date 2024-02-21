import React, { useMemo, memo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusHome = memo(
  ({
    cottage,
    search11,
    stockpot,
    accountCircle,
    statusHomePosition,
    statusHomeTop,
    statusHomeLeft,
    search11Position,
    search11Width,
    search11Height,
    search11Overflow,
    search11MarginLeft,
    stockpotIconOverflow,
    stockpotIconPosition,
    stockpotIconWidth,
    stockpotIconHeight,
    stockpotIconMarginLeft,
    accountCircleIconPosition,
    accountCircleIconWidth,
    accountCircleIconHeight,
    accountCircleIconMarginLeft,
    accountCircleIconOverflow,
    onCottagePress,
    onSearch11Press,
    onSearch11Press1,
    onStockpotPress,
  }) => {
    const statusHomeStyle = useMemo(() => {
      return {
        ...getStyleValue("position", statusHomePosition),
        ...getStyleValue("top", statusHomeTop),
        ...getStyleValue("left", statusHomeLeft),
      };
    }, [statusHomePosition, statusHomeTop, statusHomeLeft]);

    const search11Style = useMemo(() => {
      return {
        ...getStyleValue("position", search11Position),
        ...getStyleValue("width", search11Width),
        ...getStyleValue("height", search11Height),
        ...getStyleValue("overflow", search11Overflow),
        ...getStyleValue("marginLeft", search11MarginLeft),
      };
    }, [
      search11Position,
      search11Width,
      search11Height,
      search11Overflow,
      search11MarginLeft,
    ]);

    const stockpotIconStyle = useMemo(() => {
      return {
        ...getStyleValue("overflow", stockpotIconOverflow),
        ...getStyleValue("position", stockpotIconPosition),
        ...getStyleValue("width", stockpotIconWidth),
        ...getStyleValue("height", stockpotIconHeight),
        ...getStyleValue("marginLeft", stockpotIconMarginLeft),
      };
    }, [
      stockpotIconOverflow,
      stockpotIconPosition,
      stockpotIconWidth,
      stockpotIconHeight,
      stockpotIconMarginLeft,
    ]);

    const accountCircleIconStyle = useMemo(() => {
      return {
        ...getStyleValue("position", accountCircleIconPosition),
        ...getStyleValue("width", accountCircleIconWidth),
        ...getStyleValue("height", accountCircleIconHeight),
        ...getStyleValue("marginLeft", accountCircleIconMarginLeft),
        ...getStyleValue("overflow", accountCircleIconOverflow),
      };
    }, [
      accountCircleIconPosition,
      accountCircleIconWidth,
      accountCircleIconHeight,
      accountCircleIconMarginLeft,
      accountCircleIconOverflow,
    ]);

    return (
      <View style={[styles.statushome, statusHomeStyle]}>
        <Image
          style={styles.cottageIcon}
          resizeMode="cover"
          source={cottage}
          onPress={onCottagePress}
        />
        <Image
          style={[styles.search11, styles.search11Layout, search11Style]}
          resizeMode="cover"
          source={search11}
          onPress={onSearch11Press}
        />
        <Image
          style={[styles.search11Layout, stockpotIconStyle]}
          resizeMode="cover"
          source={stockpot}
          onPress={onSearch11Press1}
        />
        <Image
          style={[styles.search11Layout, accountCircleIconStyle]}
          resizeMode="cover"
          source={accountCircle}
          onPress={onStockpotPress}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  search11Layout: {
    marginLeft: 75,
    height: 24,
    width: 24,
  },
  cottageIcon: {
    height: 24,
    width: 24,
  },
  search11: {
    overflow: "hidden",
  },
  statushome: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StatusHome;

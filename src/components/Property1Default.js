import React, { useMemo, memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = memo(
  ({
    title = "Category",
    showLine1 = true,
    property1DefaultPosition,
    categoryColor,
  }) => {
    const property1DefaultStyle = useMemo(() => {
      return {
        ...getStyleValue("position", property1DefaultPosition),
      };
    }, [property1DefaultPosition]);

    const categoryStyle = useMemo(() => {
      return {
        ...getStyleValue("color", categoryColor),
      };
    }, [categoryColor]);

    return (
      <View style={[styles.property1default, property1DefaultStyle]}>
        <Text style={[styles.category, categoryStyle]}>{title}</Text>
        {showLine1 && (
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  category: {
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  property1defaultChild: {
    maxHeight: "100%",
    width: 8,
    marginTop: 2,
  },
  property1default: {
    alignItems: "center",
  },
});

export default Property1Default;

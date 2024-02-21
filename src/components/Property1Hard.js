import React, { useMemo, memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Hard = memo(
  ({
    sentimentNeutral,
    hard,
    property1HardPosition,
    property1HardMarginLeft,
  }) => {
    const property1HardStyle = useMemo(() => {
      return {
        ...getStyleValue("position", property1HardPosition),
        ...getStyleValue("marginLeft", property1HardMarginLeft),
      };
    }, [property1HardPosition, property1HardMarginLeft]);

    return (
      <View style={[styles.property1hard, property1HardStyle]}>
        <Image
          style={styles.sentimentNeutralIcon}
          resizeMode="cover"
          source={sentimentNeutral}
        />
        <Text style={styles.hard}>{hard}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  sentimentNeutralIcon: {
    width: 14,
    height: 14,
  },
  hard: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textFaded,
    textAlign: "left",
    marginLeft: 4,
  },
  property1hard: {
    height: 18,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Property1Hard;

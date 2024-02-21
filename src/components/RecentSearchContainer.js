import React, { useMemo, memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RecentSearchContainer = memo(
  ({ recipeId, dishName, timePostedText, propMarginTop }) => {
    const frameViewStyle = useMemo(() => {
      return {
        ...getStyleValue("marginTop", propMarginTop),
      };
    }, [propMarginTop]);

    return (
      <View style={[styles.rectangleParent, frameViewStyle]}>
        <Image style={styles.frameChild} resizeMode="cover" source={recipeId} />
        <View style={styles.eggOmletParent}>
          <Text style={[styles.eggOmlet, styles.daysAgoFlexBox]}>
            {dishName}
          </Text>
          <Text style={[styles.daysAgo, styles.daysAgoFlexBox]}>
            {timePostedText}
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  daysAgoFlexBox: {
    textAlign: "left",
    lineHeight: 17,
  },
  frameChild: {
    borderRadius: Border.br_2xs,
    width: 63,
    height: 61,
  },
  eggOmlet: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray_100,
  },
  daysAgo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDimgray_200,
    marginTop: 7,
  },
  eggOmletParent: {
    marginLeft: 15,
  },
  rectangleParent: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 352,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_9xs,
  },
});

export default RecentSearchContainer;

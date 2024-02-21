import React, { useMemo, memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, Border, FontSize, FontFamily } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RecipeCardContainer = memo(
  ({
    foodImageId,
    dishName,
    dishThumbnailId,
    menuItemImageName,
    viewCountText,
    propMarginTop,
  }) => {
    const frameView1Style = useMemo(() => {
      return {
        ...getStyleValue("marginTop", propMarginTop),
      };
    }, [propMarginTop]);

    return (
      <View style={[styles.groupParent, frameView1Style]}>
        <View style={styles.rectangleFlexBox}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={foodImageId}
          />
          <View style={styles.eggOmletParent}>
            <Text style={[styles.eggOmlet, styles.viewFlexBox]}>
              {dishName}
            </Text>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.visibilityIcon}
                  resizeMode="cover"
                  source={require("../assets/visibility.png")}
                />
                <Text style={[styles.view, styles.viewFlexBox]}>118 view</Text>
              </View>
              <Image
                style={styles.visibilityIcon}
                resizeMode="cover"
                source={require("../assets/more-vert.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleFlexBox]}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={dishThumbnailId}
          />
          <View style={styles.eggOmletParent}>
            <Text style={[styles.eggOmlet, styles.viewFlexBox]}>
              {menuItemImageName}
            </Text>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.visibilityIcon}
                  resizeMode="cover"
                  source={require("../assets/visibility.png")}
                />
                <Text style={[styles.view, styles.viewFlexBox]}>
                  {viewCountText}
                </Text>
              </View>
              <Image
                style={styles.visibilityIcon}
                resizeMode="cover"
                source={require("../assets/more-vert.png")}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  viewFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    width: 169,
    position: "absolute",
    height: 209,
  },
  eggOmlet: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  visibilityIcon: {
    width: 14,
    height: 14,
  },
  view: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 4,
  },
  frameParent: {
    width: 128,
    justifyContent: "space-between",
    marginTop: 8,
  },
  eggOmletParent: {
    top: 143,
    left: 12,
    width: 144,
    height: 57,
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: 15,
  },
  groupParent: {
    width: 353,
    flexDirection: "row",
    height: 209,
  },
});

export default RecipeCardContainer;

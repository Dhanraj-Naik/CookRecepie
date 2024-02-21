import React, { useMemo, memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import Property1Hard from "./Property1Hard";
import { Color, Border, FontSize, FontFamily } from "../utils/GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RecipeContainer = memo(
  ({
    recipeId,
    dishName,
    cookingTime,
    dimensionCode,
    difficultyLevelText,
    recipeDimensions,
    propMarginLeft,
    propColor,
  }) => {
    const groupViewStyle = useMemo(() => {
      return {
        ...getStyleValue("marginLeft", propMarginLeft),
      };
    }, [propMarginLeft]);

    const hardStyle = useMemo(() => {
      return {
        ...getStyleValue("color", propColor),
      };
    }, [propColor]);

    return (
      <View style={[styles.groupParent, groupViewStyle]}>
        <View style={styles.groupChildPosition}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={recipeId}
          />
          <View style={styles.eggOmletParent}>
            <Text style={[styles.eggOmlet, styles.minFlexBox]}>{dishName}</Text>
            <View style={styles.frameParent}>
              <View style={styles.alarmOnParent}>
                <Image
                  style={styles.alarmOnIcon}
                  resizeMode="cover"
                  source={require("../assets/alarm-on1.png")}
                />
                <Text style={[styles.min, styles.minFlexBox]}>
                  {cookingTime}
                </Text>
              </View>
              <Property1Hard
                sentimentNeutral={require("../assets/sentiment-neutral1.png")}
                hard="Hard"
                property1HardPosition="unset"
                property1HardMarginLeft={12}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={recipeDimensions}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 209,
    width: 169,
  },
  minFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  groupChild: {
    borderRadius: Border.br_mini,
  },
  eggOmlet: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  alarmOnIcon: {
    width: 14,
    height: 14,
  },
  min: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 4,
  },
  alarmOnParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  eggOmletParent: {
    top: 143,
    left: 12,
    width: 144,
    height: 57,
    position: "absolute",
  },
  groupItem: {
    top: 9,
    left: 127,
    width: 33,
    height: 33,
    position: "absolute",
  },
  groupParent: {
    height: 209,
    width: 169,
  },
});

export default RecipeContainer;

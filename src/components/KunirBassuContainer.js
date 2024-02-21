import React, { memo } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../utils/GlobalStyles";

const KunirBassuContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.groupChildLayout}
      onPress={() => navigation.navigate("ChefDetails")}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={[styles.rectangleGroup, styles.cookingParentFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-9.png")}
        />
        <View style={styles.frameParent}>
          <View>
            <View>
              <Text style={[styles.kunirBassu, styles.subscribeTypo]}>
                Kunir Bassu
              </Text>
              <Text style={[styles.iAmA, styles.iAmATypo]}>
                I am a passionate chef devoted ...
              </Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.cookingParentFlexBox}>
                <Image
                  style={styles.cookingIcon}
                  resizeMode="cover"
                  source={require("../assets/cooking.png")}
                />
                <Text style={[styles.recipe, styles.textTypo]}>224 Recipe</Text>
              </View>
              <View style={styles.cookingParentFlexBox}>
                <Image
                  style={styles.cookingIcon}
                  resizeMode="cover"
                  source={require("../assets/grade.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>5.4</Text>
              </View>
            </View>
          </View>
          <View style={[styles.subscribeWrapper, styles.cookingParentFlexBox]}>
            <Text style={[styles.subscribe, styles.iAmATypo]}>Subscribe</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 147,
    width: 353,
  },
  cookingParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  subscribeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iAmATypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    lineHeight: 17,
  },
  textTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    lineHeight: 17,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_smi,
    backgroundColor: Color.secondary,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    width: 100,
    height: 116,
  },
  kunirBassu: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    color: Color.colorBlack,
    textAlign: "center",
    lineHeight: 17,
    fontWeight: "500",
  },
  iAmA: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDimgray_300,
    marginTop: 6,
  },
  cookingIcon: {
    width: 14,
    height: 14,
  },
  recipe: {
    marginLeft: 5,
  },
  text: {
    marginLeft: 2,
  },
  frameContainer: {
    width: 156,
    marginTop: 9,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  subscribe: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  subscribeWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.primary,
    width: 211,
    height: 30,
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  frameParent: {
    alignSelf: "stretch",
    marginLeft: 13,
    justifyContent: "space-between",
  },
  rectangleGroup: {
    marginLeft: -161.5,
    top: 16,
    left: "50%",
    position: "absolute",
  },
});

export default KunirBassuContainer;

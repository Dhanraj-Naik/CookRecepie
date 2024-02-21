import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../utils/GlobalStyles";

const ContainerComponent = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.ellipseParent, styles.parentFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <View style={styles.frameGroup}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>29</Text>
            <Text style={[styles.recipe, styles.recipeClr]}>Recipe</Text>
          </View>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>144</Text>
            <Text style={[styles.recipe, styles.recipeClr]}>Followers</Text>
          </View>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>100</Text>
            <Text style={[styles.recipe, styles.recipeClr]}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.sarthakRanjanHotaParent}>
        <Text style={styles.sarthakRanjanHota}>Sarthak Ranjan Hota</Text>
        <Text style={[styles.imAPassionate, styles.imAPassionateLayout]}>
          I'm a passionate chef who loves creating delicious dishes with flair.
        </Text>
      </View>
      <View style={[styles.manageProfileWrapper, styles.imAPassionateLayout]}>
        <Text style={[styles.manageProfile, styles.imAPassionateTypo]}>
          Manage Profile
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 28,
  },
  recipeClr: {
    color: Color.textFaded,
    fontFamily: FontFamily.poppinsRegular,
  },
  imAPassionateLayout: {
    width: 353,
    alignItems: "center",
  },
  imAPassionateTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameChild: {
    width: 88,
    height: 88,
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.text,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 28,
  },
  recipe: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 28,
    color: Color.textFaded,
    fontFamily: FontFamily.poppinsRegular,
  },
  parent: {
    height: 55,
    justifyContent: "space-between",
  },
  frameGroup: {
    width: 213,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  ellipseParent: {
    width: 329,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sarthakRanjanHota: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.text,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 28,
  },
  imAPassionate: {
    display: "flex",
    marginTop: 5,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.textFaded,
    fontFamily: FontFamily.poppinsRegular,
  },
  sarthakRanjanHotaParent: {
    marginTop: 10,
  },
  manageProfile: {
    color: Color.primary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  manageProfileWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.secondary,
    height: 37,
    justifyContent: "center",
    padding: Padding.p_3xs,
    marginTop: 10,
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    top: 116,
    left: 20,
  },
});

export default ContainerComponent;

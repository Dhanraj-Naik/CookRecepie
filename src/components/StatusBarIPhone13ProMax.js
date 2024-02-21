import React, { memo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import TypeDefault from "./TypeDefault";
import TypeDefaultShowFalse from "./TypeDefaultShowFalse";

const StatusBarIPhone13ProMax = memo(({ dimensionsText }) => {
  return (
    <View style={styles.statusBarIphone13ProMax}>
      <TypeDefault
        time="9:41"
        iconSymbol="􀋒"
        showIcon={false}
        typeDefaultPosition="absolute"
        typeDefaultTop={0}
        typeDefaultLeft={0}
      />
      <View style={styles.indicatorsGroup}>
        <Image
          style={styles.signalIcon}
          resizeMode="cover"
          source={dimensionsText}
        />
        <Image
          style={styles.connectionIcon}
          resizeMode="cover"
          source={require("../assets/connection.png")}
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
      <Image
        style={styles.indicatorIcon}
        resizeMode="cover"
        source={require("../assets/indicator.png")}
      />
    </View>
  );
});

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
  statusBarIphone13ProMax: {
    marginLeft: -213.5,
    top: 0,
    left: "50%",
    width: 428,
    height: 47,
    overflow: "hidden",
    position: "absolute",
  },
});

export default StatusBarIPhone13ProMax;

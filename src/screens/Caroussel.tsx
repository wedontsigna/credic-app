import { range } from "lodash";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import {Box} from 'native-base';
import { Carousel } from "@fnando/react-native-carousel";
import FindFood from "./FindFood";
import FastDelivery from "./FastDelivery";
import LiveTracking from "./LiveTracking";

const Indicators = ({
  count,
  selectedIndex,
}: {
  count: number;
  selectedIndex: number;
}) => {
  const children = range(count).map((index: number) => {
    const selected = index === selectedIndex;

    return (
      <View
        key={index}
        style={{
          ...styles.indicator,
          backgroundColor: selected ? "#000" : "#ffffff80",
        }}>
        <Text
          style={{
            ...styles.indicatorText,
            color: selected ? "#fff" : "#00000090",
          }}>
          {index + 1}
        </Text>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.indicatorsSafeArea}>
      <View style={styles.indicators}>{children}</View>
    </SafeAreaView>
  );
};

const MySlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({
    currentPage: newCurrentPage,
  }: {
    currentPage: number;
  }) => {
    setCurrentPage(newCurrentPage);
  };

  return (
    <View style={styles.container}>
      <Carousel showsIndicator={false} onPageChange={handlePageChange}>
          <Box h="100vh">
            <FindFood />
          </Box>
          <Box h="100vh">
            <FastDelivery />
          </Box>
          <Box h="100vh">
            <LiveTracking />
          </Box>
      </Carousel>

      <Indicators count={3} selectedIndex={currentPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
  },

  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height:"100%"
  },

  indicatorsSafeArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  indicators: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  indicator: {
    width: 20,
    height: 20,

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    borderRadius: 10,
  },

  indicatorText: {
    fontFamily: "System",
    fontWeight: "700",
  },
});

export default MySlider;
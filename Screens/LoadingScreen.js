import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from 'react-native';
import LoadingStyles from '../Styles/LoadingStyles';

const LoadingScreen = ({ navigation, route }) => {
  const { level, username, password, destination,  questionsData, userAnswers, totalScore } = route.params;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(destination, { level, username, password,  questionsData, userAnswers, totalScore  });
    }, 3000); 
  }, [navigation, destination, level, username,  password,  questionsData, userAnswers, totalScore]);

  return (
    <View style={LoadingStyles.container}>
      <Image
        source={require('../assets/pq.gif')} 
        style={LoadingStyles.animation}
        resizeMode="contain" 
      />
    </View>
  );
};

export default LoadingScreen;

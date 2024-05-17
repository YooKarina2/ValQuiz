import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeStyles from "../Styles/HomeStyles";

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();

  // Define categories for each level
  const levelCategories = [
    { level: 1, category: "Valorant" },
    { level: 2, category: "K-Drama" },
    { level: 3, category: "K-Pop" }
  ];

  useEffect(() => {
    const backAction = () => {
      handleExitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleQuizLevel = (level, category) => {
    navigation.navigate('Loading', { level, category, username, destination: 'Quiz' });
  };

  const handleExitApp = () => {
    BackHandler.exitApp(); 
  };

  return (
    <View style={HomeStyles.container}>
      <TouchableOpacity
        style={HomeStyles.button2}
        onPress={handleExitApp}>
        <Image
          source={require("../assets/pq.gif")}
          style={HomeStyles.icon}
        />
        <Text style={[HomeStyles.labelStyle, {fontWeight: 'bold'}]}>Exit</Text>
      </TouchableOpacity>
      <Image source={require("../assets/red.gif")} style={HomeStyles.logo} />
      <Text style={HomeStyles.welcomeText}>
        Choose a Quiz Level, <Text style={{ color: 'black', fontWeight: 'bold' }}>{username}</Text>
      </Text>
      <View style={HomeStyles.buttonsContainer}>
        {levelCategories.map(({ level, category }) => (
          <TouchableOpacity
            key={level}
            style={HomeStyles.button}
            onPress={() => handleQuizLevel(level, category)}
          >
            <Text style={HomeStyles.buttonText}>Level {level} - {category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

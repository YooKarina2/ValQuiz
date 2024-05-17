import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080', // Changed background color to a lighter shade
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333333', // Changed text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    width: 140,
    height: 140,
    backgroundColor: '#FF6347', // Changed button color
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000', // Updated shadow color
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelStyle: {
    fontSize: 14,
  },
  button2: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#FF6347',
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default HomeStyles;

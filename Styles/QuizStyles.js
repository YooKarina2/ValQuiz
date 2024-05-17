import { StyleSheet } from 'react-native';

const QuizStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080', // Changed background color to a lighter shade
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  text: {
    color: '#333333', // Changed text color
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 25, // Adjusted border radius for rounded corners
    marginRight: 10,
    backgroundColor: '#FF6347', // Changed button color
    elevation: 3, // Added elevation for shadow effect (Android)
    shadowColor: '#000', // Added shadow color
    shadowOpacity: 0.3, // Added shadow opacity
    shadowRadius: 3, // Added shadow radius
    shadowOffset: { width: 0, height: 2 }, // Added shadow offset
  },
  goBackButton: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 25, // Adjusted border radius for rounded corners
    marginRight: 10,
    backgroundColor: '#FF6347', // Changed button color
    elevation: 3, // Added elevation for shadow effect (Android)
    shadowColor: '#000', // Added shadow color
    shadowOpacity: 0.3, // Added shadow opacity
    shadowRadius: 3, // Added shadow radius
    shadowOffset: { width: 0, height: 2 }, // Added shadow offset
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
});

export default QuizStyles;

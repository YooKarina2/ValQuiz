import { StyleSheet } from 'react-native';

const TimedStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080', // Updated background color
  },
  text: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: '#FF6347',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonText2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
    width: '100%',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
  clockContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
  },
  clockIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default TimedStyles;

import { StyleSheet } from "react-native";

const AnswerStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#808080',
  },
  goBackButton: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  goBackText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  scoreContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalScoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  questionContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 3,
  },
  correctAnswer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#00BFFF',
    elevation: 3,
  },
  wrongAnswer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF4500',
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  answerText: {
    marginLeft: 15,
    marginBottom: 5,
    color: '#333',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
});

export default AnswerStyle;

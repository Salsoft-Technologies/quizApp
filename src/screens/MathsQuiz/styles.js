import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  progressMainView: {
    flexDirection: 'row',
    paddingTop: 3 * vh,
    justifyContent: 'space-around',
  },

  progressAlternativeView: {
    flexDirection: 'row',
    paddingTop: 3 * vh,
    justifyContent: 'space-around',
  },

  correctAnswerColor: {
    backgroundColor: 'green',
    padding: 0.2 * vw,
    paddingHorizontal: 2 * vw,
  },

  incorrectAnswerColor: {
    backgroundColor: 'red',
    padding: 0.1 * vw,
    paddingHorizontal: 2 * vw,
  },

  newColor: {
    backgroundColor: 'gray',
    padding: 0.1 * vw,
    paddingHorizontal: 2 * vw,
  },

  quizHeading: {
    color: '#3f445d',
    fontSize: 2.6 * vh,
    paddingTop: 3 * vh,
  },

  questionNo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 0.8 * vh,
  },

  questionNoSize: {
    fontSize: 4 * vh,
  },

  totalQuestionsNo: {
    fontWeight: '200',
    color: '#686f8b',
  },

  questionDescription: {
    color: 'white',
    fontSize: 2.7 * vh,
    paddingTop: 4.3 * vh,
  },

  buttonIncorrectAnswer: {
    paddingHorizontal: 5 * vw,
    padding: 2.5 * vw,
  },

  buttonIncorrectAnswerView: {
    borderWidth: 0.5 * vw,
    borderRadius: 8 * vw,
    paddingVertical: 1.2 * vh,
    borderColor: '#343b55',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5 * vw,
  },

  buttonIncorrectRedAnswerView: {
    borderWidth: 0.5 * vw,
    borderRadius: 8 * vw,
    paddingVertical: 1.2 * vh,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5 * vw,
  },

  buttonCorrectAnswerView: {
    borderWidth: 0.5 * vw,
    borderRadius: 8 * vw,
    paddingVertical: 1.2 * vh,
    borderColor: '#10997e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5 * vw,
  },

  buttonIncorrectAnswerText: {
    color: '#343b55',
  },

  buttonIncorrectRedAnswerText: {
    color: 'red',
  },

  buttonCorrectAnswerText: {
    color: '#10997e',
  },

  allAnswers: {
    paddingTop: 7 * vh,
  },

  mainMathsQuiz: {
    flex: 1,
    backgroundColor: '#12172e',
    padding: 5 * vw,
  },

  mainFooterView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 3.8 * vh,
    alignSelf: 'center',
  },

  quitButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingRight: 24 * vw,
  },

  quitButtonIcon: {
    height: 3.5 * vh,
    width: 6.5 * vw,
  },

  quitButtonText: {
    alignSelf: 'center',
    color: '#9e9fa5',
    paddingLeft: 1.5 * vw,
  },

  nextButton: {
    backgroundColor: '#06d1f4',
    paddingHorizontal: 15 * vw,
    alignSelf: 'center',
    paddingVertical: 3.5 * vw,
    borderRadius: 3.5 * vw,
  },

  nextButtonText: {
    color: '#e0f6fd',
    fontWeight: 'bold',
  },
});

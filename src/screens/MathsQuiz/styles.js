import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    progressMainView: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-around',
      },
    
      progressAlternativeView: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-around',
      },
    
      correctAnswerColor: {
        backgroundColor: 'green',
        padding: 1,
        paddingHorizontal: 10,
      },
    
      incorrectAnswerColor: {
        backgroundColor: 'red',
        padding: 1,
        paddingHorizontal: 10,
      },
    
      newColor: {
        backgroundColor: 'gray',
        padding: 1,
        paddingHorizontal: 10,
      },
    
      quizHeading: {
        color: '#3f445d',
        fontSize: 18,
      },
    
      questionNo: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
      },
    
      questionNoSize: {
        fontSize: 25,
      },
    
      totalQuestionsNo: {
        fontWeight: '200',
        color: '#686f8b',
      },
    
      questionDescription: {
        color: 'white',
        fontSize: 18,
        paddingTop: 30,
      },
    
      buttonIncorrectAnswer: {
        paddingHorizontal: 20,
        padding: 10,
      },
    
      buttonIncorrectAnswerView: {
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 10,
        borderColor: '#343b55',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
    
      buttonIncorrectRedAnswerView: {
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 10,
        borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
    
      buttonCorrectAnswerView: {
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 10,
        borderColor: '#10997e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
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
        paddingTop: 50,
      },
    
      mainMathsQuiz: {
        flex: 1,
        backgroundColor: '#12172e',
        padding: 20,
      },
    
      mainFooterView: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
      },
    
      quitButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingRight: 100,
      },
    
      quitButtonIcon: {
        height: 30,
        width: 30,
      },
    
      quitButtonText: {
        alignSelf: 'center',
        color: '#9e9fa5',
        paddingLeft: 5,
      },
    
      nextButton: {
        backgroundColor: '#06d1f4',
        paddingHorizontal: 60,
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 15,
      },
    
      nextButtonText: {
        color: '#e0f6fd',
        fontWeight: 'bold',
      },
})
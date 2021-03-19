import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainScreenView: {
    backgroundColor: '#d8e2e8',
    flex: 1,
  },

  mainCardView: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    marginHorizontal: 20,
    bottom: 80,
    borderRadius: 15,
  },

  cardImage: {
    height: 180,
    width: 150,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  cardMainTextView: {
    justifyContent: 'center',
    paddingLeft: 10,
  },

  cardTextView: {
    padding: 10,
  },

  cardHeadingTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },

  cardSubTextView: {
    marginBottom: 10,
    marginLeft: 12,
  },

  cardSubTextStyle: {
    color: '#5c5c5c',
    fontSize: 14,
  },

  mainViewTopCategoriesText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 50,
  },

  topCategoriesTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  topCategoriesButton: {
    backgroundColor: '#d5f0f6',
    alignSelf: 'center',
    paddingHorizontal: 15,
    padding: 5,
    borderRadius: 10,
  },

  topCategoriesButtonText: {
    color: '#4edbf6',
    fontWeight: 'bold',
  },

  categoriesMainView: {
    height: 120,
    width: 100,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 15,
    marginLeft: 15,
    marginBottom: 20,
  },

  allQuizIcons: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: 20,
  },

  allQuizName: {
    paddingTop: 10,
    color: '#484f53',
    alignSelf: 'center',
  },

  allQuizList: {
    bottom: 30,
    alignSelf: 'center',
    marginRight: 5,
  },

  //MathsQuiz

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

  //Result Screen

  topHeaderView: {
    alignItems: 'center',
  },

  topHeaderText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10
  },

  topHeaderImage: {
    alignSelf: 'center',
    paddingTop: 10,
  },

  topHeaderImageSize: {
    height: 200,
    width: 200,
  },

  congratulationsMessageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    padding: 10,
  },

  subMessage: {
    color: '#b1b7bf',
    alignSelf: 'center',
    padding: 5,
    fontSize: 15,
  },

  yourScoreText: {
    color: 'white',
    fontSize: 16,
    color: '#5d6175',
    alignSelf: 'center',
    paddingTop: 20,
  },

  totalQuestions: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    alignSelf: 'center',
    paddingTop: 5,
  },

  totalAnsweredQuestions: {
    color: '#10c398',
    fontWeight: 'bold',
    fontSize: 35,
    alignSelf: 'center',
    paddingTop: 5,
  },

  coinsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },

  coinsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },

  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
  },

  shareButton: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  shareButtonIcon: {
    height: 15,
    width: 15,
  },

  shareButtonText: {
    paddingLeft: 5,
  },

  newQuizButton: {
    flexDirection: 'row',
    backgroundColor: '#06d3f6',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15,
  },

  newQuizText: {
    color: '#ffffff',
  },

  mainResultScreen: {
    flex: 1,
    backgroundColor: '#1d2544',
  },

  //Login Screen

  loginButtonText: {
    fontSize: 16,
    color: '#01c293',
    paddingTop: 20,
    alignSelf: 'center',
    letterSpacing: 4,
  },

  noAccountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },

  noAccountText: {
    color: 'white',
    letterSpacing: 2,
  },

  createHereText: {
    color: '#01c293',
    letterSpacing: 2,
  },

  loginWithGoogleButton: {
    flexDirection: 'row',
    backgroundColor: '#dc4e41',
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  loginWithGoogleButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  loginWithGoogleButtonIcon: {
    height: 30,
    width: 30,
  },

  loginWithFacebookButton: {
    flexDirection: 'row',
    backgroundColor: '#219bee',
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  loginWithFacebookButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  loginWithFacebookButtonIcon: {
    height: 30,
    width: 30,
  },

  //Welcome Screen
  textInputBox: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },

  buttonText: {
    fontSize: 16,
    color: '#01c293',
    paddingTop: 20,
    alignSelf: 'center',
    letterSpacing: 2,
  },

  buttonTextEmpty: {
    fontSize: 16,
    color: '#b50f45',
    paddingTop: 20,
    alignSelf: 'center',
    letterSpacing: 2,
  },

  quizLogo: {
    height: 250,
    width: 250,
  },

  mainWelcomeScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Notification
  notificationHeaderView: {
    borderBottomColor: '#5d6175',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  notificationHeaderText: {
    color: '#5d6175',
    fontSize: 20,
    fontWeight: 'bold',
  },

  notificationButtonContainer: {
    paddingTop: 20,
  },

  notificationContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#403b5d',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
  },

  notificationIcon: {
    marginRight: 30,
    height: 70,
    width: 70,
  },

  notificationTextView: {
    padding: 30,
  },

  notificationTextAlert: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  notificationDescriptionText: {
    color: 'lightgrey',
    fontSize: 16,
  },

  notificationMainScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    padding: 20,
  },

  //SettingScreen

  touchableRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowText: {
    paddingLeft: 10,
    color: '#5d6175',
    fontSize: 15,
  },

  rowIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },

  rowIconSize: {
    height: 30,
    width: 30,
  },

  rowIconSize3: {
    height: 40,
    width: 40,
  },
});

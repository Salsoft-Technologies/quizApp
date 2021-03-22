import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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

  //Welcome Screen
  textInputBox: {
    borderBottomWidth: 1,
    borderColor: 'white',
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
});

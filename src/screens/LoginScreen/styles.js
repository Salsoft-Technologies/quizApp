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
})
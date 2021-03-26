import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  loginButtonText: {
    fontSize: 2.3 * vh,
    color: '#01c293',
    paddingTop: 3 * vh,
    alignSelf: 'center',
    letterSpacing: 1 * vw,
  },

  noAccountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 3 * vh,
  },

  noAccountText: {
    color: 'white',
    letterSpacing: 0.5 * vw,
  },

  createHereText: {
    color: '#01c293',
    letterSpacing: 0.5 * vw,
  },

  loginWithGoogleButton: {
    flexDirection: 'row',
    backgroundColor: '#dc4e41',
    marginTop: 3 * vh,
    padding: 2.5 * vw,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  loginWithGoogleButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  loginWithGoogleButtonIcon: {
    height: 3.5 * vh,
    width: 6.5 * vw,
  },

  loginWithFacebookButton: {
    flexDirection: 'row',
    backgroundColor: '#219bee',
    marginTop: 3 * vh,
    padding: 2.5 * vw,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  loginWithFacebookButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  loginWithFacebookButtonIcon: {
    height: 3.5 * vh,
    width: 6.5 * vw,
  },

  textInputBox: {
    borderBottomWidth: 1,
    borderColor: 'white',
    padding: 3 * vw,
  },

  buttonText: {
    fontSize: 2.3 * vh,
    color: '#01c293',
    paddingTop: 3 * vh,
    alignSelf: 'center',
    letterSpacing: 1 * vw,
  },

  buttonTextEmpty: {
    fontSize: 2.3 * vh,
    color: '#b50f45',
    paddingTop: 3 * vh,
    alignSelf: 'center',
    letterSpacing: 1 * vw,
  },

  quizLogo: {
    height: 36.5 * vh,
    width: 61 * vw,
  },

  mainWelcomeScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

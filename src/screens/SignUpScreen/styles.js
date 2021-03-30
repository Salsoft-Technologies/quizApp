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

  //Welcome Screen
  textInputBox: {
    borderBottomWidth: 0.3 * vw,
    borderColor: 'white',
    padding: 3 * vw,
  },

  quizLogo: {
    height: 36.5 * vh,
    width: 61 * vw,
    paddingTop: 2 * vh,
  },

  mainWelcomeScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

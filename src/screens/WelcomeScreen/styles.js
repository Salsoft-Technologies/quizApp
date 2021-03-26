import {StyleSheet, ViewComponent} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  textInputBox: {
    borderBottomWidth: 0.2 * vw,
    borderColor: 'white',
    padding: 3 * vw,
  },

  buttonText: {
    fontSize: 2.3 * vh,
    color: '#01c293',
    paddingTop: 3 * vh,
    letterSpacing: 0.5 * vw,
  },

  buttonTextEmpty: {
    fontSize: 2.3 * vh,
    color: '#b50f45',
    paddingTop: 3 * vh,
    letterSpacing: 0.5 * vw,
  },

  quizLogo: {
    height: 30 * vh,
    width: 70 * vw,
  },

  mainWelcomeScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

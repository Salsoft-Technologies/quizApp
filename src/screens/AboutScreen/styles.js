import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 1.5 * vw,
    paddingTop: 3 * vh,
  },

  imageSize: {
    height: 30 * vh,
    width: 50 * vw,
    alignSelf: 'center',
  },

  mainSettingScreen: {
    backgroundColor: '#141733',
    flex: 1,
    padding: 4 * vw,
  },

  headingView: {
    paddingTop: 1.5 * vh,
  },

  aboutText: {
    fontSize: 4 * vh,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  meText: {
    color: '#5570f3',
  },

  descriptionText: {
    color: '#50567b',
    fontSize: 2.4 * vh,
    paddingBottom: 2.5 * vh,
  },

  quizHeadingText: {
    color: '#ffffff',
    fontWeight: 'bold',
    paddingLeft: 1.5 * vw,
  },

  quizDescriptionText: {
    color: '#5d6075',
    paddingLeft: 9 * vw,
  },

  itemsView: {
    paddingBottom: 1 * vh,
  },

  iconSize: {
    height: 3.4 * vh,
    width: 7.4 * vw,
  },

  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0.7 * vh,
    justifyContent: 'flex-end',
    paddingRight: 2 * vw,
  },

  tourText: {
    color: '#abb9f9',
    fontWeight: 'bold',
    paddingLeft: 1.5 * vw,
  },

  arrowIcon: {
    height: 4.4 * vh,
    width: 7.4 * vw,
  },

  mainFooterView: {flexDirection: 'row', justifyContent: 'space-between'},

  goBackButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5.3 * vw,
  },

  backIconStyle: {
    height: 3.4 * vh,
    width: 7.4 * vw,
  },

  goBackText: {
    color: '#abb9f9',
    fontWeight: 'bold',
    paddingLeft: 1.5 * vw,
  },

  footerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5.3 * vw,
  },
});

import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  headerView: {
    backgroundColor: '#a6ccff',
    paddingTop: 1.5 * vh,
    paddingVertical: 4.5 * vh,
    borderBottomLeftRadius: 20 * vw,
    borderLeftColor: '#1e1d20',
    borderTopColor: 'transparent',
    borderLeftWidth: 3.5 * vw,
  },

  headerTopHeading: {
    color: '#646364',
    alignSelf: 'center',
    fontSize: 2.3 * vh,
    paddingTop: 3 * vh,
  },

  headerSecondHeading: {
    color: '#626164',
    alignSelf: 'center',
    fontSize: 3.5 * vh,
    paddingTop: 1 * vh,
  },

  listBackground: {
    backgroundColor: 'transparent',
    paddingTop: 1 * vh,
  },

  listButton: {
    marginLeft: 13 * vw,
  },

  listImage: {
    height: 7 * vh,
    width: 14 * vw,
  },

  subjectStyle: {
    color: '#626164',
  },

  difficultyLevel: {
    color: '#626164',
    fontWeight: 'bold',
  },

  kidsHeading: {
    fontSize: 3 * vh,
    paddingTop: 1.5 * vh,
    alignSelf: 'center',
    color: '#626164',
    fontWeight: 'bold',
  },

  kidsQuizButton: {
    marginLeft: 20 * vw,
    alignItems: 'center',
    paddingTop: 1.5 * vh,
  },

  kidsButtonIcon: {
    height: 12 * vh,
    width: 22 * vw,
  },

  kidsButtonSubjectText: {
    color: 'white',
  },

  kidsButtonDifficultyText: {
    color: '#626164',
  },

  allQuizListMainPage: {
    flex: 1,
    backgroundColor: '#141733',
  },

  footerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5.3 * vw,
    bottom: 0.5 * vh,
  },

  mainFooterView: {flexDirection: 'row', justifyContent: 'space-between'},

  goBackButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5.3 * vw,
    bottom: 0.5 * vh,
  },

  goBackText: {
    color: '#abb9f9',
    fontWeight: 'bold',
    paddingLeft: 1.5 * vw,
  },

  backIconStyle: {
    height: 3.4 * vh,
    width: 7.4 * vw,
  },
});

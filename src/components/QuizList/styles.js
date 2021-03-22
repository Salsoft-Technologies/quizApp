import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';


export default StyleSheet.create({
  categoriesMainView: {
    height: 15 * vh,
    width: 25 * vw,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 2.7 * vw,
    marginLeft: 2.7 * vw,
    marginBottom: 2 * vh,
  },

  allQuizIcons: {
    height: 7.5 * vh,
    width: 12 * vw,
    alignSelf: 'center',
    marginTop: 2 * vh,
  },

  allQuizName: {
    paddingTop: 2 * vh,
    color: '#484f53',
    alignSelf: 'center',
  },

  allQuizList: {
    bottom: 4 * vh,
    alignSelf: 'center',
    marginRight: 1 * vw,
  },
});

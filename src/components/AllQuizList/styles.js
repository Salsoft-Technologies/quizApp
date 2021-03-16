import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerView: {
    // backgroundColor: '#1d2544',
    backgroundColor: '#edf3f6',

    paddingTop: 30,
    paddingVertical: 40,
    borderBottomLeftRadius: 100,
    borderLeftColor: '#1e1d20',
    borderTopColor: 'transparent',
    borderLeftWidth: 10,
  },

  headerTopHeading: {
    color: '#646364',
    alignSelf: 'center',
    fontSize: 16,
  },

  headerSecondHeading: {
    color: '#626164',
    alignSelf: 'center',
    fontSize: 25,
    paddingTop: 5,
  },

  listBackground: {
    backgroundColor: 'transparent',
    paddingTop: 5,
  },

  listButton: {
    marginLeft: 40,
  },

  listImage: {
    height: 80,
    width: 80,
  },

  subjectStyle: {
    color: '#626164',
  },

  difficultyLevel: {
    color: '#626164',
    fontWeight: 'bold',
  },

  kidsHeading: {
    fontSize: 20,
    paddingTop: 10,
    alignSelf: 'center',
    color: '#626164',
    fontWeight: 'bold',
  },

  kidsQuizButton: {
    marginLeft: 60,
    alignItems: 'center',
    paddingTop: 10,
  },

  kidsButtonIcon: {
    height: 120,
    width: 120,
  },

  kidsButtonSubjectText: {
    color: 'white',
  },

  kidsButtonDifficultyText: {
    color: '#626164',
  },

  allQuizListMainPage: {
    flex: 1,
    backgroundColor: '#1d2544',
  },
});

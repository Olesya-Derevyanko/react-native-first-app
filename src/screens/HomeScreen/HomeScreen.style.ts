import { StyleSheet } from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  section: {
    paddingTop: 15,
  },

  lastSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    paddingLeft: 5,
    color: '#ff9800',
    fontWeight: '700',
  },
});
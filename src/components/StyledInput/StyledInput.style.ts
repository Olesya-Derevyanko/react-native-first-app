import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 25,
  },
  section: {
    marginTop: 5,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderColor: '#dbdbdb',
    borderWidth: 1,
  },

  inputActive: {
    borderColor: '#666373',
    shadowColor: 'inset 0 -2px 5px rgba(0, 0, 0, 0.03)',
  },
});

export default styles;

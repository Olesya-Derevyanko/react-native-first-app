import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 25,
  },
  textSection: {
    paddingLeft: 16,
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
  },

  inputError: {
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default styles;

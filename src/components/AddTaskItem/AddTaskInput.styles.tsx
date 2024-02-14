import {StyleSheet} from 'react-native';
import { primary, error } from '../../assets/colours/colours';

export default StyleSheet.create({
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: primary.white,
    borderRadius: 25,
    borderColor: primary.black,
    borderWidth: 1,
    color: primary.black,
  },
  errorInput: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: primary.white,
    borderRadius: 21,
    borderColor: error.error,
    borderWidth: 1,
    marginTop: 10,
  },
  addButtonContainer: {
    width: 60,
    height: 60,
    backgroundColor: primary.black,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  errorText: {
    color: error.error,
    paddingTop: 5,
    marginHorizontal: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

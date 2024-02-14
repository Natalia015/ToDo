import {StyleSheet} from 'react-native';
import { primary } from '../../assets/colours/colours';

const styles = StyleSheet.create({
  item: {
    backgroundColor: primary.white,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowColor: primary.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  checkBox: {
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: primary.black,
  },
  editedText: {
    maxWidth: '80%',
    borderWidth: 1,
    borderColor: primary.borderGrey,
    borderRadius: 5,
    padding: 5,
    color: primary.black,
  },
  options: {
    flexDirection: 'row',
  },
  trash: {
    marginLeft: 15,
  },
});

export default styles;

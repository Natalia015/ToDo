import {StyleSheet} from 'react-native';
import { primary } from '../../assets/colours/colours';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary.lightGrey,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 5,
    color: primary.black,
  },
  titleContainer: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  itemContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  writeTaskContainer: {
    position: 'absolute',
    bottom: 40,
    marginLeft: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  sortOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  sortOptionLabel: {
    fontSize: 16,
    marginRight: 10,
    color: primary.black,
  },
  sortOption: {
    fontSize: 16,
    color: primary.black,
  },
  activeSortOption: {
    fontWeight: 'bold',
  },
});

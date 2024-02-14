import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer, { RootState } from '../reducers/reducers'; // Import RootState

// Configuration object for redux-persist
const persistConfig = {
  key: 'root',  // Key for storing the data in AsyncStorage
  storage: AsyncStorage, // Storage engine, using AsyncStorage in a React Native environment
  stateReconciler: autoMergeLevel2, // State reconciler 
};

// Create a persisted reducer by wrapping the root reducer with redux-persist
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// Configure the Redux store using the createStore function from @reduxjs/toolkit
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor using the persistStore function, which takes the Redux store as an argument
const persistor = persistStore(store);

export { store, persistor };

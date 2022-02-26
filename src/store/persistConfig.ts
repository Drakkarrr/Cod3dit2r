import storage from "redux-persist/lib/storage";
import  { persistReducer }  from "redux-persist";
import rootReducer from "store/rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['darkMode'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
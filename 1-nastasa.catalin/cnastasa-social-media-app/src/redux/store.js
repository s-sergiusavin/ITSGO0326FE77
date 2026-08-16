import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storageLib from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { authReducer } from "./slices/authSlice";
import { postReducer } from "./slices/feedSlice";
import { themeReducer } from "./slices/themeSlice";
import { friendsReducer } from "./slices/friendsSlice";
import { groupsReducer } from "./slices/groupsSlice";
import { profileReducer } from "./slices/profileSlice";

const storage = storageLib && storageLib.default ? storageLib.default : storageLib;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'post', 'theme', 'friends', 'groups', 'profile']
}

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    theme: themeReducer,
    friends: friendsReducer,
    groups: groupsReducer,
    profile: profileReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

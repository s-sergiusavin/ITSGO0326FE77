import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 'ionela-reli-nastasa', name: 'Ionela-Reli Nastasa', color: '#2196f3', initial: 'I', isFavorite: true, mutualFriends: 136 },
        { id: 'catalina-luca', name: 'Catalina Luca', color: '#9c27b0', initial: 'C', isFavorite: false, mutualFriends: 22 },
        { id: 'dm-alexandra', name: 'DM Alexandra', color: '#e91e63', initial: 'A', isFavorite: false, mutualFriends: 9 },
        { id: 'andrei-popescu', name: 'Andrei Popescu', color: '#31a24c', initial: 'A', isFavorite: false, mutualFriends: 34 },
        { id: 'maria-ionescu', name: 'Maria Ionescu', color: '#f3425f', initial: 'M', isFavorite: false, mutualFriends: 5 },
        { id: 'achim-nastasa', name: 'Achim Nastasa', color: '#ff9800', initial: 'A', isFavorite: true, mutualFriends: 19 },
        { id: 'radu-ionescu', name: 'Radu Ionescu', color: '#009688', initial: 'R', isFavorite: false, mutualFriends: 12 },
        { id: 'elena-vasilescu', name: 'Elena Vasilescu', color: '#673ab7', initial: 'E', isFavorite: false, mutualFriends: 47 },
        { id: 'mihai-constantin', name: 'Mihai Constantin', color: '#ff5722', initial: 'M', isFavorite: false, mutualFriends: 8 },
        { id: 'ana-dumitrescu', name: 'Ana Dumitrescu', color: '#03a9f4', initial: 'A', isFavorite: false, mutualFriends: 63 },
        { id: 'george-marin', name: 'George Marin', color: '#8bc34a', initial: 'G', isFavorite: false, mutualFriends: 15 },
        { id: 'diana-stanciu', name: 'Diana Stanciu', color: '#e040fb', initial: 'D', isFavorite: false, mutualFriends: 29 },
        { id: 'vlad-petrescu', name: 'Vlad Petrescu', color: '#ff7043', initial: 'V', isFavorite: false, mutualFriends: 3 },
        { id: 'larisa-tudor', name: 'Larisa Tudor', color: '#26a69a', initial: 'L', isFavorite: false, mutualFriends: 41 },
        { id: 'cristian-barbu', name: 'Cristian Barbu', color: '#5c6bc0', initial: 'C', isFavorite: false, mutualFriends: 21 },
        { id: 'simona-radu', name: 'Simona Radu', color: '#ec407a', initial: 'S', isFavorite: false, mutualFriends: 17 }
    ]
}

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        toggleFavorite(state, action) {
            const friend = state.list.find((f) => f.id === action.payload);
            friend.isFavorite = !friend.isFavorite;
        }
    }
});

export const { toggleFavorite } = friendsSlice.actions;

export const friendsReducer = friendsSlice.reducer;

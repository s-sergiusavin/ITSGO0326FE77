import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 'colegiul-national-grigore-moisil', name: 'Colegiul National Grigore Moisil', activity: 'acum 12 minute' },
        { id: 'universitatea-politehnica-bucuresti', name: 'Universitatea Politehnica București', activity: 'acum o oră' },
        { id: 'pasionati-de-fotografie', name: 'Pasionați de fotografie', activity: 'acum 2 zile' },
        { id: 'vecinii-din-cartier', name: 'Vecinii din cartier', activity: 'acum o săptămână' }
    ]
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        addGroup(state, action) {
            const name = action.payload.name.trim();
            const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;

            state.list.unshift({ id, name, activity: 'chiar acum' });
        }
    }
});

export const { addGroup } = groupsSlice.actions;

export const groupsReducer = groupsSlice.reducer;

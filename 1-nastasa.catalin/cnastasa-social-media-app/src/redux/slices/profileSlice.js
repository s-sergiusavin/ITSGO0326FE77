import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Catalin Nastasa',
    location: 'București',
    schools: ['Colegiul Național Grigore Moisil Onești', 'Universitatea Politehnica București'],
    bioLinks: ['https://www.youtube.com/watch?v=TOrnUquxtwA', 'https://youtu.be/rmfmdKOLzVI'],
    coverPhoto: null,
    avatarPhoto: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setCoverPhoto(state, action) {
            state.coverPhoto = action.payload;
        },
        setAvatarPhoto(state, action) {
            state.avatarPhoto = action.payload;
        },
        updateProfileInfo(state, action) {
            const { name, location, schools, bioLinks } = action.payload;
            state.name = name;
            state.location = location;
            state.schools = schools;
            state.bioLinks = bioLinks;
        }
    }
});

export const { setCoverPhoto, setAvatarPhoto, updateProfileInfo } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;

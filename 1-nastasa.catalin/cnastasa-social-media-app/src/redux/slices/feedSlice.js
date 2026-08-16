import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: '',
    posts: [
        {
            id: 1,
            author: 'Catalin Nastasa',
            taggedFriend: 'Ionela-Reli Nastasa',
            title: 'Expoziție de fluturi',
            meta: '3 h · Muzeul Antipa',
            images: ['fluture1', 'fluture2', 'fluture3', 'fluture4'],
            likes: 47,
            reaction: null,
            isSaved: false,
            shares: 5,
            isShared: false,
            commentsCount: 12,
            comments: [
                { id: 1, author: 'Ionela-Reli Nastasa', text: 'Ce poze frumoase, mi-a placut mult expozitia!' },
                { id: 2, author: 'Catalina Luca', text: 'Fluturele ăla galben e superb 😍' },
                { id: 3, author: 'Andrei Popescu', text: 'Trebuie sa mergem si noi intr-un weekend' }
            ]
        },
        {
            id: 2,
            author: 'Catalin Nastasa',
            title: '🎂 La mulți ani Achim!',
            meta: '1 zi · Lasertag București',
            images: ['lasertag'],
            likes: 23,
            reaction: null,
            isSaved: false,
            shares: 2,
            isShared: false,
            commentsCount: 5,
            comments: [
                { id: 1, author: 'Maria Ionescu', text: 'La multi ani, Achim! 🎉' },
                { id: 2, author: 'DM Alexandra', text: 'Ce faza tare cu lasertag-ul' }
            ]
        },
        {
            id: 3,
            author: 'Catalin Nastasa',
            title: '`87 vs `19 . Tata si copilu`',
            meta: '4 zile',
            images: ['titanii'],
            likes: 6,
            reaction: null,
            shares: 0,
            isShared: false,
            commentsCount: 1,
            comments: [
                { id: 1, author: 'Crina Draganoiu', text: 'Multă sănătate copii' },
                { id: 2, author: 'Catalina Luca', text: 'Aveati acelasi zambet si atunci 😄' }
            ]
        }
    ]
}

const findPost = (state, postId) => state.posts.find((post) => post.id === postId);

const feedSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setReaction(state, action) {
            const { postId, type } = action.payload;
            const post = findPost(state, postId);

            if (post.reaction === type) {
                post.reaction = null;
                post.likes -= 1;
            } else if (post.reaction === null) {
                post.reaction = type;
                post.likes += 1;
            } else {
                post.reaction = type;
            }
        },
        toggleShare(state, action) {
            const post = findPost(state, action.payload);
            if (post.isShared) return;
            post.isShared = true;
            post.shares += 1;
        },
        addComment(state, action) {
            const { postId, author, text } = action.payload;
            const post = findPost(state, postId);
            const nextId = post.comments.length ? Math.max(...post.comments.map((c) => c.id)) + 1 : 1;
            post.comments.push({ id: nextId, author, text });
        },
        removeComment(state, action) {
            const { postId, commentId } = action.payload;
            const post = findPost(state, postId);
            post.comments = post.comments.filter((comment) => comment.id !== commentId);
        },
        addPost(state, action) {
            const { author, title } = action.payload;
            const nextId = state.posts.length ? Math.max(...state.posts.map((p) => p.id)) + 1 : 1;

            state.posts.unshift({
                id: nextId,
                author,
                title,
                meta: 'Chiar acum',
                images: [],
                likes: 0,
                reaction: null,
                shares: 0,
                isShared: false,
                commentsCount: 0,
                comments: []
            });
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        toggleSave(state, action) {
            const post = findPost(state, action.payload);
            post.isSaved = !post.isSaved;
        }
    }
});

export const { setReaction, toggleShare, addComment, removeComment, addPost, setSearchTerm, toggleSave } = feedSlice.actions;

export const postReducer = feedSlice.reducer;

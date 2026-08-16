export const selectPosts = state => state.post.posts;
export const selectSearchTerm = state => state.post.searchTerm;

export const selectFilteredPosts = (state) => {
    const term = state.post.searchTerm.trim().toLowerCase();
    if (!term) return state.post.posts;

    return state.post.posts.filter(
        (post) =>
            post.author.toLowerCase().includes(term) ||
            post.title.toLowerCase().includes(term)
    );
};

export const selectSavedPosts = state => state.post.posts.filter((post) => post.isSaved);

export const selectUser = state => state.auth;
export const selectTheme = state => state.theme.mode;

export const selectFriends = state => state.friends.list;
export const selectFavoriteFriends = state => state.friends.list.filter((f) => f.isFavorite);

export const selectGroups = state => state.groups.list;

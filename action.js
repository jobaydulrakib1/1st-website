// Action Creators

// Set user action
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    };
};

// Logout action
export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

// Toggle theme action
export const toggleTheme = () => {
    return {
        type: 'TOGGLE_THEME',
    };
};

// Update profile action
export const updateProfile = (profileData) => {
    return {
        type: 'UPDATE_PROFILE',
        payload: profileData,
    };
};

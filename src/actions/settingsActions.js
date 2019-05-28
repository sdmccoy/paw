export const userSettingsSet = userSettings => ({
    type: 'SET_USER_SETTINGS',
    payload: userSettings,
});

export const userSettingsSave = userSettings => ({
    type: 'SAVE_USER_SETTINGS',
    payload: userSettings,
});
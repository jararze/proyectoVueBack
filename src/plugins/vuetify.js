// Vuetify configuration
import 'vuetify/styles'; // Ensure Vuetify styles are imported
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
    icons: {
        defaultSet: 'mdi', // Default icon set
        aliases,
        sets: { mdi },
    },
    theme: {
        defaultTheme: 'dark', // Set dark theme as default
        themes: {
            dark: {
                colors: {
                    primary: '#bb86fc', // Adjust dark mode colors
                    secondary: '#03dac6',
                    background: '#121212', // Dark background
                    surface: '#1e1e1e', // Dark surface
                    error: '#cf6679',
                },
            },
            light: {
                colors: {
                    primary: '#6200ee',
                    secondary: '#03dac6',
                },
            },
        },
    },
});
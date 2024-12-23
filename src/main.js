import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import './assets/css/main.css'
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme: {
                dark: true,
                colors: {
                    primary: '#6200ea', // Ajusta el color principal
                    secondary: '#03dac6',
                    background: '#121212',
                    surface: '#121212',
                    error: '#b00020',
                },
            },
        },
    },
}); // Create Vuetify instance
export default vuetify;
const app = createApp(App);
app.use(vuetify); // Register Vuetify globally
app.mount('#app');

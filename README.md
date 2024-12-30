# SkyMate

SkyMate is a modern weather forecasting web application built using **Vue.js**, **PrimeVue**, **Tailwind CSS**, and the **OpenWeatherMap API**. It provides users with detailed and visually appealing weather forecasts for cities around the world.

## Features

- **Real-Time Weather Data**: Displays up-to-date weather forecasts fetched from the OpenWeatherMap API.
- **City Information**: Shows city details such as coordinates, population, and timezone.
- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Interactive UI**: Enhanced user experience with PrimeVue components.
- **Dark Mode Support**: Seamless dark mode integration using Tailwind CSS.

## Technologies Used

- **Vue.js**: JavaScript framework for building the user interface.
- **PrimeVue**: UI component library for Vue.js.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **OpenWeatherMap API**: Provides weather data and forecasts.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MDanielle007/weather-app-skymate.git
   cd weather-app-skymate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file in the root directory and add your OpenWeatherMap API key:

   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.


## Project Structure

```plaintext
src/
├── assets/         # Static assets
├── components/     # Vue components
├── views/          # Application pages
├── App.vue         # Root Vue component
├── main.js         # Entry point
├── styles/         # Tailwind CSS custom styles
└── .env            # API key configuration
```

## Tailwind CSS Dark Mode Configuration

SkyMate supports dark mode using Tailwind CSS. To enable dark mode:

1. Add the `dark` class to the `html` element.
2. Tailwind CSS configuration (`tailwind.config.js`):
   ```javascript
   module.exports = {
     content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: ['selector', '[class="p-dark"]'],
     plugins: [require('tailwindcss-primeui')],
   }
   ```

## Deployment

1. Build the application for production:

   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist/` folder to your preferred hosting service (e.g., Vercel, Netlify).

## API Integration

SkyMate uses the OpenWeatherMap API to fetch weather data. You need an API key to access the service. Sign up for free at [OpenWeatherMap](https://openweathermap.org/) and obtain your API key.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Screenshots

Add screenshots of the application here to showcase its features.

---

### Acknowledgments

- **Vue.js** for its intuitive and powerful framework.
- **PrimeVue** for the elegant UI components.
- **Tailwind CSS** for the flexible styling.
- **OpenWeatherMap** for providing weather data.

For any queries or issues, feel free to raise an issue in the repository or contact the maintainers.

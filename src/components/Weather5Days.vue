<template>
	<div class="p-6 bg-gray-100 min-h-screen">
		<!-- City Header -->
		<header class="mb-6">
			<h1 class="text-2xl font-bold text-gray-800">Weather Forecast for {{ city?.name }}</h1>
			<p class="text-gray-600">
				Coordinates: ({{ city?.coord?.lat }}, {{ city?.coord?.lon }})
			</p>
			<p class="text-gray-600">Population: {{ city?.population || 'N/A' }}</p>
			<p class="text-gray-600">Timezone: GMT{{ timezoneOffset }}</p>
		</header>

		<!-- Forecast List -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<div
				v-for="forecast in list"
				:key="forecast.dt"
				class="bg-white shadow rounded-lg p-4 flex flex-col items-center"
			>
				<h2 class="text-lg font-semibold">{{ formatDate(forecast.dt_txt) }}</h2>
				<img
					:src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"
					:alt="forecast.weather[0]?.description || 'weather icon'"
					class="w-16 h-16"
				/>
				<p class="text-gray-600 capitalize">
					{{ forecast.weather[0]?.description || 'N/A' }}
				</p>
				<p class="text-gray-800 text-lg font-bold">
					{{ forecast.main?.temp?.toFixed(1) || 'N/A' }}°C
				</p>
				<p class="text-sm text-gray-500">
					Feels like: {{ forecast.main?.feels_like?.toFixed(1) || 'N/A' }}°C
				</p>
				<p class="text-sm text-gray-500">
					Humidity: {{ forecast.main?.humidity || 'N/A' }}%
				</p>
				<p class="text-sm text-gray-500">Wind: {{ forecast.wind?.speed || 'N/A' }} m/s</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WeatherForecast',
	data() {
		return {
			weatherData: {
				// Simulated initial weather data for development
				cod: '200',
				message: 0,
				cnt: 40,
				list: [
					{
						dt: 1661871600,
						main: {
							temp: 296.76,
							feels_like: 296.98,
							temp_min: 296.76,
							temp_max: 297.87,
							pressure: 1015,
							sea_level: 1015,
							grnd_level: 933,
							humidity: 69,
							temp_kf: -1.11,
						},
						weather: [
							{
								id: 500,
								main: 'Rain',
								description: 'light rain',
								icon: '10d',
							},
						],
						clouds: {
							all: 100,
						},
						wind: {
							speed: 0.62,
							deg: 349,
							gust: 1.18,
						},
						visibility: 10000,
						pop: 0.32,
						rain: {
							'3h': 0.26,
						},
						sys: {
							pod: 'd',
						},
						dt_txt: '2022-08-30 15:00:00',
					},
					{
						dt: 1661882400,
						main: {
							temp: 295.45,
							feels_like: 295.59,
							temp_min: 292.84,
							temp_max: 295.45,
							pressure: 1015,
							sea_level: 1015,
							grnd_level: 931,
							humidity: 71,
							temp_kf: 2.61,
						},
						weather: [
							{
								id: 500,
								main: 'Rain',
								description: 'light rain',
								icon: '10n',
							},
						],
						clouds: {
							all: 96,
						},
						wind: {
							speed: 1.97,
							deg: 157,
							gust: 3.39,
						},
						visibility: 10000,
						pop: 0.33,
						rain: {
							'3h': 0.57,
						},
						sys: {
							pod: 'n',
						},
						dt_txt: '2022-08-30 18:00:00',
					},
					{
						dt: 1661893200,
						main: {
							temp: 292.46,
							feels_like: 292.54,
							temp_min: 290.31,
							temp_max: 292.46,
							pressure: 1015,
							sea_level: 1015,
							grnd_level: 931,
							humidity: 80,
							temp_kf: 2.15,
						},
						weather: [
							{
								id: 500,
								main: 'Rain',
								description: 'light rain',
								icon: '10n',
							},
						],
						clouds: {
							all: 68,
						},
						wind: {
							speed: 2.66,
							deg: 210,
							gust: 3.58,
						},
						visibility: 10000,
						pop: 0.7,
						rain: {
							'3h': 0.49,
						},
						sys: {
							pod: 'n',
						},
						dt_txt: '2022-08-30 21:00:00',
					},
					{
						dt: 1662292800,
						main: {
							temp: 294.93,
							feels_like: 294.83,
							temp_min: 294.93,
							temp_max: 294.93,
							pressure: 1018,
							sea_level: 1018,
							grnd_level: 935,
							humidity: 64,
							temp_kf: 0,
						},
						weather: [
							{
								id: 804,
								main: 'Clouds',
								description: 'overcast clouds',
								icon: '04d',
							},
						],
						clouds: {
							all: 88,
						},
						wind: {
							speed: 1.14,
							deg: 17,
							gust: 1.57,
						},
						visibility: 10000,
						pop: 0,
						sys: {
							pod: 'd',
						},
						dt_txt: '2022-09-04 12:00:00',
					},
				],
				city: {
					id: 3163858,
					name: 'Zocca',
					coord: {
						lat: 44.34,
						lon: 10.99,
					},
					country: 'IT',
					population: 4593,
					timezone: 7200,
					sunrise: 1661834187,
					sunset: 1661882248,
				},
			},
		}
	},
	computed: {
		city() {
			return this.weatherData.city || {}
		},
		list() {
			return this.weatherData.list || []
		},
		timezoneOffset() {
			const offsetHours = (this.city.timezone || 0) / 3600
			return offsetHours >= 0 ? `+${offsetHours}` : offsetHours
		},
	},
	methods: {
		formatDate(dateString) {
			const formatter = new Intl.DateTimeFormat('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			})
			return formatter.format(new Date(dateString))
		},
	},
}
</script>

<style scoped>
body {
	font-family: 'Arial', sans-serif;
}
</style>

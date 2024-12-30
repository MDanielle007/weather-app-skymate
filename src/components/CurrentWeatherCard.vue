<template>
	<div
		class="bg-gradient-to-bl from-sky-50 to-sky-200 dark:bg-gradient-to-bl dark:from-sky-900 dark:to-slate-900 p-6 rounded-lg shadow-lg max-w-md"
	>
		<header class="flex gap-2 justify-center text-center mb-4">
			<div class="w-full">
				<div
					v-if="
						weatherData?.name &&
						weatherData?.sys?.country &&
						weatherData?.coord?.lat &&
						weatherData?.coord?.lon
					"
					class="flex flex-col items-center justify-center text-center"
				>
					<h1 class="text-2xl font-bold">
						Weather in {{ weatherData.name }}, {{ weatherData.sys.country }}
					</h1>
					<p class="text-gray-600 dark:text-gray-400 flex text-center">
						Coordinates: (Lat: {{ weatherData.coord.lat }}, Lon:
						{{ weatherData.coord.lon }})
					</p>
				</div>

				<div v-else class="flex flex-col gap-1">
					<Skeleton height="1.8rem"></Skeleton>
					<Skeleton> </Skeleton>
				</div>

				<div></div>
			</div>
		</header>

		<div class="mb-2">
			<div class="font-bold text-md">Current Weather</div>
			<div class="text-xs text-gray-600 dark:text-gray-400">
				{{ timeNow }}
			</div>
		</div>
		<Card class="mb-2">
			<template #content>
				<div class="flex justify-center gap-1">
					<div>
						<div
							v-if="
								weatherData?.weather[0]?.icon &&
								weatherData?.weather[0]?.description &&
								displayTemp
							"
							class="flex gap-2 items-center"
						>
							<img
								:src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`"
								:alt="weatherData.weather[0].description"
								class="w-28 h-28 drop-shadow-lg"
							/>
							<div class="text-5xl">
								{{ displayTemp }}<sup>{{ selectedUnit.code }}</sup>
							</div>
						</div>

						<div v-else class="flex gap-2 items-center w-52">
							<Skeleton height="6.5rem"></Skeleton>
							<Skeleton height="6.5rem"></Skeleton>
						</div>
					</div>
					<Divider layout="vertical" />
					<div>
						<div
							v-if="
								weatherData?.weather[0]?.main &&
								weatherData?.weather[0]?.description &&
								displayTempFeelLike
							"
							class="flex flex-col gap-1 justify-center align-middle"
						>
							<div class="text-2xl font-bold">{{ weatherData.weather[0].main }}</div>
							<div class="text-gray-600 dark:text-gray-200 capitalize font-semibold">
								{{ weatherData.weather[0].description }}
							</div>
							<div class="text-gray-800 dark:text-gray-400">
								Feels like {{ displayTempFeelLike }}{{ selectedUnit.code }}
							</div>
						</div>
						<div v-else class="flex flex-col gap-1 justify-center w-24 p-1">
							<Skeleton height="2rem"></Skeleton>
							<Skeleton height="0.9rem"></Skeleton>
							<Skeleton height="0.9rem"></Skeleton>
						</div>
					</div>
				</div>
			</template>
		</Card>

		<Fieldset legend="Details">
			<div class="grid grid-cols-3 gap-3">
				<div class="cols-span-1 flex flex-col">
					<small class="text-xs text-gray-600 dark:text-gray-400"> Humidity </small>
					<div v-if="weatherData.main.humidity" class="text-lg font-semibold">
						{{ weatherData.main.humidity }}%
					</div>
					<Skeleton v-else height="1.5rem" width="5rem"></Skeleton>
				</div>
				<div class="cols-span-1 flex flex-col">
					<small class="text-xs text-gray-600 dark:text-gray-400"> Pressure </small>
					<div v-if="weatherData.main.pressure" class="text-lg font-semibold">
						{{ weatherData.main.pressure }} hPa
					</div>
					<Skeleton v-else height="1.5rem" width="5rem"></Skeleton>
				</div>
				<div class="cols-span-1 flex flex-col">
					<small class="text-xs text-gray-600 dark:text-gray-400"> Wind Speed </small>
					<div v-if="weatherData.wind.speed" class="text-lg font-semibold">
						{{ weatherData.wind.speed }} m/s
					</div>
					<Skeleton v-else height="1.5rem" width="5rem"></Skeleton>
				</div>
				<div class="cols-span-1 flex flex-col">
					<small class="text-xs text-gray-600 dark:text-gray-400"> Visibility </small>
					<div v-if="weatherData.visibility" class="text-lg font-semibold">
						{{ weatherData.visibility / 1000 }} km
					</div>
					<Skeleton v-else height="1.5rem" width="5rem"></Skeleton>
				</div>
				<div class="cols-span-1 flex flex-col">
					<small class="text-xs text-gray-600 dark:text-gray-400">
						Rain (Last Hour):
					</small>
					<div v-if="weatherData.visibility" class="text-lg font-semibold">
						{{ weatherData.rain?.['1h'] || 0 }} mm
					</div>
					<Skeleton v-else height="1.5rem" width="5rem"></Skeleton>
				</div>
				<div class="cols-span-1 flex flex-col">
					<small class="text-xs text-gray-600 dark:text-gray-400"> Cloudiness </small>
					<div v-if="weatherData.clouds.all" class="text-lg font-semibold">
						{{ weatherData.clouds.all }}%
					</div>
					<Skeleton v-else height="1.5rem" width="5rem"></Skeleton>
				</div>
			</div>
		</Fieldset>

		<footer class="footer mt-4 text-gray-600 dark:text-gray-400 text-sm">
			<p>Data provided by <b class="dark:text-white">OpenWeatherMap</b></p>
			<p>Sunrise: <span v-if="weatherData?.sys?.sunrise">{{ formatTime(weatherData.sys.sunrise) }}</span></p>
			<p>Sunset: <span v-if="weatherData?.sys?.sunset">{{ formatTime(weatherData.sys.sunset) }}</span></p>
		</footer>
	</div>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import Weather5Days from '@/components/Weather5Days.vue'

export default {
	components: {
		ThemeSwitcher,
		Weather5Days,
	},
	props:{
		data: {
			type: Object,
            required: true,
		},
		mainTemp: {
			type: Number,
            required: true,
		},
		feelsLike:{
			type: Number,
            required: true,
		},
		unit:{
			type: Object,
            required: true,
		}
	},
	data() {
		return {
			displayTemp: null,
			displayTempFeelLike: null,
			selectedUnit: {
				code: '°C',
                label: '°Celsius',
			},
			weatherData: this.data || {
				coord: {
					lon: null,
					lat: null,
				},
				weather: [
					{
						id: null,
						main: null,
						description: null,
						icon: null,
					},
				],
				base: null,
				main: {
					temp: null,
					feels_like: null,
					temp_min: null,
					temp_max: null,
					pressure: null,
					humidity: null,
					sea_level: 1011,
					grnd_level: null,
				},
				visibility: null,
				wind: {
					speed: null,
					deg: null,
					gust: null,
				},
				clouds: {
					all: null,
				},
				dt: null,
				sys: {
					type: null,
					id: null,
					country: null,
					sunrise: null,
					sunset: null,
				},
				timezone: null,
				id: null,
				name: null,
				cod: null,
			},
		}
	},
	methods: {
		formatTime(timestamp) {
			const date = new Date(timestamp * 1000)
			const formatter = new Intl.DateTimeFormat('en-US', {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: true, // Set to false for 24-hour format
			})
			return formatter.format(date)
		},
	},
	computed: {
		timeNow() {
			const date = Date.now()
			const formatter = new Intl.DateTimeFormat('en-US', {
				timeZone: 'Asia/Manila',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: true, // Set to false for 24-hour format
			})
			return formatter.format(date)
		},
	},
	watch:{
		data:{
			handler(newData) {
                this.weatherData = newData
            },
            deep: true,
		},
		mainTemp:{
			handler(newData) {
                this.displayTemp = newData
            },
            deep: true,
		},
		feelsLike:{
			handler(newData) {
                this.displayTempFeelLike = newData
            },
            deep: true,
		},
		unit:{
			handler(newData) {

                this.selectedUnit = newData
            },
            deep: true,
		},
	}
}
</script>

<style scoped>
/* No custom CSS required, Tailwind classes are used */
</style>

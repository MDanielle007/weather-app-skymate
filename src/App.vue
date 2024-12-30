<template>
	<div class="bg-slate-200 dark:bg-zinc-900 h-screen">
		<div class="flex gap-2 justify-between items-end bg-white dark:bg-sky-950 p-2 shadow-lg">
			<div class="text-4xl font-bold text-slate-800 dark:text-white flex gap-1">
				<img src="/icons/favicon-96x96.png" alt="" class="w-10">
				SkyMate
			</div>
			<div class="flex gap-1 items-center">
				<ThemeSwitcher />
				<Select
					v-model="selectedUnit"
					:options="unitOptions"
					optionLabel="code"
					placeholder="Select a Unit"
					:pt="{
						label: {
							style: 'padding: 0; width: 2rem; height:2rem; text-align: center',
						},
						dropdown: {
							style: 'display:none',
						},
					}"
				>
					<template #value="slotProps">
						<span class="font-bold text-xl">{{ slotProps.value.code }}</span>
					</template>
					<template #option="slotProps">
						<div class="flex items-center">
							<div>
								<span class="font-bold">{{ slotProps.option.code }}</span>
								{{ slotProps.option.name }}
							</div>
						</div>
					</template>
				</Select>
			</div>
		</div>
		<main class="p-2">
			<CurrentWeatherCard
				:data="currentWeatherData"
				:mainTemp="displayTemp"
				:feelsLike="displayTempFeelLike"
				:unit="selectedUnit"
			/>
		</main>
	</div>
</template>
<script>
import { getCurrentLocation } from '@/utils/mapUtils.'
import { WeatherService } from '@/services/WeatherService.js'
import CurrentWeatherCard from './components/CurrentWeatherCard.vue'
export default {
	components: {
		CurrentWeatherCard,
	},
	data() {
		return {
			currentWeatherData: {
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
			displayTemp: 0,
			displayTempFeelLike: 0,
			selectedUnit: {
				name: 'Celsius',
				code: '°C',
			},
			unitOptions: [
				{
					name: 'Celsius',
					code: '°C',
				},
				{
					name: 'Fahrenheit',
					code: '°F',
				},
				{
					name: 'Kelvin',
					code: 'K',
				},
			],
		}
	},
	mounted() {
		this.fetchCurrentWeather()
	},
	methods: {
		async fetchCurrentWeather() {
			try {
				const coordinates = await getCurrentLocation()
				const response = await WeatherService.getcurrentWeather(coordinates)
				this.currentWeatherData = response.data

				console.log(this.currentWeatherData)

				this.displayTemp = this.convertTemperature(
					this.currentWeatherData.main.temp,
					this.selectedUnit.name,
					'Kelvin',
				)
				this.displayTempFeelLike = this.convertTemperature(
					this.currentWeatherData.main.feels_like,
					this.selectedUnit.name,
					'Kelvin',
				)
			} catch (error) {
				console.error('Error fetching weather data:', error)
			}
		},
		convertTemperature(val, newUnit, oldUnit) {
			if (oldUnit === newUnit) return val

			const conversions = {
				Kelvin: {
					Celsius: (k) => k - 273.15,
					Fahrenheit: (k) => (k - 273.15) * 1.8 + 32,
				},
				Fahrenheit: {
					Celsius: (f) => ((f - 32) * 5) / 9,
					Kelvin: (f) => ((f - 32) * 5) / 9 + 273.15,
				},
				Celsius: {
					Kelvin: (c) => c + 273.15,
					Fahrenheit: (c) => c * 1.8 + 32,
				},
			}

			if (!conversions[oldUnit]?.[newUnit]) {
				throw new Error('Invalid temperature units')
			}

			return Math.round(conversions[oldUnit][newUnit](val))
		},
	},
	watch: {
		selectedUnit(newVal, oldVal) {
			this.displayTemp = this.convertTemperature(this.displayTemp, newVal.name, oldVal.name)
			this.displayTempFeelLike = this.convertTemperature(
				this.displayTempFeelLike,
				newVal.name,
				oldVal.name,
			)
		},
	},
}
</script>
<style></style>

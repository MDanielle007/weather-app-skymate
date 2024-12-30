export function getCurrentLocation() {
	return new Promise((resolve, reject) => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					resolve({ latitude, longitude });
				},
				(error) => {
					reject(new Error(`Error getting location: ${error.message}`));
				}
			);
		} else {
			reject(new Error("Geolocation is not supported by your browser."));
		}
	});
}


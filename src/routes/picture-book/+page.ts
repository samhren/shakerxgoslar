import photosJson from '$lib/photos.json';

export async function load({ params }) {
	return {
		photos: getPhotos()
	};
}

type Photo = {
	url: string;
	date: string;
	year?: number; // Add the 'year' property to the type definition
	expanded: boolean;
};

const getPhotos = () => {
	const photos: Photo[] = photosJson.map((photo) => ({
		...photo,
		expanded: false
	}));

	// Add year to each photo
	for (const photo of photos) {
		const date = new Date(photo.date);
		photo.year = date.getFullYear();
	}

	// randomize the order of the photos
	photos.sort(() => Math.random() - 0.5);

	// Grab first 5
	// photos.splice(5);

	return photos;
};

import { error } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '$lib/firebase';
import photos from '$lib/photos.json';

export async function load({ params }) {
	const yearsRef = doc(firestore, 'years', params.slug);
	const yearsDoc = await getDoc(yearsRef);

	if (yearsDoc.exists()) {
		// Grab video
		const url = await grabVideo(params.slug);
		// everything after v=
		const id = url.split('v=')[1];

		const photosByYear = getPhotosByYear(parseInt(params.slug));

		return {
			year: params.slug,
			video: {
				url: url,
				id: id
			},
			photos: photosByYear
		};
	} else {
		error(404, 'Not found');
	}
}

const grabVideo = async (year: string) => {
	const videoRef = doc(firestore, 'videos', year);
	const videoDoc = await getDoc(videoRef);

	if (videoDoc.exists()) {
		return videoDoc.data().url;
	} else {
		return null;
	}
};

const getPhotosByYear = (year: number) => {
	let photosByYear = [];
	for (const photo of photos) {
		const date = new Date(photo.date);
		if (date.getFullYear() === year) {
			photosByYear.push(photo);
		}
	}
	return photosByYear;
};

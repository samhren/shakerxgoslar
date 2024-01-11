import { error } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '$lib/firebase';

export async function load({ params }) {
	const yearsRef = doc(firestore, 'years', params.slug);
	const yearsDoc = await getDoc(yearsRef);

	if (yearsDoc.exists()) {
		// Grab video
		const url = await grabVideo(params.slug);
		// everything after v=
		const id = url.split('v=')[1];

		return {
			year: params.slug,
			video: {
				url: url,
				id: id
			}
		};
	} else {
		error(404, 'Not found');
	}

	error(404, 'Not found');
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

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyA_azhuW1G-TzF1KMgL9yD3GFJVnvfMmzA',
	authDomain: 'shakerxgoslar11.firebaseapp.com',
	projectId: 'shakerxgoslar11',
	storageBucket: 'shakerxgoslar11.appspot.com',
	messagingSenderId: '213636182001',
	appId: '1:213636182001:web:8df78105ba9343e6e85e50',
	measurementId: 'G-9VE93DD8MX'
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

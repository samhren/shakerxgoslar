<script lang="ts">
	import { FirebaseApp } from 'sveltefire';
	import { firestore, auth } from '$lib/firebase';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	import { Svrollbar } from 'svrollbar';
</script>

<Svrollbar alwaysVisible={true} />
<FirebaseApp {auth} {firestore}>
	<Header />

	<slot />
</FirebaseApp>

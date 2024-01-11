<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';

	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

	const getPhotoUrl = (user: any) => {
		if (user) {
			const photoURL = user.toJSON().photoURL;
			if (photoURL) {
				return photoURL;
			}
		}
		return '';
	};
</script>

<SignedIn let:user let:signOut>
	<p>Currently signed in as {user.displayName}</p>
	<img src={getPhotoUrl(user)} alt="" />
	<button on:click={signOut}>Sign Out</button>
</SignedIn>

<SignedOut let:auth>
	<button on:click={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
</SignedOut>

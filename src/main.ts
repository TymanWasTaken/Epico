import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		api: 'https://localhost:8081'
	}
});

export default app;
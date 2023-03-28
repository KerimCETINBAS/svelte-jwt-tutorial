// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				sub: string,
				email: string
			};
			users: { data: { password: string, email: string}[], register: (value: {password: string, email: string}) => void}
		}
		interface PageData {
			user: string
		}
		// interface Platform {}
	}
}

export {};

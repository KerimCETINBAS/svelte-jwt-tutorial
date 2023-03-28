import { writable, type Writable } from "svelte/store"

export const session: Writable<{ user?: string}> = writable({ user: undefined })
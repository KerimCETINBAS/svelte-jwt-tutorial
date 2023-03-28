import { JwtSecret } from "$lib/server/constants";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { sign } from "jsonwebtoken"
import PouchDb from "pouchdb"
import { compute_slots } from "svelte/internal";


const db = new PouchDb("users")

export const actions: Actions = {

    async login({ request, cookies, locals}) {

        const body = Object.fromEntries(await request.formData())

        const isValidUser: { email: string} = await db.allDocs({ include_docs: true}).then<{email: string}>((docs : any)=> {
            return docs.rows.find( (row: any) => row?.doc?.email == body.email && row?.doc?.password == body.password)?.doc
        })
        if(isValidUser) {

            const token = sign({
                sub: isValidUser.email,
                email: isValidUser.email
            }, JwtSecret)

            cookies.set("session", token, { httpOnly: true, path: "/"})

            throw redirect(302, "/")
        }


       return fail(402)
    }
}
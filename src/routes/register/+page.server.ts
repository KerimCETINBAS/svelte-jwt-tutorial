import { redirect, type Actions, type ServerLoad } from "@sveltejs/kit";
import PouchDb from "pouchdb"

const db = new PouchDb("users")
export const load: ServerLoad = ({locals}) => {


   if(locals.user) throw redirect(302, "/")
}


export const actions: Actions = {
    async default({request}) {

        const body = Object.fromEntries(await request.formData())

        await db.put({
            _id: new Date().toISOString(),
            ...body
        })
    }
}
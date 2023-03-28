import { redirect } from "@sveltejs/kit";
import type { Handle  } from "@sveltejs/kit";
import { verify} from "jsonwebtoken"
import { JwtSecret} from "$lib/server/constants";

export const handle: Handle = async ({event, resolve}) => {

    const session = event.cookies.get("session")

    if(session) {

       const payload = verify(session, JwtSecret)
       event.locals.user = payload as { sub: string, email: string}
    } 

    return await resolve(event)
}
import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({cookies}) => {

    cookies.delete("session", { path: "/"})

    return new Response(null, { headers: { location: "/login"}, status: 302})
}
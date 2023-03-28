import { redirect, type Actions } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad= ({locals, url}) => {


    console.log(locals)

    if(!locals?.user && url.pathname == "/" ) {

        throw redirect(302, "/login")
    }
    
    
  
    return {
        user: locals?.user
    }
    

   

}



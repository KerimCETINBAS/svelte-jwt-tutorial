import type { LayoutLoad} from "./$types";
import { session  } from "$lib/stores/session";

export const load: LayoutLoad = ({ data }) => {
    
    const { user } =  data

    session.set({ user: user?.email || undefined })

    
}   
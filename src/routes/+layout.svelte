
<script>
    import {session} from "$lib/stores/session"
</script>

{#if $session?.user}
<h1>Hos geldin {$session?.user}</h1>

<a href="/">anasayfa</a>

<a href="/logout">logout</a>
{:else}

<a href="/">anasayfa</a>

<a href="/login">login</a>

<a href="/register">register</a>

<h1> anasayfayi gormek icin login olunuz</h1>
{/if}


<slot />
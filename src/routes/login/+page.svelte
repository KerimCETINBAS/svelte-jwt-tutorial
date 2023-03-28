<script>
    import { enhance } from "$app/forms";
</script>
<h1>Login</h1>


<form method="post" action="?/login" use:enhance>
    <input name="email" type="text">
    <input name="password" type="password">
    <input type="submit" value="giris yap">
</form>
<script lang="ts">
    // Import svelte onMount
    import { onMount } from "svelte";
    // Declare api url variable
    export let api: string;
    // Declare elements and values as variables
    let form: HTMLFormElement;
    let username: string;
    let password: string;
    // Declare variables for empty submits
    let submittedEmpty = false;
    // Register submit listener on form
    onMount(() => {
        form.addEventListener('submit', async (e: SubmitEvent) => {
            // Prevent default form submit
            e.preventDefault();
            // Check for empty
            if (!username || !password) {
                submittedEmpty = true
                return
            } else submittedEmpty = false
            // Fetch login route from api url
            const res: EpicoApi.LoginResponse = await fetch(`${api}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }).then(req => req.json());
            // Handle login error
            if (res.success === false) {
                alert(res.message);
                return
            }
            // Set token in storage
            window.sessionStorage.setItem('token', res.token);
        })
    })
</script>

<main>
    <h1>Welcome back!</h1>
    <form bind:this={form}>
        <label for="username">Username<span>*</span></label>
        <input type="text" id="username" name="username" placeholder="Username" bind:value={username} />
        <label for="password">Password<span>*</span></label>
        <input type="password" id="password" name="password" placeholder="Password" bind:value={password} />
        <br>
        <input type="submit" value="Login" />
        {#if submittedEmpty} 
            <br>
            <p1 class="missing">Both username and password are required!</p1>
        {/if}
    </form>
</main>

<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: grey;
        padding: 50px;
        border-radius: 5%;

        > h1 {
            margin-right: 20px;
        }
        > form {
            > label {
                font-size: large;
                margin-bottom: 5px;
                > span {
                    color: red;
                }
            }
            > p1.missing {
                color: red;
            }
            > input {
                border-radius: 10px;
            }
        }
    }
</style>
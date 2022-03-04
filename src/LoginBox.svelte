<script lang="ts">
    // Import svelte onMount
    import { onMount } from "svelte";
    // Declare api url variable
    export let api: string;
    // Declare elements and values as variables
    let form: HTMLFormElement;
    let username: string;
    let password: string;
    // Declare variable for if statement in html
    let isUsernameEmpty = false;
    // Register submit listener on form
    onMount(() => {
        form.addEventListener('submit', async (e: SubmitEvent) => {
            // Prevent default form submit
            e.preventDefault();
            // Fetch login route from api url
            const req = await fetch(`${api}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
        })
    })
    // Declare email onchange event
    const onUsernameChange = () => isUsernameEmpty = username.length < 1;
</script>

<main>
    <h1>Welcome back!</h1>
    <form bind:this={form}>
        {#if isUsernameEmpty} <p class="error">Username is required</p> {/if}
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Username" bind:value={username} on:input={onUsernameChange}/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" bind:value={password} />
        <br>
        <input type="submit" value="Login" />
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
            > p.error {
                color: red;
            }
            > label {
                font-size: large;
                margin-bottom: 5px;
            }
            > input {
                border-radius: 10px;
            }
        }
    }
</style>
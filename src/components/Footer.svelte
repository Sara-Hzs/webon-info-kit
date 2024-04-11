<script>
    let email = '';

    const subscribe = () => {
        console.log(`Subscribing ${email}`);
    };
</script>

<style>
    .content{
        background-color: #000;
        color: #fff;

    }
    .container {
        background: #2d2c2c;
        max-width: 1200px;
        margin: auto;
        padding: 1rem;

    }

    .header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        padding: 1rem 2rem;
        color: #fff;
    }

    .newsletter {
        padding: 1rem;
        max-width: 340px;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 1 340px;

    }
    .input-group {
        display: flex;
        width: 100%;
    }

    .newsletter label {
        display: block;
        color: #fff;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    .newsletter input[type="email"] {

        margin-right: 0.5em;
        flex-grow: 1;
        background: #4f4e4e;
        border: 1px solid #262626;
        color: #fdfdfd;
        width: calc(100% - 4rem);
        margin-bottom: 0.5rem;
    }
    .newsletter button {
        background: #fdfdfd;
        border: none;
        color: #000000;
        cursor: pointer;
        white-space: nowrap;
        flex: none;
    }

    .newsletter button:hover {
        background: #1e1f22;
        color: #fdfdfd;
    }
    .newsletter p {
        color: #aaa;
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
    .logo {
        display: flex;
        align-items: flex-start;
        margin-left: auto;
        padding-right: 2rem;
        margin-bottom: auto;
        color: #fff;
    }

    .logo img {
        height: 30px;
        margin-right: 10px;

    }

    .logo span {
        font-size: 0.8em;
        color: #aaa;

    }
    .bottom{
        display: flex;
        justify-content: space-between;
        padding: 0 4em;
        font-size: 0.8em;
        flex-wrap: wrap;
    }

    .bottom a {
        color: #aaa;
        text-decoration: none;
    }

    .bottom a:hover {
        text-decoration: underline;
    }
    @media (max-width: 480px) {


        .header {
            flex-direction: column;
            align-items: center;
            padding: 0.5rem;
        }

        .logo, .newsletter, .bottom {
            width: 100%;
            padding: 0.5rem 0;
            order: 0;
        }

        .logo {
            order: 1;
            padding-bottom: 2.5rem;
            padding-top: 3rem;
        }

        .newsletter {
            order: 2;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .bottom {
            order: 3;
            padding-top: 0;
            padding-bottom: 0.5rem;
            flex-direction: column;
            align-items: center;
        }

        .bottom a {
            margin: 0.25rem 0;
        }

        .bottom span {
            margin-bottom: 0.5rem;
        }
    }
</style>
<div class="content">
    <div class="container">
        <div class="header">
            <div class="newsletter">
                <label for="email" class="visually-hidden">Subscribe to our newsletter</label>
                <div class="input-group">
                    <input type="email" bind:value={email} placeholder="Enter your email" id="email" />
                    <button on:click={subscribe}>Sign up</button>
                </div>
                <p>You can unsubscribe at any time.</p>
            </div>
            <div class="logo">
                <img src="Assets/logo.svg" alt="WebOn Tech logo">
                <span>WebOn Tech.</span>
            </div>
        </div>
        <div class="bottom">
            <span>© All rights reserved.</span>

        </div>
    </div>
</div>

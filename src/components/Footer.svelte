<script>
    let email = '';
    let message = '';
    let submitting = false;

    const subscribe = async () => {
        if (email.trim() === '') {
            message = 'Please enter a valid email.';
            return;
        }

        try {
            submitting = true;

            await new Promise((resolve) => setTimeout(resolve, 1000));


            message = 'Thank you for subscribing!';
            email = '';
        } catch (error) {

            message = 'Subscription failed. Please try again.';
        } finally {
            submitting = false;
        }
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

    .logo {
        margin-left: auto;
        padding-right: 2rem;
        color: #fff;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        padding: 0 4em;
        font-size: 0.8em;
        flex-wrap: wrap;
        align-items: center;
        order: -1;
    }


    @media (max-width: 480px) {

        .header {
            flex-direction: column;
            align-items: center;
            padding: 0.5rem;
        }

        .logo {
            width: 100%;
            padding: 0.5rem 0;
        }

        .logo {
            order: 1;
            padding-bottom: 2.5rem;
            padding-top: 3rem;
        }



        .bottom span {
            margin-bottom: 0.5rem;
        }
    }
</style>
<div class="content">
    <div class="container">
        <div class="header">
            <span>© All rights reserved.</span>
            <div class="logo">
                <img src="logo.svg" alt="WebOn Tech logo">
                <span>WebOn Tech.</span>
            </div>
        </div>

    </div>
</div>

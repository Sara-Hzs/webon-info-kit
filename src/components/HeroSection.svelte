<script>
    import { onMount } from 'svelte';

    let dropdownMenuVisible = false;

    onMount(() => {
        const handleClick = (event) => {
            // Check if the click is outside the dropdown
            if (!event.target.closest('.dropdown')) {
                dropdownMenuVisible = false;
            }
        };

        // Add event listener to the window for clicks
        window.addEventListener('click', handleClick);

        // Cleanup the event listener on component destruction
        return () => {
            window.removeEventListener('click', handleClick);
        };
    });

    // Function to toggle the dropdown menu visibility
    const toggleDropdownMenu = (event) => {
        event.stopPropagation(); // Prevent the click from reaching the window listener
        dropdownMenuVisible = !dropdownMenuVisible;
    };
</script>


<div class="hero-section">

    <div class="logo-container">
        <img src="puzzle_pieces_closed.svg" alt="WebOn Technology Logo" class="logo-img"/>
        <img src="puzzle_pieces_open.svg" alt="WebOn Technology Logo" class="logo-img logo-hover"/>
    </div>
    <h1>WebOn Technology</h1>

    <h2>Enhance, Engage, and Elevate Your Website with DeFi Integration</h2>
    <p>Welcome to the intuitive world of WebOn Technology – the ultimate enhancement tool for your website, now offering
        deeper integration with the Decentralized Finance (DeFi) ecosystem.</p>
    <div class="hero-btns">
        <!-- <div class="dropdown">
             <button class="button dropdown-toggle">
                 Download WebOns <span class="flash-icon">&#x25BC;</span>
             </button>
             <!-iv class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">App number 1</a>
        <a class="dropdown-item" href="#">App number 2</a>
        <a class="dropdown-item" href="#">App number 3</a>
    </div>

          </div>-->
        <a href="#learn-more" class="button-s">Learn more</a>
    </div>
</div>


<style>

    .hero-section {
        text-align: center;
        background-color: #000;
        color: #fff;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .logo-container {
        position: relative;
        width: 80%;
        max-width: 300px;
        height: auto;
        margin-bottom: 7em;

    }

    .logo-img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: opacity 0.5s ease;
        width: 100%;

    }


    .logo-hover {
        opacity: 0;
    }


    .logo-container:hover .logo-hover {
        opacity: 1;
    }


    .logo-container:hover .logo-img:not(.logo-hover) {
        opacity: 0;
    }

    .hero-btns {
        display: flex;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .hero-section h1 {
        font-size: calc(1rem + 2vw);
        margin-top: 3em;
        margin-bottom: 0;

    }

    .hero-section h2 {
        max-width: 900px;
        font-size: calc(1rem + 1vw);
        margin: 1rem;

    }

    .hero-section p {
        max-width: 1200px;
        font-size: calc(0.8rem + 0.5vw);
        margin:2rem;
    }


    .button-s{
        padding: 10px 20px;
        margin: 5px;
        border: 1px solid #7e7c7c;
        border-radius: 5px;
        background-color: #000000;
        color: #fdfdfd;
        cursor: pointer;
        text-decoration: none;
    }
    .button-s:hover {
        background: #1e1f22;
        color: #fdfdfd;
    }


</style>


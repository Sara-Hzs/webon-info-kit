<script>

</script>

<style>
    /* Global Styles */
    :global(body) {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
    }
    header, main, .subscription-section, footer {
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
    }

    body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        color: #fff;
        line-height: 1.6;
        background-color: #000;
        margin: 0;
    }

    /* Header and Main Content Styles */
    header, main {
        max-width: 95%;
        margin: 1rem auto;
    }

    header {
        text-align: center;
        padding-bottom: 1rem;
        border-bottom: 1px solid #eaeaea;
    }

    /* Header Navigation */
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    nav a {
        text-decoration: none;
        color: #cdaf6d;
        font-weight: bold;
    }

    /* Main Title and Intro Styles */
    .intro {
        text-align: center;
        padding: 2rem 0;
    }

    .intro h1 {
        font-size: calc(2em + 1vw);
        color: #cdaf6d;
        margin-bottom: 1rem;
    }

    .intro p {
        color: #fff;
        margin-bottom: 2rem;
        font-size: calc(1em + 0.5vw);
    }

    .intro a {
        background: #cdaf6d;
        color: #fff;
        padding: 10px 30px;
        border-radius: 5px;
        transition: background 0.3s ease;
        text-decoration: none;
        font-weight: bold;
    }

    .intro a:hover {
        background: #bba46f;
    }


    .image-gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 1rem;
        margin-top: 1rem;
    }

    .image-gallery img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        max-width: 500px;
        margin: 0 auto;
    }

    .about-section {
        text-align: center;
        padding: 2rem 0;
    }

    .about-section h2 {
        font-size: 1.75rem;
        color: #cdaf6d;
        margin-bottom: 1rem;
    }

    .about-section p {
        color: #fff;
        margin-bottom: 1rem;
        font-size: 1rem;
    }

    .features-list {
        text-align: center;
        margin-top: 2rem;
        padding: 0 1rem;
    }

    .features-list h3 {
        font-size: 1.5rem;
        color: #cdaf6d;
        margin-bottom: 1rem;
    }

    .features-list ul {
        list-style-type: none;
        padding-left: 0;
    }

    .features-list li {
        background: #222;
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 5px;
    }

    .features-list li::before {
        content: '• ';
        color: #cdaf6d;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }


    .examples-section {
        padding: 2rem 0;
        background: #222;
        text-align: center;
    }

    .examples-section h2 {
        font-size: 1.75rem;
        color: #cdaf6d;
        margin-bottom: 1rem;
    }

    .examples-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 1rem;
        padding: 1rem;
    }

    .example-card {
        background-color: #333;
        color: #fff;
        padding: 1rem;
        border-radius: 5px;
    }

    .example-card h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    .example-card p {
        font-size: 1rem;
        line-height: 1.4;
    }

    .explore-button {
        margin-top: 2rem;
        padding: 10px 30px;
        background: #cdaf6d;
        color: #fff;
        text-decoration: none;
        display: inline-block;
        border-radius: 5px;
        transition: background 0.3s ease;
    }

    .explore-button:hover {
        background: #cdaf6d;
    }

    .getting-started {
        padding: 2rem 0;
        text-align: center;
    }

    .getting-started h2 {
        font-size: 2rem;
        color: #cdaf6d;
        margin-bottom: 2rem;
    }

    .steps-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .step {
        background-color: #333;
        color: #fff;
        padding: 1rem;
        border-radius: 5px;
    }

    .step img {
        width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    .step p {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .start-button {
        padding: 10px 30px;
        background: #cdaf6d;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        transition: background 0.3s ease;
    }

    .start-button:hover {
        background: #cdaf6d;
    }
    .subscription-section {
        background-color: #333;
        color: #fff;
        padding: 2rem;
        text-align: center;
    }

    .subscription-section h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .subscription-form {
        display: inline-block;
        margin-top: 1rem;
    }

    .subscription-input {
        padding: 10px;
        border: none;
        border-radius: 5px;
        margin-right: 0.5rem;
    }

    .subscribe-button {
        padding: 10px 20px;
        background: #cdaf6d;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    footer {
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 1rem 0;
        margin-top: 1rem;
    }

    footer p {
        margin: 0;
    }
    /* Responsive adjustments */
    @media (max-width: 768px) {
        nav ul {
            flex-direction: column;
            align-items: center;
        }

        .image-gallery {
            grid-template-columns: repeat(1, 1fr);
        }


        .steps-container {
            grid-template-columns: repeat(1, 1fr);
        }

    }

</style>
<body>
<header>
    <nav>
        <div>Logo</div>
        <ul>
            <li><a href="#about">About WebOns</a></li>
            <li><a href="#how-to">How to use</a></li>
            <li><a href="#download">Download</a></li>
        </ul>
    </nav>
</header>

<main>
    <section class="intro">
        <h1>Main Title</h1>

        <p>A small outline on what this is for and where one can get the WebOns and their main purpose.</p>
        <a href="#features">Discover WebOns</a>
    </section>
    <section class="image-gallery">

        <img src="/nomo.jpg" alt="Description of Image 1">
        <img src="/nomo.jpg" alt="Description of Image 1">
        <img src="/nomo.jpg" alt="Description of Image 1">

    </section>

    <!-- About and Features Section -->
    <section class="about-section">
        <h2>What are WebOns? / About the technology</h2>
        <p>A short description about what WebOns are and why it is helpful for the users and how it works along with NOMO app. Some more insights on the technology.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ligula at sapien luctus, id molestie lectus consequat. Curabitur egestas iaculis lorem, id auctor diam pellentesque in.</p>

        <div class="features-list">
            <h3>WebOns Features / Benefits</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur egestas iaculis lorem, id auctor diam pellentesque in.</li>
                <li>Praesent viverra ligula at sapien luctus, id molestie lectus consequat.</li>
                <li>Praesent viverra ligula at sapien luctus, id molestie lectus consequat.</li>
                <li>Curabitur egestas iaculis lorem, id auctor diam pellentesque in.</li>
            </ul>
        </div>
    </section>

    <!-- Examples Section -->
    <section class="examples-section">
        <h2>[Some examples]</h2>
        <div class="examples-container">
            <div class="example-card">
                <h3>WebOn</h3>
                <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ligula at sapien luctus, id molestie lectus consequat.</p>
            </div>
            <div class="example-card">
                <h3>WebOn</h3>
                <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ligula at sapien luctus, id molestie lectus consequat.</p>
            </div>
            <div class="example-card">
                <h3>WebOn</h3>
                <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ligula at sapien luctus, id molestie lectus consequat.</p>
            </div>
            <div class="example-card">
                <h3>WebOn</h3>
                <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ligula at sapien luctus, id molestie lectus consequat.</p>
            </div>
        </div>
        <a href="#explore" class="explore-button">Explore all WebOns</a>
    </section>
    <!-- Getting Started Section -->
    <section class="getting-started">
        <h2>Getting Started / How to use WebOns</h2>
        <div class="steps-container">
            <!-- Step 1 -->
            <div class="step">
                <img src="/path-to-your-screenshot-1.jpg" alt="Screenshot 1">
                <p>1. Download NOMO app from Play Store or App Store.</p>
            </div>
            <!-- Step 2 -->
            <div class="step">
                <img src="/path-to-your-screenshot-2.jpg" alt="Screenshot 2">
                <p>2. Praesent viverra ligula at sapien luctus, id molestie lectus consequat.</p>
            </div>
            <!-- Step 3 -->
            <div class="step">
                <img src="/path-to-your-screenshot-3.jpg" alt="Screenshot 3">
                <p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <!-- Step 4 -->
            <div class="step">
                <img src="/path-to-your-screenshot-4.jpg" alt="Screenshot 4">
                <p>4. Curabitur egestas iaculis lorem, id auctor diam pellentesque in.</p>
            </div>
        </div>
        <a href="#start-using" class="start-button">Start using WebOns</a>
    </section>
</main>

<!-- Subscription Section -->
<section class="subscription-section">
    <h2>Subscribe to newsletter(?)</h2>
    <form class="subscription-form" action="/subscribe" method="POST">
        <input class="subscription-input" type="email" placeholder="Enter your email" required>
        <button type="submit" class="subscribe-button">Subscribe</button>
    </form>
</section>

<!-- Footer -->
<footer>
    <p>Footer</p>
</footer>
</body>
<script>

</script>

<style>
    .content-container{
        max-width: 1200px;
        background-color: #333;
        width: 80%;
        padding: 2rem;
        border-radius: 8px;
        margin-bottom: 4rem;
    }
    .features-container {
        background-color: #000;
        color: #fff;
        padding: 4rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .section-header {
        margin-bottom: 2rem;
        font-size: calc(1rem + 0.5vw);
    }

    .feature-list {
        margin-bottom: 4rem;
    }

    .feature-item {
        font-size: calc(0.7rem + 0.4vw);
        margin-bottom: 1rem;
        text-align: left;
        display: flex;
        align-items: flex-start;
    }
    .feature-item img {
        margin-right: 1rem;
        margin-top: 1.5rem;
        width: 24px;
        height: 24px;

    }
    .advantages-container {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        gap: 2rem;
        justify-content: center;
    }

    .advantage-item {
        border: 1px solid gray;
        background-color: transparent;
        color: #fff;
        padding: 2rem;
        border-radius: 8px;
        text-align: left;
        font-size: calc(0.7rem + 0.4vw);
    }


    @media (max-width: 768px) {

        .feature-item {
            text-align: left;
            margin-top: 2rem;
            margin-bottom: 3rem;
            width: 100%;
            padding: 0;
        }


        .feature-item > div {
            width: 100%;
        }


        .advantage-item {
            text-align: left;
        }


        .advantages-container {
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="features-container">
    <div class="content-container">
        <h2 class="section-header">The Features of WebOn Technology</h2>
        <ul class="feature-list">
            <li class="feature-item">
                <img src="/Assets/CheckCircle.svg" alt="">
                <div>
                    <h3>Broadening Your Reach with Easy Integration for Wallet Users</h3>
                    <p>If your website is already a part of the innovative wave of DeFi by supporting MetaMask or Wallet
                        Connect, embracing WebOn Technology is a natural and effortless next step. This ease of
                        integration
                        empowers you to extend your reach and provide additional interactive web features, making your
                        site
                        attractive to an even broader audience.</p>
                </div>

            </li>
            <li class="feature-item">
                <img src="/Assets/CheckCircle.svg" alt="">
                <div>
                    <h3>Seamless User Experience and Easy Integration</h3>
                    <p>WebOns integrate directly with your existing website, facilitating a unified experience where
                        users
                        can engage with both traditional features and DeFi applications without leaving your site. This
                        direct integration ensures that your site remains a central hub for user interaction, mirroring
                        the
                        intuitive connections users expect from cutting-edge web platforms.</p>
                </div>

            </li>
            <li class="feature-item">
                <img src="/Assets/CheckCircle.svg" alt="">
                <div>
                    <h3>Interactive Elements for Enhanced User Engagement and Retention</h3>
                    <p>WebOns elevate websites from being mere sources of information to immersive experiences that
                        captivate users. By incorporating WebOn Technology, your platform allows direct participation in
                        the
                        DeFi ecosystem and interaction with advanced features, engaging a diverse audience. This results
                        in
                        a deeper user experience, providing compelling reasons for both crypto enthusiasts and general
                        web
                        users to return and stay engaged.</p>
                </div>

            </li>
            <li class="feature-item">
                <img src="/Assets/CheckCircle.svg" alt="">
                <div>
                    <h3>Tailored to Your Audience with Customization at Your Fingertips</h3>
                    <p>Personalize your website to reflect the unique preferences of your users, including DeFi
                        enthusiasts.
                        WebOns offer unparalleled customization, from integrating smart contract functionalities to
                        showcasing live cryptocurrency rates.</p>
                </div>

            </li>
            <li class="feature-item">
                <img src="/Assets/CheckCircle.svg" alt="">
                <div>
                    <h3>Versatility and User-Friendliness: Beyond EVM Chains</h3>
                    <p>WebOn Technology is not limited to traditional EVM chains, extending support to a variety of
                        blockchain architectures, including UTXO-based chains. This comprehensive compatibility
                        showcases our commitment to providing a broad DeFi experience. Coupled with this extensive
                        support is our platform's renowned user-friendly approach. WebOn Technology simplifies the user
                        experience, removing the complexities often associated with blockchain interactions, thus
                        inviting a more diverse audience to engage with DeFi functionalities confidently.</p>
                </div>

            </li>
        </ul>


        <h2 class="section-header">Advantages of WebOn Technology</h2>
        <div class="advantages-container">
            <div class="advantage-item">
                <img src="/Assets/CalendarCheck.svg" alt="Always Current" class="icon">
                <h3>Always Current</h3>
                <p>Eliminate the hassle of constant manual updates. WebOns refresh alongside your website, ensuring
                    your DeFi features remain up-to-date.</p>
            </div>
            <div class="advantage-item">
                <img src="/Assets/Devices.svg" alt="Accessibility Across Devices" class="icon">
                <h3>Accessibility Across Devices</h3>
                <p>Embrace universal accessibility with WebOns, designed to deliver a consistent and engaging
                    experience across all devices. This approach not only widens your audience reach but also aligns
                    with modern expectations for fluid, cross-platform user journeys.</p>
            </div>
            <div class="advantage-item">
                <img src="/Assets/ShieldCheck.svg" alt="State-of-the-Art Security & Trust" class="icon">
                <h3>State-of-the-Art Security & Trust</h3>
                <p>Drawing upon the highest standards of web interaction security, WebOns ensure that every feature
                    added to your site upholds rigorous protection measures. This commitment to security builds a
                    foundation of trust with your users, crucial for fostering long-term relationships.</p>
            </div>
            <div class="advantage-item">
                <img src="/Assets/PiggyBank.svg" alt="Cost-Effective Innovation" class="icon">
                <h3>Cost-Effective Innovation</h3>
                <p>With WebOn Technology, adding sophisticated features to your site no longer requires extensive
                    resources or development time. WebOns offer a cost-effective route to innovation, allowing you
                    to deploy new functionalities quickly and efficiently.</p>
            </div>

        </div>
    </div>
</div>
<script>
    const comparisonData = [
        {
            feature: 'Integration Ease',
            metamask: 'Browser extension (Desktop) or In-App-Browser (Mobile)',
            walletConnect: 'QR code connection or deeplinks',
            webOnTechnology: 'Seamless plug-in via In-App-Browser'
        },
        {
            feature: 'User Experience',
            metamask: 'Crypto-focused',
            walletConnect: 'Mobile-first',
            webOnTechnology: 'Broad, customizable web experience'
        },
        {
            feature: 'DeFi Accessibility',
            metamask: 'High',
            walletConnect: 'High',
            webOnTechnology: 'High; Enhanced with additional web functionalities'
        },
        {
            feature: 'Customization',
            metamask: 'Limited',
            walletConnect: 'Limited; forced to use a centralized middleman',
            webOnTechnology: 'Extensive'
        },
        {
            feature: 'Cross-Platform Use',
            metamask: 'Desktop & Mobile',
            walletConnect: 'Mobile-centric',
            webOnTechnology: 'All devices'
        },
        {
            feature: 'Community Engagement',
            metamask: 'Crypto enthusiasts',
            walletConnect: 'Crypto enthusiasts',
            webOnTechnology: 'Wider audience, including non-crypto users'
        },
        {
            feature: 'Development Flexibility',
            metamask: 'Moderate',
            walletConnect: 'Moderate',
            webOnTechnology: 'High'
        },
        {
            feature: 'Cost-Effectiveness',
            metamask: 'Varies',
            walletConnect: 'Varies',
            webOnTechnology: 'High efficiency and value'
        }
    ];
</script>

<style>
    .container {
        text-align: center;
        background-color: #000;
        color: #fff;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .header {
        text-align: center;
        margin-bottom: 3rem;
    }

    table {
        width: 100%;
        max-width: 1200px;
        margin-bottom: 3rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: calc(0.7rem + 0.4vw);
    }

    th, td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid #30363d;

    }

    th {
        background-color: #161B22;
    }

    .footer {

        text-align: center;
        margin-top: 2rem;
        margin-bottom: 3rem;
        max-width: 1200px;
        font-size: calc(0.8rem + 0.5vw);
    }

    .footer-s {

        text-align: center;
        margin-top: 2rem;
        margin-bottom: 3rem;
        max-width: 1200px;
        font-size: calc(0.8rem + 0.5vw);
    }

    h2{
        margin-bottom: 2rem;
        font-size: calc(1rem + 0.5vw);
    }
    @media (max-width: 768px) {
        table, thead, tbody, th, td, tr {
            display: block;
        }

        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        tr {
            border: 1px solid #333;
            margin-bottom: 1em;

        }

        td {
            border: none;
            border-bottom: 1px solid #30363d;
            position: relative;
            padding-left: 50%;
            padding-bottom: 2em;
            text-align: right;
            word-wrap: break-word;
            font-size: 0.8rem;

        }

        td:before {
            position: absolute;
            top: 0.8em;
            left: 1rem;
            width: 45%;
            padding-right: 10px;
            white-space: normal;
            text-align: left;
            font-weight: bold;
            word-break: break-all;

        }

        td:nth-of-type(1):before { content: "Feature"; }
        td:nth-of-type(2):before { content: "MetaMask"; }
        td:nth-of-type(3):before { content: "Wallet Connect"; }
        td:nth-of-type(4):before { content: "WebOn Technology"; }
    }


</style>

<div id="comparisonContainer" class="container">
    <div class="header">
        <h2>MetaMask vs. Wallet Connect vs. WebOn Technology</h2>
    </div>

    <table>
        <thead>
        <tr>
            <th>Feature</th>
            <th>MetaMask</th>
            <th>Wallet Connect</th>
            <th>WebOn Technology</th>
        </tr>
        </thead>
        <tbody>
        {#each comparisonData as item}
            <tr>
                <td>{item.feature}</td>
                <td>{item.metamask}</td>
                <td>{item.walletConnect}</td>
                <td>{item.webOnTechnology}</td>
            </tr>
        {/each}
        </tbody>
    </table>

    <div class="footer">
        <p>This comparison highlights how WebOn Technology not only supports DeFi applications but goes beyond by offering an enhanced user experience through easy integration and extensive customization options. </p>
        <p>Unlike MetaMask and Wallet Connect, which primarily cater to the crypto-savvy audience, WebOn Technology opens up a new realm of possibilities by making DeFi accessible and engaging for a broader audience, all while ensuring a seamless and enriching web experience.</p>
    </div>



    <div class="footer-s">
        <h2>Utilize WebOn Technology for a Comprehensive Digital Experience</h2>
        <p>By integrating WebOn Technology into your website, you're not just embracing the DeFi revolution; you're pioneering a new era of digital interaction that bridges the gap between specialized blockchain applications and the wider web audience. Whether you're already familiar with MetaMask and Wallet Connect or are looking to expand your website's capabilities, WebOn Technology offers an unparalleled platform for growth, engagement, and innovation.
        </p>
    </div>

</div>
<script>

    const webOns = [
        {
            img: 'Frame 121076188.svg',
            title: 'ZENPASS',
            description: 'ZENPASS leverages advanced identity verification technology on the ZENIQ Smart Chain, incorporating blockchain for secure and transparent authentication.'
        },
        {
            img: 'Frame 121076189.svg',
            title: 'ZENCON Debit Card',
            description: 'The ZENCON Debit Card employs advanced DeFi technology, connecting with the FINEX Bank platform through API integration.'
        },
        {
            img: 'Frame 121076190.svg',
            title: 'Neo Credit DeFi',
            description: 'Unleash your earning power by seamlessly staking your NEO Credit tokens, amplifying returns without limits, and exploring lucrative opportunities for growth and success in the blockchain ecosystem.'
        },
        {
            img: 'Frame 121076191.svg',
            title: 'AVINOC Migration',
            description: 'The AVINOC Migration WebOn enables users to seamlessly swap ERC20 AVINOC Tokens to ZEN20 Tokens on the ZENIQ Smart Chain.'
        },
        {
            img: 'TokenGenerator.svg',
            title: 'Token Generator',
            description: 'The Token Generator WebOn harnesses the power of the ZENIQ Smart Chain, employing blockchain technology for the seamless creation and management of custom tokens.'
        },
        {
            img: 'EURKMigration.svg',
            title: 'EURK Migration',
            description: 'Experience the convenience of converting EuroCoin into a versatile voucher, unlocking new possibilities within the KMall digital realm.'
        }
    ];
</script>

<style>
    .content {
        background-color: #000;
        color: #fff;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


    }

    h2 {
        color: #fff;
        text-align: center;
        margin-bottom: 2rem;
        font-size: calc(1rem + 0.5vw);
    }

    button {

        padding: 1rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        margin-top: 3rem;
        border: 1px solid gray;
        background-color: transparent;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }
    button a{
        text-decoration: none;
        color: #fff;
    }

    button:hover {
        background: #1e1f22;
        color: #fdfdfd;
    }

    .popular-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        align-items: start;
        justify-content: center;
        padding: 0;
        width: 100%;
        max-width: 1104px;

    }

    .webon-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 420px;
        border: 1px solid gray;
        background-color: transparent;
        padding: 1rem;
        text-align: left;
        color: #fff;
        border-radius: 8px;
        font-size: calc(0.7rem + 0.5vw);

    }

    .webon-item img {
        height: 60px;
        width: auto;

        margin-right: auto;
        display: block;
    }

    .webon-item h3 {
        min-height: 3rem;
        margin-bottom: 1rem;
    }


    @media (max-width: 768px) {
        .popular-container {
            grid-template-columns: 1fr;
        }

        .webon-item {
            text-align: left;
            height: 250px;
        }

        .webon-item h3 {

            margin-bottom: 0;
        }
    }

</style>
<div class="content">
    <h2>Popular WebOns </h2>
    <div class="popular-container">
        {#each webOns as webOn}
            <div class="webon-item">
                <img src={webOn.img} alt={webOn.title}>
                <h3 class="title">{webOn.title}</h3>
                <p>{webOn.description}</p>
            </div>
        {/each}
    </div>
    <button>
        <a href="https://discover.webon.info/" >Explore all WebOns</a>
    </button>
</div>

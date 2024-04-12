<script>
    export let name;
    import Navbar from './Navbar.svelte';
    import HeroSection from './HeroSection.svelte';
    import FeatureGrid from './FeatureGrid.svelte';
    import TechOverview from './TechOverview.svelte';
    import Comparison from './Comparison.svelte';
    import FeaturesAdvantages from './FeaturesAdvantages.svelte';
    import TechAdvancement from './TechAdvancement.svelte';
    import Popular from './Popular.svelte';
    import Footer from './Footer.svelte';
</script>

<main>
    <Navbar/>
    <HeroSection/>
    <FeatureGrid/>
    <div id="techOverviewContainer">
        <TechOverview/>
    </div>
    <div id="comparisonContainer">
        <Comparison/>
    </div>
    <div id="featuresAdvantagesContainer">
        <FeaturesAdvantages/>
    </div>
    <TechAdvancement/>
    <Popular/>
    <Footer/>
</main>


<style>
    main {
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
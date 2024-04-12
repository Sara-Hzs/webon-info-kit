<script>
    export let name;
    import Navbar from '../components/Navbar.svelte';
    import HeroSection from '../components/HeroSection.svelte';
    import FeatureGrid from '../components/FeatureGrid.svelte';
    import TechOverview from '../components/TechOverview.svelte';
    import Comparison from '../components/Comparison.svelte';
    import FeaturesAdvantages from '../components/FeaturesAdvantages.svelte';
    import TechAdvancement from '../components/TechAdvancement.svelte';
    import Popular from '../components/Popular.svelte';
    import Footer from '../components/Footer.svelte';
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
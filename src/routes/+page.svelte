<script>
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


<style>
    main {
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>

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



<script>
import '/src/routes/global.scss';

</script>

<slot></slot>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, main {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        color: #333;
        overflow: hidden;
    }
</style>

<script>
    import BigGoToButton from "$lib/components/dev/BigGoToButton.svelte"
</script>

<div id="bg">
    <BigGoToButton
        goto="/dev"
        name="Dev"/>
    <BigGoToButton
        goto="/app"
        name="App"/>
</div>

<style>
    #bg {
        background-color: #000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        z-index: -1;

        display: flex;
        flex-direction: row;
        justify-content: center;

        padding-top: 45vh;
    }
</style>
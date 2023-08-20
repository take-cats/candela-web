<script>
    import BigGoToButton from "$lib/components/dev/BigGoToButton.svelte";
</script>

<div id="bg-dev-page">
    <h2 id="dev-title">
        🕯️
        ️ Dev👨‍💻's Page
        🕯️
    </h2>
    <div id="big-btn-box">
        <BigGoToButton
            name="API Docs"
            goto="/api/docs"
        />
        <BigGoToButton
        />
        <BigGoToButton/>
        <BigGoToButton/>
    </div>
</div>

<style>
    #big-btn-box {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 20%;
    }

    #dev-title {
        font-size: 2em;
        font-weight: 700;
        margin-bottom: 50px;
        width: 100%;
        padding: 0;
        text-align: center;
    }

    #bg-dev-page {
        width: 100vw;
        height: 100vh;

        color: white;
        background: linear-gradient(45deg, #1D1D1D 75%, #2D2D2D 100%);

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
</style>

<script>
    import BigGoToButton from "$lib/components/dev/BigGoToButton.svelte"
</script>

<div id="bg">
    <div class="cards">
        <div class="card red"
             aria-label="앱으로 이동하기"
        >
            <BigGoToButton
                goto="/app"
                name="App" />
            <p class="text-sm">Candela 앱으로 이동합니다.</p>
        </div>
        <div class="card blue"
             aria-label="개발자 페이지로 이동하기"
        >
            <BigGoToButton
                goto="/dev"
                name="Dev" />
            <p class="text-sm">개발자 페이지로 이동합니다.</p>
        </div>
        <div class="card green"
             aria-label="깃허브로 이동하기"
        >
            <BigGoToButton
                goto="https://github.com/take-cats/candela-web"
                name="GitHub" />
            <p class="text-sm">Take Cats 깃허브로 이동합니다.</p>
        </div>
    </div>
</div>

<style>
    .text-sm {
        font-size: 0.9rem;
        margin-top: 0;
        padding-top: 0;
    }
    #bg {
        background-color: rgba(0, 0, 0, 0.49);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;

        display: flex;
        flex-direction: row;
        justify-content: center;

        padding-top: 30vh;
    }

    .cards {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .cards .red {
        background-color: #f43f5e;
    }

    .cards .blue {
        background-color: #3b82f6;
    }

    .cards .green {
        background-color: #22c55e;
    }

    .cards .card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 100px;
        width: 250px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: 400ms;
    }

    .cards .card:hover {
        transform: scale(1.1, 1.1);
    }

    .cards:hover > .card:not(:hover) {
        filter: blur(1px);
        transform: scale(0.9, 0.9);
    }
</style>


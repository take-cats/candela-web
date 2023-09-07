<script>
    import Candler from "$lib/components/external/Candler.svelte"
</script>

<div id="loading">
    <Candler />
    <h2
        id="loading-text"
        aria-label="초기 설정이 진행중입니다. 잠시만 기다려주세요."
    >
        초기 설정이 진행중입니다.
    </h2>
    <h3
        id="loading-sub-text"
        aria-label="초기 설정이 완료되면 자동으로 이동합니다."
    >
        잠시만 기다려주세요.
    </h3>
</div>

<style>
    #loading-sub-text {
        padding: 0;
        margin-top: 0;
        color: rgba(201, 201, 201, 0.67);
        font-size: 1.2rem;
    }

    #loading-text {
        margin-top: 10vh;
        color: white;
        font-size: 1.7rem;
    }

    #loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #3a3a3a;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import BaseButtonSmall from "$lib/components/menu/BaseButtonSmall.svelte"
    import { CurrentMenu } from "$lib/stores/MenuState"
</script>

<div id="menu-box">
    <div
        id="button-box"
        aria-label="Features button group."
    >
        <BaseButtonSmall
            name={CurrentMenu.ObjectRecognition}
        />
        <BaseButtonSmall
            name={CurrentMenu.FaceRecognition}
        />
        <BaseButtonSmall
            name={CurrentMenu.ObjectTagging}
        />
    </div>
</div>

<style>
    #menu-box {
        background-color: #3a3a3a;
        border: none;
        width: 100vw;
        height: 7vh;
        padding: 0 0 2vh 0;
        overflow: hidden;
    }

    #button-box {
        background-color: #1f1f1f;
        width: 100vw;
        height: 7vh;
        border: none;
        display: flex;
        flex-direction: row;
        padding: 0 0 2vh 0;

        justify-content: center;
        align-items: center;
    }
</style>
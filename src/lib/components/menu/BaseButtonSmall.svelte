<script lang="ts">
    import { menuState } from "$lib/stores/MenuState"

    export let name: string

    export let execute: () => void = function (): void {
        console.log(`Button \"${name}\" is not implemented.`)
    }

</script>

<div class="button-box" class:active={$menuState.currentMenu === name}>
    <div class="round-left"></div>
    <button class="menu-btn" on:click={() => execute()}>
        {name}
    </button>
    <div class="round-right"></div>
</div>
<style>

    .round-left {
        background-color: #4886c0;
        padding: 9px 6px;
        height: 18px;
        margin: 0 -1px 0 5px;
        border: none;
        border-radius: 20px 0 0 20px;
    }

    .round-right {
        background-color: #4886c0;
        padding: 9px 6px;
        height: 18px;
        margin: 0 5px 0 -1px;
        border: none;
        border-radius: 0 20px 20px 0;
    }

    .round-left:hover {
        background-color: #4886c0;
    }

    .button-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .menu-btn {
        width: 100%;
        background-color: #4886c0;
        border: none;
        padding: 9px 6px;
        cursor: pointer;
        font-weight: 500;
    }

    .menu-btn:hover {
        background-color: #4886c0;
    }

    .menu-btn:active {
        background-color: #539ae1;
    }


    .button-box.active {
        animation: appear 0.5s ease-in-out;
    }

    @keyframes appear {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>
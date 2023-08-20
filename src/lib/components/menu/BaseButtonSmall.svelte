```
<script lang="ts">
    export let name: string

    export let execute: () => void = function (): void {
        console.log(`Button \"${name}\" is not implemented.`)
    }
</script>

<button class="menu-btn" on:click={() => execute()}>
    {name}
</button>

<style>
    .menu-btn {
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 5px;
        cursor: pointer;
    }
</style>
```
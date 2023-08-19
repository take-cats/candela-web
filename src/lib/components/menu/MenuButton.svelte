<script lang="ts">
    export let name: string
    export let execute: Function
    export let discirption: string
</script>

<button class="menu-btn">
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
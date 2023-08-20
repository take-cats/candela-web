<script lang="ts">
    export let name: string = "None"
    export let goto: string = "/"
</script>

<a
    class="big-goto-btn"
    href={goto}
>
    <span class="big-goto-content">{name}</span>
</a>

<style>
    .big-goto-content {
        font-size: 1.3rem;
    }

    .big-goto-btn {
        display: block;
        width: 34%;
        height: 48px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: #000;
        border-radius: 10px;
        padding: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        transition: all 0.3s;
        line-height: 40px;
    }

    .big-goto-btn:hover {
        background-color: rgba(100, 100, 100, 0.5);
        color: #000;
    }
</style>
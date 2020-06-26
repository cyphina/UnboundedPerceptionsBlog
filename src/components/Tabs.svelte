<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click="{() => dispatch('tabChange', item)}">
                <!--Conditional Class-->
                <div class:active="{item === activeItem}" class="hover:text-white">
                    <a href="{'/' + activeItem}">{item}</a>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.3em auto;
        list-style-type: none;
        height: 100%;
    }
    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #777;
        cursor: pointer;
    }
</style>

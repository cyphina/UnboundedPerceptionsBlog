<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<a href="/" class="ml-5" on:click="{() => dispatch('resetTabs')}">
    <svg width="50" height="50">
        <image href="/images/wooper.png" height="50" width="50"></image>
    </svg>
</a>

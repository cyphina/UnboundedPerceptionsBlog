<script>
    export let sitePath = '/';

    const invisibleRoutes = ['Posts']; // Routes we don't want to show in the breadcrumbs

    // Splits the path up into names that we can display
    function createBreadCrumbsFromPath(newPath) {
        const pathString = ['Home'];
        const routes = newPath
            .split('/')
            .filter(item => item != '')
            .map(x => decodeURI(x));
        return pathString.concat(routes);
    }

    $: breadCrumbs = createBreadCrumbsFromPath(sitePath);

    // Creates paths for each of the names we display
    function recreatePathFromBreadcrumbs(index) {
        const splitPath = sitePath.split('/');

        let reconstructedPath = '';
        for (let i = 0; i <= index; ++i) {
            reconstructedPath = reconstructedPath.concat(splitPath[i] + '/');
        }

        return reconstructedPath;
    }
</script>

<div>
    {#each breadCrumbs as route, i (route)}
        {#if !invisibleRoutes.includes(route)}
            <a href="{recreatePathFromBreadcrumbs(i)}" class="text-sm font-hairline text-blue-600">{route}</a>
            {#if i < breadCrumbs.length - 1}
                <span class="mr-1 font-hairline cursor-default">|</span>
            {/if}
        {/if}
    {/each}
</div>

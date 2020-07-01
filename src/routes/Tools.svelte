<script>
    const toolOverviewImage = '/images/tools/dialogtool.png';
</script>

<main class="m-2">
    <img src="{toolOverviewImage}" alt="Missing" class="mx-auto" />
    <p>
        This is a glimpse of my dialog tool which I haven't worked on in a while. I made this in 2018-2019 over the
        break so I could learn a bit about WPF.
    </p>
    <a href="https://github.com/cyphina/DialogTool" class="my-2">Link To the Tool</a>
    <p>It features several things including:</p>
    <ul>
        <li>Branching dialog (choices)</li>
        <li>Node based editing (similar to UE4 controls)</li>
        <li>Dialog Conditionals</li>
        <li>Support for triggering events in my game</li>
        <li>Exports the dialog data to JSON which can be added to data tables within UE4</li>
    </ul>
    <p>
        The controls are straight forward (like UE4 node editors). They controls are specified in the github but here's
        a short reiteration:
    </p>
    <p>
        Click on any node to select them, or click drag to create a selection rectangle and select multiple nodes. Then
        we can move them all by dragging from one of the bodies of the selected noes.
    </p>
    <p>
        Scroll to zoom in and out. Pan around by right click dragging around the dark blue background. Double click on
        the red header to change the title of the dialog. This matters since inside the game, the conversation name is
        used for several things.
    </p>
    <p>
        Drag and drop nodes around the editing field. Make sure to connect nodes to the root node since the dialog tree
        is traversed from the root node. Hold F and click to create a dialog node. Drag off the little button and drop
        onto the body of another nodes to create a connection. If there's more than one connection from a node, it
        becomes a choice node.
    </p>
    <p>
        Hold T and click to create a Trigger node. Hold C and click to create a conditional node which should connect to
        two nodes. The first node it is connected to is reached if the condition is true, and the second node connected
        is reached if the condition is false.
    </p>
    <p>
        Click on the selection box and hover over an element to see a description of what parameters to pass to the
        condition and trigger nodes.
    </p>
    <p>
        I think I enjoy developing web apps more so I'll probably be making tools with Svelte form now on. However, WPF
        was an interesting framework. I still need to make time to learn more C#, but there are so many things to learn
        and I don't know what I feel like doing. I guess wherever my career takes me I'll focus on that, although
        gameplay programming will always be one of the higher priorities.
    </p>
</main>

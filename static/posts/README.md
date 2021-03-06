---
title: Wee
summary: Pee
date: 2020-01-01
slug: Test
---

# Unbounded Peceptions

## Setup

This project can be setup by copying all the folders into 4.25 unreal project. It requires the plugin BLUI (because it uses some browser widgets I made in Svelte), and it also uses some random EGS assets, although all the assets are cosmetic. I'm also not very good at making things look in the engine so I just randomly used many visuals from Infinity Blade, Soul City, and The Open World Demo Collection.

There's also some assets I grabbed online randomly like a random miku model. I will never use these assets for monetary purposes, it is all just a placeholder that looks funny and will be replaced in the future.

This project used to leverage the Tensorflow plugin. I had this idea of using NLP to analyze the things typed out in the chatbox so you could control the AI by talking to them, but it never worked out in my packaged game, so I removed it. I still left the scripts up to see because they may work in version 4.23. I'm also not working too much on Machine Learning anymore, so I'm rusty. Maybe once I've consolidated my skills a bit more I'll look back into it.

To see some of the features the game offers you can read the TestLevelDesign document. These features are in the game, although not all of them are tested nor are all of them shown in the test level so they may not be working at this point. However most of the features are working.

A lot of the things in this game are event driven despite it being a RTS game so hopefully it runs well on other computers. There's also very little checks I did since I had the liberty to work on the game myself, I had a decent idea of what things could crash from not being set properly, although there'll always be things I missed.

## Controls

There's a lot of controls in this game. To look at the controls click on the question mark at the bottom left for a list (it may cause your camera to shift a bit but you can lock the camera by pressing M). There may be controls I left out, but the general control scheme is based off a game like Dota. Most UIs work intuitively as well (you can choose to drag and drop things, widgets, or just click).

## Extras

As an added bonus I included some drawings in the extra folder, and two themes I use. One is in visual studio, and I use a nice dark blue picture with it. The is a UE4 theme. It took me a very long time to customize those so enjoy (pics in the same folder).

My other project on Github is a Dialog tool for this game (at https://github.com/cyphina/DialogTool). It might be kind of jank since I haven't touched it in a while but I checked it out and it works for sure. It just an app to visually create dialog graphs and then export the data which we have to paste into our dialog JSON table.

## Play the demo online

You can play a demo online at https://cyphina.itch.io/unbounded-perceptions. I may have not posted the latest fix yet for some crashes during combat and the cursor bug, but I will get to it.

## Next steps

I kind of need to find some other work now so I may put development on hold. I'll still be working on my story and such. I'll focus on building a website for myself and maybe upload the story there. I'll also work on another app this time maybe to make quests. Maybe I'll make it so the quest app could be used on mobile so you can make quest data in your bed.
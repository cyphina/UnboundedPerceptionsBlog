!function(){"use strict";const e=["client/_layout.178d4aa5.js","client/[slug].7eb66336.js","client/Contact.55ffab0a.js","client/About.277ab315.js","client/Tools.59d92849.js","client/Gallery.e00b4602.js","client/client.02add043.js","client/Blog.4af7bd61.js","client/wip.a057c0d2.js","client/client.9c796c44.js","client/Artwork.41f56a24.js","client/index.3a58218c.js","client/Game.74f12265.js"].concat(["service-worker-index.html","admin/config.yml","admin/index.html","dialog-polyfill.css","dialog-polyfill.js","favicon.png","global.css","images/aridukacat.jpg","images/artwork/2019-02-11 02.21.34.png","images/artwork/2019-02-11 02.23.29.png","images/artwork/vectordraw.png","images/flower.png","images/GameImages/BasicDialog.png","images/GameImages/BreakMenu.png","images/GameImages/CruddyDrawMinigame.png","images/GameImages/DialogChoice.png","images/GameImages/DialogWheel.png","images/GameImages/DoubleChanneledSpell.png","images/GameImages/EditorCustomization.png","images/GameImages/EnemiesHaveVision.png","images/GameImages/GeneralInGame.png","images/GameImages/HelpMenu.png","images/GameImages/InGameModal.png","images/GameImages/InventoryAndEquip.png","images/GameImages/KeybindMenu.png","images/GameImages/PartyChangeMenu.png","images/GameImages/QuestMenu.png","images/GameImages/SaveLoadMenu.png","images/GameImages/SettingsMenu.png","images/GameImages/SkillTree.png","images/GameImages/StatsPage.png","images/MainPageGallery/KoishiTheme.png","images/MainPageGallery/ShizukaTheme.png","images/MainPageGallery/vmlook.png","images/tools/dialogtool.png","images/wooper.png","manifest.json","posts/Pee - Copy (2).md","posts/Pee - Copy.md","posts/README - Copy (2).md","posts/README - Copy.md","posts/README.md","posts/StoryPlans1.md","posts/Test.md","posts/TurningPoint.md","posts/Wee - Copy (2).md","posts/Wee - Copy.md","posts/Wee.md","posts/Wub - Copy (2).md","posts/Wub - Copy.md","posts/Wub.md","posts/Zi - Copy (2).md","posts/Zi - Copy.md","posts/Zi.md"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1594085601433").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1594085601433"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&a.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594085601433").then(async a=>{try{const s=await fetch(e.request);return a.put(e.request,s.clone()),s}catch(s){const t=await a.match(e.request);if(t)return t;throw s}}))))})}();

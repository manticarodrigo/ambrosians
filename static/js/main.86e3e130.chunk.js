(this.webpackJsonpambrosians=this.webpackJsonpambrosians||[]).push([[0],{107:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),s=r(38),o=r.n(s),l=(r(80),r(9)),c=r(124),i=r(119),d=r(70),m=(r(82),r(36)),h=r(13),u=r(45),b=r(2),j={regular:"rounded py-4 px-8 text-white font-black bg-black hover:bg-yellow-900 shadow-2xl",whiteBordered:"border border-white hover:bg-white hover:bg-opacity-25 rounded py-4 px-8 text-white font-black"},p=function(e){var a=e.variant,r=void 0===a?"regular":a,t=e.className,n=void 0===t?"":t,s=Object(u.a)(e,["variant","className"]);return Object(b.jsx)("button",Object(h.a)({className:j[r]+" "+n},s))},x=r(126),g=r(125),y=r(120),O=r(62),f=r(112),w=function(e,a){var r=Object(t.useState)(!1),n=Object(l.a)(r,2),s=n[0],o=n[1];Object(t.useEffect)((function(){var r=a.onOpen,t=a.onClose;s&&(e?r&&r():t&&t(),o(!1))}),[s,e]);return function(){o(!0)}},v={opacity:0,height:0,overflow:"hidden"},k=function(e){var a=e.expanded,r=e.scrollOnExpand,n=e.scrollOnCollapse,s=e.display,o=e.className,l=e.children,c=Object(t.useRef)(),i=Object(x.a)(),d=w(a,{onOpen:function(){r&&Object(O.a)(c.current,{behavior:"smooth",block:"center"})},onClose:function(){n&&Object(O.a)(c.current,{behavior:"smooth",block:"center"})}});return f.a(a)?Object(b.jsx)("div",{className:"dn",children:l}):Object(b.jsx)(g.a,{initial:!1,children:a&&Object(b.jsx)(y.a.div,{ref:c,initial:v,animate:{opacity:1,height:"auto",transitionEnd:{overflow:"visible"}},exit:v,transition:{duration:i?0:.5,ease:[.04,.62,.23,.98]},style:{display:s},className:o,onAnimationComplete:d,children:l})})},N=function(e){return Object(b.jsx)("section",Object(h.a)({className:"flex flex-col items-center w-full"},e))},C=function(e){var a=e.level,r=void 0===a?"2":a,t=Object(u.a)(e,["level"]),n="h".concat(r);return Object(b.jsx)(n,Object(h.a)({className:"max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow"},t))},A=function(e){var a=e.url,r=Object(u.a)(e,["url"]);return Object(b.jsx)("div",Object(h.a)({className:"flex flex-col justify-center items-center py-80 w-full xl:bg-fixed bg-no-repeat bg-cover bg-top",style:{backgroundImage:"url(".concat(a,")")}},r))},T=function(e){var a=e.bg,r=void 0===a?"black":a,t=Object(u.a)(e,["bg"]);return Object(b.jsx)("div",Object(h.a)({className:"flex flex-col items-center p-8 md:p-16 w-full bg-".concat(r)},t))},H=function(e){return Object(b.jsx)("p",Object(h.a)({className:"py-8 text-white text-center md:text-3xl max-w-4xl"},e))},P=r(121),S=r(115),G=r(116),B=r(117),R=r(123),W=r(118),z=(r(95),{background:{olympus:"Olympus","nymph-forest":"Nymph's Forest",colisseum:"Colisseum",underworld:"The Underworld",chaos:"Chaos","poseidons-kingdom":"Poseidon's Kingdom","tartarus-gates":"Gates of Tartarus","zeus-palace":"Zeus' Palace"},skin:{"dark-skin-mortal":"Dark Skin Mortal","light-skin-mortal":"Light Skin Mortal",nymph:"Nymph",tattooed:"Tattooed","demi-god":"Demigod",godly:"Godly",underworld:"Underworld",chaos:"Chaos"},clothing:{"grey-tunic":"Grey Tunic","white-tunic":"White Tunic","olympian-tunic":"Olympian Tunic","roman-armor":"Roman War Armor","spartan-armor":"Spartan Aegis","hercules-armor":"Hercules' Vest","achilles-armor":"Achilles' Armor","pink-tunic":"Pink Tunic","golden-black-armor":"Gold and Black Armor","monk-robe":"Monk Robe","olympian-armor":"Olympian Armor","helios-tunic":"Helios' Armor","phantom-hoodie":"Phantom Hoodie","athenas-armor":"Athena's Armor","yellow-hoodie":"Yellow Hoodie","black-hoodie":"Black Hoodie","olympian-jersey":"Olympian Jersey","dionysus-tunic":"Dionysus' Robe","solana-jacket":"Solana Disco Jacket","winged-suit":"Winged Suit","minotaur-suit":"Minotaur Costume","cerberus-suit":"Cerberus Costume","gorilla-suit":"Gorilla Costume","notorious-sweater":"Notorious Sweater","poseidons-plate":"Poseidon's Plate","zeus-robe":"Zeus' Robe","hades-tunic":"Hades' Tunic"},hair:{olympian:"Olympian",short:"Short","light-brown":"Light Brown",grey:"Grey",shaved:"Shaved",floral:"Floral",black:"Black",ginger:"Ginger",bearded:"Bearded",golden:"Golden","green-medusa":"Medusa Green",purple:"Purple",bitcoin:"Bitcoin",mohawk:"Mohawk",godly:"Godly","pink-medusa":"Medusa Pink",monk:"Monk",zeus:"Zeus",hades:"Hades",poseidon:"Poseidon","long-bitcoin":"Long Bitcoin"},headwear:{"green-laurel":"Olympian Wreath","blue-bandana":"Blue Bandana","golden-laurel":"Olympian Golden Wreath",headband:"Headband","hermes-helmet":"Hermes' Helmet","artemis-crown":"Artemis' Headdress","wizard-hat":"Wizard Hat","golden-crown":"Golden Crown","paper-crown":"Paper Hat",sombrero:"Sombrero","santa-hat":"Santa Hat","ares-helm":"Ares' Helmet","hercules-helmet":"Herculean Headgear","cerberus-mask":"Cerberus Head","minotaur-mask":"Minotaur Head","gorilla-mask":"Gorilla Head",halo:"Halo","zeus-crown":"Zeus' Crown","hades-crown":"Hades' Crown","poseidon-crown":"Poseidon's Crown"},eyes:{classic:"Classic",blind:"Blind",patched:"Patched",fire:"Infernal",cyclops:"Cyclops","war-paint":"War Paint",trickster:"Trickster","pit-vipers":"Ambrosian Vipers",fluorescent:"Fluorescent",zeus:"Zeus",hades:"Hades",poseidon:"Poseidon",laser:"Laser Eyes",solana:"Solana"},hands:{"spartan-sword":"Spartan Sword",grapes:"Grapes","trojan-horse":"Trojan Horse","war-horn":"War Horn","spartan-spear":"Spartan Spear","elder-scroll":"Elder Scroll","wolf-ring":"Wolf Ring",quill:"Quill","apollos-harp":"Apollo's Harp","hephaestus-hammer":"Hephaestus' Hammer","persephones-pomegranade":"Persephone's Pomegranate","dionysus-wine":"Dionysian Wine","beer-mug":"Beer Mug","hercules-club":"Hercules' Club","golden-apple":"Golden Apple","artemis-bow":"Artemis' Bow","demeter-scythe":"Demeter's Scythe","evil-crow":"Evil Crow","battle-axe":"Battle Axe","evil-serpent":"Serpent","athenas-owl":"Athena's Owl",blunt:"Blunt","wind-blade":"Wind Blade","water-katana":"Water Katana","hades-staff":"Hades' Staff","poseidons-trident":"Poseidon's Trident","zeus-lightning":"Zeus' Lightning","diamond-hand":"Diamond Hands"}}),M={background:{olympus:"rare","nymph-forest":"rare",colisseum:"rare",underworld:"very-rare","zeus-palace":"godly","tartarus-gates":"legendary",chaos:"very-rare","poseidons-kingdom":"very-rare"},skin:{"light-skin-mortal":"common","dark-skin-mortal":"common",nymph:"uncommon",tattooed:"rare","demi-god":"very-rare",godly:"legendary",underworld:"legendary",chaos:"godly"},clothing:{"olympian-tunic":"common","white-tunic":"common","grey-tunic":"common","roman-armor":"common","achilles-armor":"uncommon","spartan-armor":"uncommon","hercules-armor":"uncommon","olympian-armor":"rare","athenas-armor":"rare","helios-tunic":"rare","monk-robe":"rare","yellow-hoodie":"rare","black-hoodie":"rare","golden-black-armor":"rare","phantom-hoodie":"rare","pink-tunic":"rare","winged-suit":"very-rare","olympian-jersey":"very-rare","dionysus-tunic":"very-rare","solana-jacket":"very-rare","minotaur-suit":"legendary","cerberus-suit":"legendary","gorilla-suit":"legendary","notorious-sweater":"legendary","hades-tunic":"godly","zeus-robe":"godly","poseidons-plate":"godly"},hair:{short:"common","light-brown":"common",olympian:"common",golden:"rare",floral:"uncommon",bearded:"rare",shaved:"uncommon",grey:"uncommon",ginger:"rare",purple:"very-rare",mohawk:"very-rare",black:"uncommon","long-bitcoin":"godly",bitcoin:"very-rare","green-medusa":"rare","pink-medusa":"legendary",monk:"legendary",godly:"legendary",zeus:"godly",hades:"godly",poseidon:"godly"},headwear:{"blue-bandana":"common",headband:"uncommon","green-laurel":"common","artemis-crown":"uncommon","hermes-helmet":"uncommon","golden-laurel":"uncommon","golden-crown":"rare","wizard-hat":"rare","paper-crown":"rare","ares-helm":"very-rare",sombrero:"very-rare","santa-hat":"very-rare","hercules-helmet":"very-rare","minotaur-mask":"legendary","cerberus-mask":"legendary","gorilla-mask":"legendary",halo:"legendary","hades-crown":"godly","zeus-crown":"godly","poseidon-crown":"godly"},eyes:{classic:"common",blind:"uncommon",patched:"rare",fire:"rare",fluorescent:"very-rare",cyclops:"very-rare","war-paint":"very-rare",trickster:"very-rare","pit-vipers":"very-rare",hades:"legendary",poseidon:"legendary",zeus:"legendary",laser:"godly",solana:"godly"},hands:{"spartan-sword":"common","spartan-spear":"common",quill:"common","trojan-horse":"common","elder-scroll":"common","war-horn":"common","wolf-ring":"common",grapes:"common","hercules-club":"uncommon","beer-mug":"uncommon","dionysus-wine":"uncommon","persephones-pomegranade":"uncommon","hephaestus-hammer":"uncommon","apollos-harp":"uncommon","demeter-scythe":"rare","battle-axe":"rare","golden-apple":"rare","artemis-bow":"rare","evil-crow":"rare",blunt:"very-rare","athenas-owl":"very-rare","evil-serpent":"very-rare","water-katana":"legendary","wind-blade":"legendary","hades-staff":"godly","poseidons-trident":"godly","zeus-lightning":"godly","diamond-hand":"godly"}},D=r(122),F=r(127),L=r(114),I=r(43),E=r(4),U=r(14),Z=r(113),V=function(e){var a=e.section,r=e.state,t=Object(Z.b)({heading:a.rendered,"aria-label":a["aria-label"]}),n=t.itemProps,s=t.headingProps,o=t.groupProps;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("li",Object(h.a)(Object(h.a)({},n),{},{className:"pt-2",children:[a.rendered&&Object(b.jsx)("span",Object(h.a)(Object(h.a)({},s),{},{className:"text-xs font-bold uppercase text-gray-500 mx-3",children:a.rendered})),Object(b.jsx)("ul",Object(h.a)(Object(h.a)({},o),{},{children:Object(U.a)(a.childNodes).map((function(e){return Object(b.jsx)(_,{item:e,state:r},e.key)}))}))]}))})},_=function(e){var a=e.item,r=e.state,n=Object(t.useRef)(null),s=Object(Z.c)({key:a.key},r,n),o=s.optionProps,l=s.isDisabled,c=s.isSelected,i=s.isFocused,d="text-gray-700";return i||c?d="text-blue-600":l&&(d="text-gray-200"),Object(b.jsxs)("li",Object(h.a)(Object(h.a)({},o),{},{ref:n,className:"m-1 rounded py-2 px-2 text-sm outline-none cursor-default flex items-center justify-between ".concat(d," ").concat(i?"bg-blue-100":""," ").concat(c?"font-bold":""),children:[a.rendered,c&&Object(b.jsx)(m.a,{"aria-hidden":"true",className:"w-5 h-5 text-blue-600"})]}))},J=function(e){var a=Object(t.useRef)(null),r=e.listBoxRef,n=void 0===r?a:r,s=e.state,o=Object(Z.a)(e,s,n).listBoxProps;return Object(b.jsx)("ul",Object(h.a)(Object(h.a)({},o),{},{ref:n,className:"max-h-72 overflow-auto outline-none",children:Object(U.a)(s.collection).map((function(e){return"section"===e.type?Object(b.jsx)(V,{section:e,state:s},e.key):Object(b.jsx)(_,{item:e,state:s},e.key)}))}))},Y=r(73),K=function(e){var a=Object(t.useRef)(null),r=e.popoverRef,n=void 0===r?a:r,s=e.isOpen,o=e.onClose,l=e.children,c=Object(Y.b)({isOpen:s,onClose:o,shouldCloseOnBlur:!0,isDismissable:!1},n).overlayProps;return Object(b.jsx)(I.a,{restoreFocus:!0,children:Object(b.jsxs)("div",Object(h.a)(Object(h.a)({},c),{},{ref:n,className:"absolute z-10 top-full w-full shadow-lg border border-gray-300 bg-white rounded-md mt-2",children:[l,Object(b.jsx)(Y.a,{onDismiss:o})]}))})},q=r(42),Q=function(e){var a=Object(D.a)(e),r=Object(t.useRef)(null),n=Object(F.b)(e,a,r),s=n.labelProps,o=n.triggerProps,l=n.valueProps,c=n.menuProps,i=Object(L.a)(o,r).buttonProps,d=Object(I.d)(),u=d.focusProps,j=d.isFocusVisible;return Object(b.jsxs)("div",{className:"inline-flex flex-col relative w-52",children:[Object(b.jsx)("div",Object(h.a)(Object(h.a)({},s),{},{className:"py-2 block text-sm font-black text-white text-left cursor-default",children:e.label})),Object(b.jsx)(F.a,{state:a,triggerRef:r,label:e.label,name:e.name}),Object(b.jsxs)("button",Object(h.a)(Object(h.a)({},Object(E.h)(i,u)),{},{ref:r,className:"p-1 pl-3 py-1 relative inline-flex flex-row items-center justify-between rounded-md overflow-hidden cursor-default shadow-sm border-2 outline-none ".concat(j?"border-blue-500":"border-gray-300"," ").concat(a.isOpen?"bg-gray-100":"bg-white"),children:[Object(b.jsx)("span",Object(h.a)(Object(h.a)({},l),{},{className:"text-md ".concat(a.selectedItem?"text-gray-800":"text-gray-500"),children:a.selectedItem?a.selectedItem.rendered:"Select an option"})),Object(b.jsx)(m.d,{className:"w-5 h-5 ".concat(j?"text-blue-500":"text-gray-500")})]})),a.isOpen&&Object(b.jsx)(K,{isOpen:a.isOpen,onClose:a.close,children:Object(b.jsx)(J,Object(h.a)(Object(h.a)({},c),{},{state:a}))})]})},X=r(71),$=r.n(X),ee={common:"Common",uncommon:"Uncommon",rare:"Rare","very-rare":"Very Rare",legendary:"Legendary",godly:"Godly"},ae={common:"bg-gray-600",uncommon:"bg-green-600",rare:"bg-blue-600","very-rare":"bg-purple-600",legendary:"bg-red-600",godly:"bg-yellow-600"};P.a.use([S.a,G.a,B.a]);var re=function(){var e=Object(t.useState)(null),a=Object(l.a)(e,2),r=a[0],n=a[1],s=Object(t.useState)("skin"),o=Object(l.a)(s,2),c=o[0],i=o[1];return Object(t.useEffect)((function(){r&&r.slideTo(0)}),[r,c]),Object(b.jsxs)("div",{className:"md:flex py-48 max-w-full xl:max-w-6xl",children:[Object(b.jsx)("div",{className:"pb-6 md:pr-24 lg:pr-36 text-center",children:Object(b.jsx)("div",{className:"m-4",children:Object(b.jsx)(Q,{label:"Choose Layer",selectedKey:c,onSelectionChange:i,children:Object.keys(z).filter((function(e){return"background"!==e})).map((function(e){return Object(b.jsx)(q.a,{children:(a=e,a.charAt(0).toUpperCase()+a.slice(1))},e);var a}))})})}),Object(b.jsx)(R.a,{navigation:!0,centeredSlides:!0,grabCursor:!0,effect:"coverflow",breakpoints:{950:{slidesPerView:3}},slidesPerView:1,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1},className:$.a.slider,onSwiper:n,children:Object.keys(z[c]).map((function(e,a){var r=z[c][e],t=M[c][e];return Object(b.jsx)(W.a,{className:"flex justify-center items-center",children:Object(b.jsxs)("div",{className:"flex flex-col items-center",children:[Object(b.jsx)("div",{className:"rounded w-48 h-48 md:w-64 md:h-64",children:Object(b.jsx)("img",{className:"w-full h-full",src:"/assets/".concat(c,"/").concat(e,".png")})}),Object(b.jsx)("span",{className:"mt-2 text-center text-white text-lg font-black",children:r}),Object(b.jsx)("span",{className:"mt-2 flex items-center text-white text-lg",children:Object(b.jsx)("span",{className:"rounded px-3 py-2 font-black font-caesar text-sm ".concat(ae[t]),children:ee[t]})})]})},"".concat(c,"-").concat(e,"-").concat(a))}))})]})},te=[{src:"wookie",name:"Wookie",role:"Operations"},{src:"hercules",name:"Hercules",role:"Community Marketing"},{src:"diogenes",name:"Diogenes",role:"Legal"},{src:"perseus",name:"Perseus",role:"Finance"},{src:"ivoryblack",name:"IvoryBlack",role:"Artist"},{src:"rorro",name:"Rorro",role:"Dev"}],ne=function(){return Object(b.jsxs)("div",{className:"flex flex-col items-center p-8 md:p-16 w-full bg-gray-900",children:[Object(b.jsx)("h3",{className:"py-8 font-caesar text-3xl text-white",children:"Meet the Team"}),Object(b.jsx)("ul",{className:"max-w-7xl flex flex-wrap my-8 text-sm md:text-xl text-white",children:te.map((function(e,a){var r=e.src,t=e.name,n=e.role;return Object(b.jsxs)("li",{className:"flex flex-col items-center w-1/2 md:w-1/3 my-4",children:[Object(b.jsx)("img",{className:"rounded inline-block w-24 md:w-48",src:"/images/team/".concat(r,".jpeg")}),Object(b.jsxs)("div",{className:"pt-4 text-center",children:[Object(b.jsx)("p",{className:"font-black text-2xl",children:t}),Object(b.jsx)("p",{className:"font-thin",children:n})]})]},a)}))}),Object(b.jsx)("h3",{className:"py-8 font-caesar text-3xl text-white",children:"Contact Us"}),Object(b.jsxs)("ul",{className:"max-w-7xl flex flex-col md:flex-row my-8 text-sm md:text-xl text-white",children:[Object(b.jsx)("li",{className:"m-4",children:Object(b.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://discord.gg/ambrosians",className:"flex items-center",children:[Object(b.jsx)("img",{className:"rounded inline-block w-8 md:w-12",src:"/images/social/discord.png"}),Object(b.jsx)("p",{className:"pl-4 font-black",children:"Discord"})]})}),Object(b.jsx)("li",{className:"m-4",children:Object(b.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/AmbrosiansNFT",className:"flex items-center",children:[Object(b.jsx)("img",{className:"rounded inline-block w-8 md:w-12",src:"/images/social/twitter.png"}),Object(b.jsx)("p",{className:"pl-4 font-black",children:"Twitter"})]})})]}),Object(b.jsx)("button",{"aria-label":"scroll to top",className:"my-8",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},children:Object(b.jsx)("img",{src:"/images/logo.png",className:"w-48",label:"Ambrosians Logo"})}),Object(b.jsx)("p",{className:"my-8 text-white",children:"All rights reserved 2021 \xa9"})]})},se=[{icon:"vase",text:"1,112 Hand-drawn Generative Ambrosians"},{icon:"shield",text:"Tokenomics"},{icon:"harp",text:"Ownership and Commercial Use of Your NFT"},{icon:"sandal",text:"Airdrops and redeemable NFTs"}],oe=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),r=a[0],n=a[1],s=Object(t.useState)(!1),o=Object(l.a)(s,2),h=o[0],u=o[1];return Object(b.jsxs)("main",{children:[Object(b.jsxs)(N,{children:[Object(b.jsxs)(A,{url:"/images/backgrounds/1.jpg",children:[Object(b.jsx)(C,{level:"1",children:"Welcome To The Ambrosian Guild"}),Object(b.jsx)("div",{className:"flex flex-col py-8",children:Object(b.jsx)(p,{disabled:!0,children:"Sold Out"})})]}),Object(b.jsxs)(T,{children:[Object(b.jsx)("div",{className:"py-8 flex flex-wrap justify-center max-w-4xl",children:c.a(1,5).map((function(e){return Object(b.jsx)("div",{className:"p-2 md:p-4 w-1/2 md:w-1/4",children:Object(b.jsx)("img",{className:"rounded shadow-2xl",src:"/images/samples/".concat(e,".png")})},e)}))}),Object(b.jsxs)(H,{children:["In a place that knows no time, where Olympians live their days and the clouds look like gold, lies Mt. Olympus. This is the home of the Champions, Gods, and honorable Legends whose deeds shall be remembered for eternity.",r?"":".."]}),Object(b.jsxs)(k,{scrollOnCollapse:!0,expanded:r,children:[Object(b.jsx)(H,{children:"In the heart of the cosmos lies the land of the mortals and the darkness of the Underworld. The Greek cosmos is wide and vast. You can find everything from the Palace of Zeus to the Garden of Hesperides. If you dare to explore, you'll find the depth of Poseidon's Sea and maybe even Charon's boat at the River Styx. If you are valiant enough, you can peek into the Gates of the Underworld, or even the Abyss of Tartarus\u2026 where the Titans are patiently waiting for their time to reclaim what they deem theirs."}),Object(b.jsx)(H,{children:"For eons, far beyond what any human can grasp, the Gates that hold these Titans had remained closed. However, this was until Chaos, a God that precedes the universe, decided to make things interesting. Chaos, motivated by the same thing that granted him his name, tipped the balances of power and unleashed the Titans from their slumber."}),Object(b.jsx)(H,{children:"What comes next, is nothing short of a nightmare. The Titans finally freed from their shackles, used their power to breach the heavens and take Olympus by force. The battle was short. Olympians were not prepared for an attack of this magnitude. Tarnished by the unfamiliar taste of defeat and exile, they seeked refuge in the world of men."}),Object(b.jsx)(H,{children:"Anguished, and craving their sacred Ambrosia, Olympians who wanted their home back, mortals that would do anything to try the Gods' elixir, beings of the Underworld wanting to return the Titans to Tartarus out of spite, and even sacred creatures like nymphs and minotaurs, formed an alliance. An alliance bound to regress the hands of time. An alliance determined to imprison the Titans back where they belong. An alliance like no other. These are the Ambrosians."})]}),Object(b.jsxs)("button",{className:"flex items-center text-white",onClick:function(){return n(i.a)},children:["Read ",r?"less":"more",r?Object(b.jsx)(m.c,{width:38}):Object(b.jsx)(m.b,{width:38})]})]})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)(A,{url:"/images/backgrounds/2.jpg",children:Object(b.jsx)(C,{children:"Ambrosian Manifesto"})}),Object(b.jsx)(T,{children:Object(b.jsx)("img",{src:"/images/manifesto.png"})})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)(A,{url:"/images/backgrounds/3.jpg",children:Object(b.jsx)(C,{children:"Roadmap"})}),Object(b.jsx)(T,{children:Object(b.jsxs)("div",{className:"max-w-7xl flex flex-col lg:flex-row items-center",children:[Object(b.jsx)("ul",{className:"p-8 lg:p-16 md:w-1/2 text-sm md:text-xl text-white",children:se.map((function(e,a){var r=e.icon,t=e.text;return Object(b.jsxs)("li",{className:"flex items-center",children:[Object(b.jsx)("img",{className:"inline-block w-24 md:w-40",src:"/images/icons/".concat(r,".png")}),Object(b.jsx)("p",{children:t})]},a)}))}),Object(b.jsxs)("div",{className:"md:w-1/2",children:[Object(b.jsx)("button",{"aria-label":"Open roadmap preview",onClick:function(){return u(!0)},children:Object(b.jsx)("img",{src:"/images/roadmap.png"})}),Object(b.jsx)(d.a,{open:h,onClose:function(){return u(!1)},classNames:{modalContainer:"flex justify-center items-center"},styles:{root:{overflow:"auto"},modalContainer:{height:"unset"},modal:{maxWidth:"90%",padding:0,borderRadius:".25rem"}},children:Object(b.jsx)("img",{src:"/images/roadmap.png"})})]})]})})]}),Object(b.jsxs)(N,{children:[Object(b.jsx)(A,{url:"/images/backgrounds/4.jpg",children:Object(b.jsx)(C,{children:"Attribute List"})}),Object(b.jsx)(T,{children:Object(b.jsx)(re,{})})]}),Object(b.jsx)(N,{children:Object(b.jsx)(ne,{})})]})};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(oe,{})}),document.getElementById("root"))},71:function(e,a,r){e.exports={slider:"AttributeList_slider__3DYfW"}},80:function(e,a,r){}},[[107,1,2]]]);
//# sourceMappingURL=main.86e3e130.chunk.js.map
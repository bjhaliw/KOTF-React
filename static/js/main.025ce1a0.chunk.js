(this.webpackJsonpkotf=this.webpackJsonpkotf||[]).push([[0],{134:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),l=n.n(i),c=(n(134),n(5)),o=n(20),s=n(12),d=n(217),m=n(221),h=n(222),u=n(219),j=n(237),x=n(240),b=n(1),p=Object(d.a)((function(e){return{appBar:{background:"#2E3B55"},grid:{alignItems:"center",justifyContent:"center",alignContent:"center"}}}));function y(e){var t=p();return Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{position:"static",className:t.appBar,children:Object(b.jsx)(j.a,{padding:1,children:Object(b.jsxs)(m.a,{container:!0,spacing:2,className:t.grid,children:[Object(b.jsx)(m.a,{item:!0,xs:!0,children:Object(b.jsx)(h.a,{variant:"h3",children:"Knights of the Fallen"})}),Object(b.jsx)(m.a,{item:!0,children:Object(b.jsx)(x.a,{variant:"contained",color:"secondary",children:"Save Game"})}),Object(b.jsx)(m.a,{item:!0,children:Object(b.jsx)(x.a,{variant:"contained",color:"secondary",children:"Load Game"})})]})})})})}var f=n(153),g=n(241),O=Object(d.a)((function(e){return{text:{fontWeight:"bold",textShadow:"1px 1px #000000"},appBar:{background:"#A0522D"}}}));var v=function(e){var t=O(),n=Object(a.useState)(e.player),r=Object(s.a)(n,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){e.player!==i&&l(e.player)}),[e.player]),Object(b.jsxs)("div",{className:"PlayerInfo",children:[Object(b.jsx)(g.a,{item:!0,container:!0,paddingTop:2,paddingBottom:2,justifyContent:"center",children:Object(b.jsx)(g.a,{item:!0,children:Object(b.jsxs)(f.a,{variant:"h3",className:t.text,children:[i.name," the ",i.characterClass]})})}),Object(b.jsxs)(g.a,{container:!0,spacing:4,direction:"row",justifyContent:"center",paddingBottom:2,children:[Object(b.jsx)(g.a,{item:!0,children:Object(b.jsxs)(f.a,{className:t.text,variant:"h4",color:"red",children:["Health: ",i.health,"/",i.maxHealth]})}),Object(b.jsx)(g.a,{item:!0,children:Object(b.jsxs)(f.a,{variant:"h4",color:"blue",className:t.text,children:["Mana: ",i.mana,"/",i.maxMana]})}),Object(b.jsx)(g.a,{item:!0,children:Object(b.jsxs)(f.a,{variant:"h4",color:"gold",className:t.text,children:["Gold: ",i.money]})}),Object(b.jsx)(g.a,{item:!0,children:Object(b.jsxs)(f.a,{variant:"h4",color:"green",className:t.text,children:["Level: ",i.level]})}),Object(b.jsx)(g.a,{item:!0,children:Object(b.jsxs)(f.a,{variant:"h4",className:t.text,children:["Experience: ",i.experience]})})]})]})},C=n(145),w=n(231),k=n(106),H=n(243),T=n(228),A=n(236),I=n(227),B=n(229),S=n(244),D=n(238),M=n(245),E=n(56),P=function e(t,n,a,r,i){Object(E.a)(this,e),this.name=t,this.price=n,this.bodyLocation=a,this.skillType=r,this.skillValue=i},N=["children","value","index"],R=Object(d.a)((function(e){return{textArea:{minWidth:800,maxWidth:800,minHeight:610,maxHeight:610},grid:{justifyContent:"center",height:610,width:300},buttons:{width:150},dialog:{width:800,height:800}}}));function W(e){var t=e.children,n=e.value,a=e.index,r=Object(k.a)(e,N);return Object(b.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},r),{},{children:n===a&&Object(b.jsx)(B.a,{sx:{p:3},children:Object(b.jsx)(f.a,{children:t})})}))}function F(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var L=function(e){R();var t=e.onClose,n=(e.player,e.open),a=(e.setPlayer,function(){t()}),i=(new P("Sword of Truth",100,"Main Hand","Attack",10),new P("Staff of Sorrows",100,"Main Hand","Attack",10),new P("Bow of Dank Memes",100,"Main Hand","Attack",10),new P("Shield of Destiny",100,"Off Hand","Defense",10),new P("Orb of Mystery",100,"Off Hand","Defense",10),new P("Dagger of Daggers",100,"Off Hand","Defense",10),new P("Helmet of Destruction",100,"Helmet","Defense",10),new P("Wizard Hat of the Skies",100,"Helmet","Defense",10),new P("Leather Cap of Wimps",100,"Helmet","Defense",10),new P("Armor of Memes",100,"Armor","Defense",10),new P("Heaven's Robe",100,"Armor","Defense",10),new P("Leather Armor",100,"Armor","Defense",10),new P("Amulet of Smiting",100,"Amulet","Strength",10),new P("The Mind's Eye",100,"Amulet","Intelligence",10),new P("Pick of Destiny",100,"Amulet","Defense",10),new P("Ring of Stealth",100,"Ring","Defense",10),new P("The One True Ring",100,"Ring","Defense",10),new P("High School Class Ring",100,"Ring","Defense",10),r.a.useState(0)),l=Object(s.a)(i,2),c=l[0],d=l[1];return Object(b.jsxs)(A.a,{onClose:a,open:n,fullWidth:!0,maxWidth:"xl",children:[Object(b.jsx)(I.a,{children:Object(b.jsx)(H.a,{variant:"contained",onClick:a,color:"error",children:"X"})}),Object(b.jsx)(T.a,{children:Object(b.jsx)(f.a,{component:"center",variant:"h3",children:"General Store"})}),Object(b.jsx)(S.a,{children:Object(b.jsx)(B.a,{padding:5,justifyContent:"center",children:Object(b.jsxs)(B.a,{sx:{width:"100%"},padding:2,children:[Object(b.jsx)(B.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(b.jsxs)(D.a,{value:c,onChange:function(e,t){d(t)},"aria-label":"basic tabs example",centered:!0,children:[Object(b.jsx)(M.a,Object(o.a)({label:"Main Hand"},F(0))),Object(b.jsx)(M.a,Object(o.a)({label:"Off Hand"},F(1))),Object(b.jsx)(M.a,Object(o.a)({label:"Helmet"},F(2))),Object(b.jsx)(M.a,Object(o.a)({label:"Armor"},F(3))),Object(b.jsx)(M.a,Object(o.a)({label:"Amulet"},F(4))),Object(b.jsx)(M.a,Object(o.a)({label:"Ring"},F(5))),Object(b.jsx)(M.a,Object(o.a)({label:"Potions"},F(6)))]})}),Object(b.jsx)(W,{value:c,index:0,children:"Main Hand"}),Object(b.jsx)(W,{value:c,index:1,children:"Off Hand"}),Object(b.jsx)(W,{value:c,index:2,children:"Helmet"}),Object(b.jsx)(W,{value:c,index:3,children:"Armor"}),Object(b.jsx)(W,{value:c,index:4,children:"Amulet"}),Object(b.jsx)(W,{value:c,index:5,children:"Ring"}),Object(b.jsx)(W,{value:c,index:6,children:"Potions"})]})})})]})},K=n(230),V=n(246),Y=Object(d.a)((function(e){return{textArea:{minWidth:800,maxWidth:800,minHeight:410,maxHeight:410},grid:{alignItems:"center",justifyContent:"center",alignContent:"center",height:510,width:300},buttons:{width:150}}}));var G=function(e){var t=Y(),n=e.setLeaveTown,a=e.setInnOpen,r=e.setStoreOpen,i=e.setTownOpen;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B.a,{display:"flex",gap:10,alignContent:"center",alignItems:"center",justifyContent:"center",children:[Object(b.jsx)(x.a,{className:t.buttons,variant:"contained",color:"primary",onClick:function(){i(!1),a(!0)},children:"Inn"}),Object(b.jsx)(x.a,{className:t.buttons,variant:"contained",color:"primary",onClick:function(){return r(!0)},children:"Store"}),Object(b.jsx)(x.a,{className:t.buttons,variant:"contained",color:"primary",onClick:function(){i(!1),n(!0)},children:"Leave Town"})]})})};var z=function(e){Object(a.useEffect)((function(){document.getElementById("mainTextArea").value;var e="\n\nWelcome, ".concat(t.name,", to the Iron Horse Inn! Feel free to grab a seat anywhere. If you're interested, you can rent a room to replenish your health as well.\n\nPrices for the rooms are as follows:\n\nLuxury Room (50 Gold): Feel well-rested! You will receive a 25% boost to your health and mana.\nRegular Room (20 Gold): A cozy room for you to relax. Fully restore your health and mana.\nCheap Room (10 Gold): Not much in the way of comfort. Regain only 25% of your max health and mana.");document.getElementById("mainTextArea").value+=e,document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight}),[]);var t=e.player,n=e.setPlayer,r=e.returnToTown,i=e.setTownOpen;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B.a,{display:"flex",gap:5,alignItems:"center",justifyContent:"center",alignContent:"center",children:[Object(b.jsx)(x.a,{variant:"contained",onClick:function(){if(t.money>=50){var e=t.maxHealth+.25*t.maxHealth,a=t.maxMana+.25*t.maxMana,r=Object(o.a)({},t);r.health=e,r.mana=a,r.money=r.money-50,n(r),document.getElementById("mainTextArea").value+="\n\nYou wake up the next morning feeling better than ever, and have a slight pep in your step now",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight}},disabled:t.money<50,color:"primary",children:"Luxury room"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){if(t.money>=20){var e=Object(o.a)({},t);e.health<e.maxHealth&&(e.health=e.maxHealth),e.mana<e.maxMana&&(e.mana=e.maxMana),e.money=e.money-20,n(e),document.getElementById("mainTextArea").value+="\n\nYou rest for the night and wake up feeling fully rejuvinated",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight}},disabled:t.money<20,color:"primary",children:"Regular Room"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){if(t.money>=10){var e=Object(o.a)({},t);e.health<e.maxHealth&&(e.health=e.health+.25*e.maxHealth,e.health>e.maxHealth&&(e.health=e.maxHealth)),e.mana<e.maxMana&&(e.mana=e.maxMana+.25*e.maxMana,e.mana<e.maxMana&&(e.mana=e.maxMana)),e.money=e.money-10,n(e),document.getElementById("mainTextArea").value+="\n\nYou toss and turn the entire night and barely get any sleep.",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight}},disabled:t.money<10,color:"primary",children:"Cheap Room"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){document.getElementById("mainTextArea").value+="\n\nYou walk back to the middle of the town.",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight,i(!0),r()},color:"primary",children:"Back To Town"})]})})},J=function e(t,n,a,r,i){Object(E.a)(this,e),this.typeMonster=t,this.health=n,this.attack=a,this.experience=r,this.loot=i};function Q(e){var t=function(){var e=Math.floor(100*Math.random());switch(!0){case e<=25:return"Werewolf";case e<=50:return"Goblin";case e<=75:return"Slime";case e<=100:return"Dragon"}}(),n=Math.ceil(e.maxHealth-.2*e.maxHealth),a=Math.floor(e.maxHealth+.2*e.maxHealth),r=Math.floor(Math.random()*(a-n)+n),i=Math.ceil(e.attack-.1*e.attack),l=Math.floor(e.attack+.1*e.attack),c=Math.floor(Math.random()*(l-i)+i),o=(Math.ceil(e.level),Math.ceil(e.level+6^20)),s=Math.ceil(e.level+15^20),d=Math.floor(Math.random()*(s-o)+o);return new J(t,r,c,13,d)}var U=function(e){e.player,e.setPlayer;var t=e.returnToTown,n=e.setTownOpen,r=e.setSleep,i=e.setBattleOpen;return Object(a.useEffect)((function(){document.getElementById("mainTextArea").value+="\n\nYou walk out into the wilderness in search of an adventure.",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B.a,{display:"flex",gap:5,alignItems:"center",justifyContent:"center",alignContent:"center",children:[Object(b.jsx)(x.a,{variant:"contained",onClick:function(){i(!0),t()},color:"primary",children:"Random Battle"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){},color:"primary",children:"Quest Battle"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){r(!0)},color:"primary",children:"Set up Camp"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){document.getElementById("mainTextArea").value+="\n\nYou walk back to the middle of the town.",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight,t(),n(!0)},color:"primary",children:"Back To Town"})]})})};var X=function(e){var t=e.player,n=(e.setPlayer,e.monster,e.setMonster,e.returnToOutside),r=e.leaveBattle;return Object(a.useEffect)((function(){Q(t);document.getElementById("mainTextArea").value+="\n\nHo, mukatta kurono ka? Nigetsu ni kono DIO ni chikazuite kuruno da? Sekkaku sofu no Josephu ga watashi no za warudo no shotai wo. Shiken shuryu chaimu chokuzen made mondai yo toitte iru jukensee ne you na? Kisshi koita kibun de wo shietekure ta to yuu no ni?",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B.a,{display:"flex",gap:5,alignItems:"center",justifyContent:"center",alignContent:"center",children:[Object(b.jsx)(x.a,{variant:"contained",onClick:function(){},color:"primary",children:"Attack"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){},color:"primary",children:"Magic"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){},color:"primary",children:"Use Item"}),Object(b.jsx)(x.a,{variant:"contained",onClick:function(){document.getElementById("mainTextArea").value+="\n\nYou run like the coward that you are.",document.getElementById("mainTextArea").scrollTop=document.getElementById("mainTextArea").scrollHeight,r(),n()},color:"primary",children:"Run Away"})]})})},q=Object(d.a)((function(e){return{textArea:{minWidth:800,maxWidth:800,minHeight:410,maxHeight:410},grid:{alignItems:"center",justifyContent:"center",alignContent:"center",height:510,width:300},buttons:{width:150}}}));var Z=function(e){var t=q(),n=Object(a.useState)(!0),r=Object(s.a)(n,2),i=r[0],l=r[1],c=Object(a.useState)(!1),o=Object(s.a)(c,2),d=o[0],m=o[1],u=Object(a.useState)(!1),j=Object(s.a)(u,2),x=j[0],p=j[1],y=Object(a.useState)(!1),f=Object(s.a)(y,2),g=f[0],O=f[1],v=Object(a.useState)(!1),k=Object(s.a)(v,2),H=k[0],T=k[1];return Object(a.useEffect)((function(){console.log(g)}),[g]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(K.a,{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center",gap:15,padding:2,children:[Object(b.jsxs)(C.a,{elevation:2,children:[Object(b.jsx)(h.a,{variant:"h5",component:"center",style:{fontWeight:"bold"},children:"Player Stats"}),Object(b.jsx)(V.a,{variant:"middle"}),Object(b.jsxs)(K.a,{display:"inline-grid",gap:5,className:t.grid,children:[Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Strength: ",e.player.strength]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Dexterity: ",e.player.dexterity]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Intelligence: ",e.player.intelligence]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Charisma: ",e.player.charisma]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Constitution: ",e.player.constitution]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Wisdom: ",e.player.wisdom]})]})]}),Object(b.jsxs)(K.a,{display:"inline-grid",gap:5,alignContent:"center",alignItems:"center",justifyContent:"center",children:[Object(b.jsx)(w.a,{id:"mainTextArea",className:t.textArea,defaultValue:"You're standing in the middle of the town. The sun shines brightly on you as people go about their day around you.",onKeyDown:function(e){return e.preventDefault()},placeholder:"",minRows:50}),i?Object(b.jsx)(G,{setInnOpen:m,setStoreOpen:p,setTownOpen:function(){l(!1)},setLeaveTown:O}):null,d?Object(b.jsx)(z,{player:e.player,setPlayer:e.setPlayer,returnToTown:function(){m(!1)},open:d,setTownOpen:l,sleep:e.sleep,setSleep:e.setSleep}):null,g?Object(b.jsx)(U,{player:e.player,setPlayer:e.setPlayer,returnToTown:function(){return O(!1)},setTownOpen:l,setLeaveBattle:function(){return T(!1)},setBattleOpen:T,sleep:e.sleep,setSleep:e.setSleep}):null,H?Object(b.jsx)(X,{player:e.player,setPlayer:e.setPlayer,returnToOutside:function(){return O(!0)},leaveBattle:function(){return T(!1)}}):null]}),Object(b.jsxs)(C.a,{elevation:2,children:[Object(b.jsx)(h.a,{variant:"h5",component:"center",style:{fontWeight:"bold"},children:"Player Inventory"}),Object(b.jsx)(V.a,{variant:"middle"}),Object(b.jsxs)(K.a,{display:"inline-grid",gap:5,width:300,className:t.grid,children:[Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Main-Hand: ",e.player.mainHand.name+", "+e.player.mainHand.skill+" +"+e.player.mainHand.value]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Off-Hand: ",e.player.offHand.name+", "+e.player.offHand.skill+" +"+e.player.offHand.value]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Helmet: ",e.player.helmet.name?e.player.helmet.name+", "+e.player.helmet.skill+" +"+e.player.helmet.value:"None"]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Armor:  ",e.player.armor.name?e.player.armor.name+", "+e.player.armor.skill+" +"+e.armor.armor.value:"None"]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Amulet:  ",e.player.amulet.name?e.player.amulet.name+", "+e.player.amulet.skill+" +"+e.player.amulet.value:"None"]}),Object(b.jsxs)(h.a,{variant:"h6",component:"center",children:["Ring:  ",e.player.ring.name?e.player.ring.name+", "+e.player.ring.skill+" +"+e.player.ring.value:"None"]})]})]})]}),Object(b.jsx)(L,{open:x,onClose:function(){p(!1)},player:e.player,setPlayer:e.setPlayer})]})},$=n(234),_=n(233);var ee=function(e){var t=Object(a.useState)(10),n=Object(s.a)(t,2),r=n[0],i=n[1],l=function(t){e.player[t.target.name]<Number(t.target.value)?0!==r?i(r-1):0===r&&(document.getElementById(t.target.name).value=document.getElementById(t.target.name).value-1):i(r+1),0!==r&&e.handleValueChange(t.target.name,Number(t.target.value))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(K.a,{display:"grid",justifyContent:"center",alignItems:"flex-start",gap:5,padding:2,children:[Object(b.jsx)(h.a,{component:"center",variant:"h4",children:"Character Creation"}),Object(b.jsxs)(K.a,{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:5,children:[Object(b.jsx)($.a,{id:"name",name:"name",label:"Player Name",onChange:e.handleNameChange}),Object(b.jsx)(_.a,{disablePortal:!0,name:"characterClass",id:"characterClass",options:["Warrior","Rogue","Wizard"],sx:{width:200},onChange:e.handleCharacterClassChange,renderInput:function(e){return Object(b.jsx)($.a,Object(o.a)(Object(o.a)({},e),{},{label:"Character Class"}))}})]}),Object(b.jsxs)(K.a,{display:"flex",gap:5,children:[Object(b.jsx)($.a,{id:"strength",name:"strength",type:"number",inputProps:{min:1,style:{textAlign:"center"}},onChange:l,defaultValue:10,onKeyDown:function(e){return e.preventDefault()},label:"Strength"}),Object(b.jsx)($.a,{id:"dexterity",name:"dexterity",type:"number",inputProps:{min:1,style:{textAlign:"center"}},onChange:l,defaultValue:10,onKeyDown:function(e){return e.preventDefault()},label:"Dexterity"}),Object(b.jsx)($.a,{id:"intelligence",name:"intelligence",type:"number",inputProps:{min:1,style:{textAlign:"center"}},onChange:l,defaultValue:10,onKeyDown:function(e){return e.preventDefault()},label:"Intelligence"})]}),Object(b.jsxs)(K.a,{display:"flex",gap:5,children:[Object(b.jsx)($.a,{id:"charisma",name:"charisma",type:"number",inputProps:{min:1,style:{textAlign:"center"}},onChange:l,defaultValue:10,onKeyDown:function(e){return e.preventDefault()},label:"Charisma"}),Object(b.jsx)($.a,{id:"constitution",name:"constitution",type:"number",inputProps:{min:1,style:{textAlign:"center"}},onChange:l,defaultValue:10,onKeyDown:function(e){return e.preventDefault()},label:"Constitution"}),Object(b.jsx)($.a,{id:"wisdom",name:"wisdom",type:"number",inputProps:{min:1,style:{textAlign:"center"}},onChange:l,defaultValue:10,onKeyDown:function(e){return e.preventDefault()},label:"Wisdom"})]}),Object(b.jsx)(K.a,{display:"flex",gap:5,justifyContent:"center",children:Object(b.jsx)($.a,{id:"remainingPoints",name:"remainingPoints",inputProps:{min:0,style:{textAlign:"center"}},value:r,onKeyDown:function(e){return e.preventDefault()},label:"Remaining Points"})}),Object(b.jsx)(K.a,{display:"flex",gap:5,justifyContent:"center",children:Object(b.jsx)(x.a,{name:"createCharacter",id:"createCharacter",variant:"contained",color:"secondary",onClick:e.createCharacter,children:"Create Character"})})]})})},te=n(232),ne=n(235),ae=Object(ne.a)({});var re=function(){var e=ae(),t=Object(a.useState)({name:"",characterClass:"",strength:10,dexterity:10,intelligence:10,charisma:10,constitution:10,wisdom:10,money:10,health:10,mana:10,level:1,experience:0,helmet:{},armor:{},amulet:{},ring:{}}),n=Object(s.a)(t,2),r=n[0],i=n[1],l=Object(a.useState)(!1),d=Object(s.a)(l,2),m=d[0],h=d[1],u=Object(a.useState)(!0),j=Object(s.a)(u,2),x=j[0],p=j[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(y,{}),m?Object(b.jsxs)("div",{className:x?e.sleep:e.main,children:[Object(b.jsx)(v,{player:r}),Object(b.jsx)(te.a,{}),Object(b.jsx)(Z,{player:r,setPlayer:i,sleep:x,setSleep:p})]}):Object(b.jsx)(ee,{player:r,setPlayer:i,handleNameChange:function(e){i(Object(o.a)(Object(o.a)({},r),{},Object(c.a)({},e.target.name,e.target.value)))},handleValueChange:function(e,t){i(Object(o.a)(Object(o.a)({},r),{},Object(c.a)({},e,t)))},handleCharacterClassChange:function(e,t){i(Object(o.a)(Object(o.a)({},r),{},{characterClass:t}))},createCharacter:function(){(console.log("In the character creator"),""!==r.name&&""!==r.characterClass)&&(window.confirm("Create the character ".concat(r.name,", the ").concat(r.characterClass,"?"))&&(!function(e){"Warrior"===e.characterClass?(e.strength+=5,e.constitution+=5,e.mainHand={name:"Short Sword",skill:"Attack",value:6},e.offHand={name:"Small Shield",skill:"Defense",value:5},e.attack=e.strength+e.mainHand.value,e.defense=e.constitution+e.offHand.value):"Wizard"===e.characterClass?(e.intelligence+=5,e.wisdom+=5,e.mainHand={name:"Staff",skill:"Attack",value:6},e.offHand={name:"Magic Book",skill:"Defense",value:5},e.attack=e.intelligence+e.mainHand.value,e.defense=e.constitution+e.offHand.value):"Rogue"===e.characterClass&&(e.charisma+=5,e.dexterity+=5,e.mainHand={name:"Bow",skill:"Attack",value:6},e.offHand={name:"Wooden Buckler",skill:"Defense",value:2},e.attack=e.dexterity+e.mainHand.value,e.defense=e.constitution+e.offHand.value);e.money*=e.charisma,e.health*=e.constitution,e.maxHealth=e.health,e.mana*=e.intelligence,e.maxMana=e.mana}(r),h(!0)))}})]})};var ie=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(re,{})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),i(e),l(e)}))};l.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),le()}},[[143,1,2]]]);
//# sourceMappingURL=main.025ce1a0.chunk.js.map
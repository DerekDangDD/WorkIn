(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);for(var n=a(0),c=a.n(n),r=a(20),l=a.n(r),o=a(8),i=a(9),m=a(11),s=a(10),d=a(12),u=a(6),p=(a(14),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"navigation-title"},"Deck of Cards"),c.a.createElement("div",{className:"ui three column grid navigation"},c.a.createElement("div",{className:"column"}),c.a.createElement("div",{className:"ui five column grid"},c.a.createElement("div",{className:"column"}),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"pad"},c.a.createElement(u.b,{exact:!0,to:"/",className:"nav-link",activeStyle:{textDecoration:"underline",color:"black"}},"Home"))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"pad"},c.a.createElement(u.b,{exact:!0,to:"/about",className:"nav-link",activeStyle:{textDecoration:"underline",color:"black"}},"About"))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"pad"},c.a.createElement(u.b,{exact:!0,to:"/contact",className:"nav-link",activeStyle:{textDecoration:"underline",color:"black"}},"Services"))),c.a.createElement("div",{className:"column"})),c.a.createElement("div",{className:"column"})))}}]),t}(c.a.Component)),E=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("div",{className:"app"},"About"))},h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={mood:"happy"},a.onClick=function(){"shocked"!==a.state.mood?a.setState({mood:"shocked"}):a.setState({mood:"happy"})},a.onMouseEnter=function(){a.setState({mood:"blissful"})},a.onMouseLeave=function(){a.setState({mood:"happy"})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({mood:"happy"})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("div",{className:"app"},"Services"))}}]),t}(c.a.Component),v=[],f=0;f<20;f++){var b="./pages/p"+f.toString()+".jpg",g="./thumbnails/p"+f.toString()+".jpg";v.push({original:b,thumbnail:g})}var k="io7hsi37ypwv",y="https://opengameart.org/sites/default/files/card%20back%20red.png",w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).httpGet=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},a.makeDeck=function(){var e=JSON.parse(a.httpGet("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"));k=e.deck_id,console.log("created new deck: "+k)},a.drawCard=function(){var e="https://deckofcardsapi.com/api/deck/"+k+"/draw/?count=1",t=JSON.parse(a.httpGet(e));console.log("drawing card"),y=t.cards[0].image,document.getElementById("card").src="https://opengameart.org/sites/default/files/card%20back%20red.png",document.getElementById("number_of_cards").innerHTML="Remaining cards: "+t.remaining},a.newGame=function(){a.makeDeck(),document.getElementById("number_of_cards").innerHTML="Remaining cards: 52",document.getElementById("card").src="https://opengameart.org/sites/default/files/card%20back%20red.png"},a.flipCard=function(){document.getElementById("card").src=y},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("div",{className:"app"},c.a.createElement("p",{id:"main",style:{color:"green"}},c.a.createElement("span",{id:"number_of_cards"},'"Remaining cards: 52"')),c.a.createElement("div",null,c.a.createElement("img",{id:"card",src:"https://deckofcardsapi.com/static/img/XX.png",width:300,height:400,alt:"card"})),c.a.createElement("p",null),c.a.createElement("button",{onClick:this.newGame},"New Game/Reshuffle"),c.a.createElement("button",{onClick:this.drawCard},"Draw card"),c.a.createElement("button",{onClick:this.flipCard},"Flip card"),c.a.createElement("div",null,c.a.createElement("iframe",{width:420,height:345,src:"https://www.youtube.com/embed/tgbNymZ7vqY",title:"video"}))))}}]),t}(c.a.Component),N=a(5),j=function(){return c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/"},c.a.createElement(w,null)),c.a.createElement(N.a,{exact:!0,path:"/about"},c.a.createElement(E,null)),c.a.createElement(N.a,{exact:!0,path:"/contact"},c.a.createElement(h,null)))};l.a.render(c.a.createElement(u.a,{basename:window.location.pathname||""},c.a.createElement(j,null)),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.16ccd879.chunk.js.map
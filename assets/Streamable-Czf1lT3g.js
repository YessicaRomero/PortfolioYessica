import{r as M,a as D,b as E,g as T}from"./index-BqsPkfY-.js";function x(p,s){for(var u=0;u<s.length;u++){const o=s[u];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in p)){const c=Object.getOwnPropertyDescriptor(o,i);c&&Object.defineProperty(p,i,c.get?c:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var d,P;function A(){if(P)return d;P=1;var p=Object.create,s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,v=(r,e,t)=>e in r?s(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,O=(r,e)=>{for(var t in e)s(r,t,{get:e[t],enumerable:!0})},y=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of o(e))!c.call(r,l)&&l!==t&&s(r,l,{get:()=>e[l],enumerable:!(n=u(e,l))||n.enumerable});return r},S=(r,e,t)=>(t=r!=null?p(i(r)):{},y(!r||!r.__esModule?s(t,"default",{value:r,enumerable:!0}):t,r)),j=r=>y(s({},"__esModule",{value:!0}),r),a=(r,e,t)=>(v(r,typeof e!="symbol"?e+"":e,t),t),m={};O(m,{default:()=>h}),d=j(m);var f=S(M()),_=D(),b=E();const L="https://cdn.embed.ly/player-0.1.0.min.js",w="playerjs";class h extends f.Component{constructor(){super(...arguments),a(this,"callPlayer",_.callPlayer),a(this,"duration",null),a(this,"currentTime",null),a(this,"secondsLoaded",null),a(this,"mute",()=>{this.callPlayer("mute")}),a(this,"unmute",()=>{this.callPlayer("unmute")}),a(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,_.getSDK)(L,w).then(t=>{this.iframe&&(this.player=new t.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:n,seconds:l})=>{this.duration=n,this.currentTime=l}),this.player.on("buffered",({percent:n})=>{this.duration&&(this.secondsLoaded=this.duration*n)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e=this.props.url.match(b.MATCH_URL_STREAMABLE)[1],t={width:"100%",height:"100%"};return f.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:t,allow:"encrypted-media; autoplay; fullscreen;"})}}return a(h,"displayName","Streamable"),a(h,"canPlay",b.canPlay.streamable),d}var g=A();const C=T(g),R=x({__proto__:null,default:C},[g]);export{R as S};

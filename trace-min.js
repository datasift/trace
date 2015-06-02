(function(e,t){typeof define=="function"&&define.amd?define(["d3"],t):e.Trace=t(e.d3)})(this,function(e){var t,n,r;return function(e){function d(e,t){return h.call(e,t)}function v(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(f=0;f<e.length;f+=1){h=e[f];if(h===".")e.splice(f,1),f-=1;else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function m(t,n){return function(){return s.apply(e,p.call(arguments,0).concat([t,n]))}}function g(e){return function(t){return v(t,e)}}function y(e){return function(t){a[e]=t}}function b(t){if(d(f,t)){var n=f[t];delete f[t],c[t]=!0,i.apply(e,n)}if(!d(a,t)&&!d(c,t))throw new Error("No "+t);return a[t]}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice;o=function(e,t){var n,r=w(e),i=r[0];return e=r[1],i&&(i=v(i,t),n=b(i)),i?n&&n.normalize?e=n.normalize(e,g(t)):e=v(e,t):(e=v(e,t),r=w(e),i=r[0],e=r[1],i&&(n=b(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return m(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:E(e)}}},i=function(t,n,r,i){var s,l,h,p,v,g=[],w;i=i||t;if(typeof r=="function"){n=!n.length&&r.length?["require","exports","module"]:n;for(v=0;v<n.length;v+=1){p=o(n[v],i),l=p.f;if(l==="require")g[v]=u.require(t);else if(l==="exports")g[v]=u.exports(t),w=!0;else if(l==="module")s=g[v]=u.module(t);else if(d(a,l)||d(f,l)||d(c,l))g[v]=b(l);else{if(!p.p)throw new Error(t+" missing "+l);p.p.load(p.n,m(i,!0),y(l),{}),g[v]=a[l]}}h=r.apply(a[t],g);if(t)if(s&&s.exports!==e&&s.exports!==a[t])a[t]=s.exports;else if(h!==e||!w)a[t]=h}else t&&(a[t]=r)},t=n=s=function(t,n,r,a,f){return typeof t=="string"?u[t]?u[t](n):b(o(t,n).f):(t.splice||(l=t,n.splice?(t=n,n=r,r=null):t=e),n=n||function(){},typeof r=="function"&&(r=a,a=f),a?i(e,t,n,r):setTimeout(function(){i(e,t,n,r)},4),s)},s.config=function(e){return l=e,l.deps&&s(l.deps,l.callback),s},t._defined=a,r=function(e,t,n){t.splice||(n=t,t=[]),!d(a,e)&&!d(f,e)&&(f[e]=[e,t,n])},r.amd={jQuery:!0}}(),r("../tools/almond",function(){}),r("trace/base",["d3"],function(e){var t=function(e){this.options={data:{},points:!0,width:500,height:500,tooltips:function(e){return JSON.stringify(e)},legend:!0,margin:[20,20,20,20],xTickCount:5,yTickCount:5,zoom:!1,colors:["#e74c3c","#e67e22","#f1c40f","#2ecc71","#1abc9c","#3498db","#9b59b6"]}};return t.prototype.update=function(e){e&&(this.options.data=e),this._tick()},t.prototype.colors=function(t){return this.colorScale||(this.colorScale=e.scale.ordinal().range(this.options.colors)),this.colorScale(t)},t.prototype._extend=function(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){for(var n in t)e[n]=t[n]}),e},t.prototype._getExtremes=function(t,n,r){var i=[];return Object.keys(t).forEach(function(e){t[e].forEach(function(e){i.push(e[n])})}),e[r](i)},t.prototype._tick=function(){this.xaxis&&this.xaxis.call(e.svg.axis().scale(this.xfunc).orient("bottom").ticks(5).tickFormat(this.options.xTickFormat)),this.yaxis&&this.yaxis.call(e.svg.axis().scale(this.yfunc).orient("left").ticks(5).tickFormat(this.options.yTickFormat)),this.options.gridlines&&this.gridlines.data(this.yfunc.ticks(5)).transition().duration(100).ease("linear").attr("y1",function(e){return this.yfunc(e)}.bind(this)).attr("y2",function(e){return this.yfunc(e)}.bind(this))},t.prototype._mouseover=function(t){if(this.options.mouseover){this.options.mouseover(t);return}this.tooltip&&(this.tooltip=document.createElement("div"),this.tooltip.className="trace-tooltip",this.tooltip.innerHTML=this.options.tooltips(t),this.tooltip.style.left=e.event.clientX+window.scrollX+"px",this.tooltip.style.top=e.event.clientY+window.scrollY+"px",document.body.appendChild(this.tooltip))},t.prototype._zoom=function(){this.zoom=e.behavior.zoom().scaleExtent([1,10]).on("zoom",function(){this.svg.attr("transform","translate("+e.event.translate+")scale("+e.event.scale+")")}.bind(this)),this.drag=e.behavior.drag().origin(function(e){return e}).on("dragstart",this._dragstarted.bind(this)).on("drag",this._dragged.bind(this)).on("dragend",this._dragended.bind(this))},t.prototype._dragstarted=function(){},t.prototype._dragged=function(){},t.prototype._dragended=function(){},t.prototype._mouseout=function(e){if(this.options.mouseout){this.options.mouseout(e);return}this.tooltip&&this.tooltip.parentNode.removeChild(this.tooltip)},t.prototype._build=function(){this.options.showx&&(this.xaxis=this.chart.append("g").attr("class","trace-xaxis").attr("transform","translate(0,"+(this.options.height-this.options.margin[0]-this.options.margin[2])+")").call(e.svg.axis().scale(this.xfunc).orient("bottom").ticks(this.options.xTickCount).tickFormat(this.options.xTickFormat))),this.options.showy&&(this.yaxis=this.chart.append("g").attr("class","trace-yaxis left").attr("transform","translate(0,0)").call(e.svg.axis().scale(this.yfunc).orient("left").ticks(this.options.yTickCount).tickFormat(this.options.yTickFormat))),this.options.showy2&&(this.yaxis2=this.chart.append("g").attr("class","trace-yaxis right").attr("transform","translate("+(this.options.width-this.options.margin[1]-this.options.margin[3])+",0)").call(e.svg.axis().scale(this.yfunc).orient("right").ticks(this.options.yTickCount).tickFormat(this.options.yTickFormat))),this.options.gridlines&&(this.gridlines=this.chart.selectAll("line.trace-gridline").data(typeof this.yfunc.ticks!="undefined"?this.yfunc.ticks(this.options.yTickCount):this.xfunc.ticks(this.options.xTickCount)).enter().append("line").attr("class","trace-gridline").attr("x1",0).attr("x2",this.options.width-this.options.margin[1]-this.options.margin[3]).attr("y1",function(e){return this.yfunc(e)}.bind(this)).attr("y2",function(e){return this.yfunc(e)}.bind(this)).attr("stroke-dasharray","1, 1")),this.options.legend&&this._legend();if(this.options.tooltip){if(!this.options.points)throw"Tooltips require points to be set";this._tooltips()}},t.prototype._legend=function(){var t=Object.keys(this.options.data).filter(function(e){if(e&&e!=="undefined")return e});e.select(this.options.div).append("div").attr("class","trace-legend").selectAll("div.label").data(t).enter().append("div").attr("class","label").html(function(e,t){return'<div class="key" style="border-color:'+this.colors(t)+'">'+e+"</div>"}.bind(this))},t}),r("trace/LineChart",["d3","./base"],function(e,t){var n=function(e){t.call(this),this._extend(this.options,{showx:!0,showy:!0,showpoints:!0,interpolate:"linear",gridlines:!0,brush:!1},e),this.lines={},this.areas={},this.paths={},this.points={},this.series=[],this.legend=[],this._build()};return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype._calculate=function(){var t=this._getExtremes(this.options.data,0,"max"),n=this._getExtremes(this.options.data,0,"min"),r=this._getExtremes(this.options.data,1,"min"),i=this._getExtremes(this.options.data,1,"max"),s=this.options.margin,o=this.options.height,u=this.options.width;r=toString.call(r)==="[object Date]"?r:r>0?0:r,this.xfunc=toString.call(n)==="[object Date]"?e.time.scale():e.scale.linear(),this.xfunc.domain([n,t]).range([0,u-s[1]-s[3]]),this.yfunc=toString.call(i)==="[object Date]"?e.time.scale():e.scale.linear(),this.yfunc.domain([r,i]).range([o-s[0]-s[2],0])},n.prototype._tick=function(){this._calculate(),Object.keys(this.paths).forEach(function(e){this.paths[e].transition().duration(100).ease("linear").attr("d",this.lines[e](this.options.data[e])),this.options.showpoints&&this.points[e].data(this.options.data[e]).transition().duration(100).ease("linear").attr("cx",function(e,t){return this.xfunc(e[0])}.bind(this)).attr("cy",function(e,t){return this.yfunc(e[1])}.bind(this))}.bind(this)),t.prototype._tick.call(this)},n.prototype._draw=function(){var t=this.options.margin,n=this.options.height,r=this.options.width;this.chart=e.select(this.options.div).append("svg").attr("class","trace-linegraph").attr("height",n).attr("width",r).attr("viewbox","0 0 "+r+" "+n).attr("perserveAspectRatio","xMinYMid").append("g").attr("transform","translate("+t[3]+","+t[0]+")"),this.series.forEach(function(r){this.lines[r]=e.svg.line().x(function(e){return e[0]?this.xfunc(e[0]):this.xfunc(0)}.bind(this)).y(function(e){return e[1]?this.yfunc(e[1]):this.yfunc(0)}.bind(this)).interpolate(this.options.interpolate),this.areas[r]=e.svg.area().x(function(e){return this.xfunc(e[0])}.bind(this)).y0(n-t[0]-t[2]).y1(function(e){return this.yfunc(e[1])}.bind(this))}.bind(this)),Object.keys(this.lines).forEach(function(e,t){var n=this.colors(t);this.paths[e]=this.chart.append("path").attr("d",this.lines[e](this.options.data[e])).attr("class","trace-"+e).attr("stroke",n).attr("stroke-width","2px").attr("fill","none"),this.chart.append("path").datum(this.options.data[e]).attr("class","area").attr("d",this.areas[e]).attr("fill",n).attr("opacity",.2),this.options.showpoints&&(this.points[e]=this.chart.selectAll(".point").data(this.options.data[e]).enter().append("circle").attr("fill",n).attr("class","trace-"+e).attr("cx",function(e,t){return this.xfunc(e[0])}.bind(this)).attr("cy",function(e,t){return this.yfunc(e[1])}.bind(this)).attr("r",function(e,t){return 3}).on("mouseover",this._mouseover.bind(this)).on("mouseout",this._mouseout.bind(this)))}.bind(this));if(this.options.brush){var i=e.svg.brush().x(this.xfunc).on("brushend",function(){if(!e.event.sourceEvent)return;this.options.brush(i.extent())}.bind(this)),s=this.chart.append("g").attr("class","brush").call(i).call(i.event);s.selectAll("rect").attr("height",this.options.height-this.options.margin[0]-this.options.margin[2])}},n.prototype._build=function(){this.series=Object.keys(this.options.data),this._calculate(),this._draw(),t.prototype._build.call(this)},n}),r("trace/BarChart",["d3","./base"],function(e,t){var n=function(e){t.call(this),this._extend(this.options,{showx:!0,showy:!0,gridlines:!0},e),this._build()};return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype._calculate=function(){var t=this.options.margin,n=this.options.height,r=this.options.width,i=[];Object.keys(this.options.data).forEach(function(e){this.options.data[e].forEach(function(e){i.indexOf(e[0])===-1&&i.push(e[0])})}.bind(this)),this.mappedData=Object.keys(this.options.data).map(function(e){return i.map(function(t){var n=!1;return this.options.data[e].forEach(function(e){e[0]===t&&(n=e)}),n?{x:n[0],y:+n[1],series:e}:{x:t,y:0,series:e}}.bind(this))}.bind(this)),this.stacked=e.layout.stack()(this.mappedData),this.xfunc=e.scale.ordinal().rangeRoundBands([0,r-t[1]-t[3]],.1),this.yfunc=e.scale.linear().range([n-t[0]-t[2],0]),this.xfunc.domain(this.stacked[0].map(function(e){return e.x}));var s=[],o=[];this.stacked.forEach(function(e){e.forEach(function(e){s.push(e.y),o.push(e.y+e.y0)})}),this.yfunc.domain([0,e.max(o)])},n.prototype._tick=function(){this._calculate(),this.group.data(this.stacked),this.group.selectAll("rect").data(Object).transition().duration(100).ease("linear").attr("x",function(e){return this.xfunc(e.x)}.bind(this)).attr("y",function(e){return this.yfunc(e.y+e.y0)}.bind(this)).attr("height",function(e){return this.yfunc(e.y0)-this.yfunc(e.y+e.y0)}.bind(this)).attr("width",this.xfunc.rangeBand()),t.prototype._tick.call(this)},n.prototype._draw=function(){var n=this.options.margin,r=this.options.height,i=this.options.width;this.chart=e.select(this.options.div).append("svg").attr("class","trace-barchart").attr("width",i).attr("height",r).attr("viewbox","0 0 "+i+" "+r).attr("perserveAspectRatio","xMinYMid").append("g").attr("transform","translate("+n[3]+","+n[0]+")"),t.prototype._build.call(this),this.group=this.chart.selectAll("g.trace-bargroup").data(this.stacked).enter().append("g").attr("class","trace-bargroup").style("fill",function(e,t){return this.colors(t)}.bind(this)),this.rect=this.group.selectAll("rect").data(Object).enter().append("rect").attr("x",function(e){return this.xfunc(e.x)}.bind(this)).attr("y",function(e){return this.yfunc(e.y+e.y0)}.bind(this)).attr("height",function(e){return this.yfunc(e.y0)-this.yfunc(e.y+e.y0)}.bind(this)).attr("width",this.xfunc.rangeBand()).attr("class",function(e){return"trace-"+e.series}).on("mouseover",this._mouseover.bind(this)).on("mouseout",this._mouseout.bind(this))},n.prototype._build=function(){this._calculate(),this._draw()},n}),r("trace/PieChart",["d3","./base"],function(e,t){var n=function(e){t.call(this),this._extend(this.options,e),this._build()};return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype._calculate=function(){this.pieData=Object.keys(this.options.data).map(function(e){return{value:this.options.data[e],label:e}}.bind(this))},n.prototype._tick=function(){this._calculate();var n=this.arc;this.arcs.data(this.pie(this.pieData,function(e){return e.value})).transition().ease("linear").duration(100).attrTween("d",function(t){var r=e.interpolate(this._current,t);return this._current=r(0),function(e){return n(r(e))}}),t.prototype._tick.call(this)},n.prototype._draw=function(){var n=this.options.margin,r=this.options.height,i=this.options.width,s=(i-n[1]-n[3])/2;(r-n[0]-n[2])/2<s&&(s=(r-n[0]-n[2])/2);var o=(i-s*2-n[1]-n[3])/2;this.pie=e.layout.pie().value(function(e){return e.value}),this.arc=e.svg.arc().outerRadius(s),this.chart=e.select(this.options.div).append("svg").attr("width",i).attr("height",r).attr("viewbox","0 0 "+i+" "+r).attr("perserveAspectRatio","xMinYMid").attr("class","trace-pie").append("g").attr("transform","translate("+(n[3]+s+o)+","+(n[0]+s)+")"),t.prototype._build.call(this),this.arcs=this.chart.selectAll("path").data(this.pie(this.pieData)).enter().append("path").attr("fill",function(e,t){return this.colors(t)}.bind(this)).attr("d",this.arc).on("mouseover",this._mouseover.bind(this)).on("mouseout",this._mouseout.bind(this)).each(function(e){this._current=e})},n.prototype._build=function(){this._calculate(),this._draw()},n}),r("trace",["require","./trace/LineChart","./trace/BarChart","./trace/PieChart"],function(e){return{lineChart:e("./trace/LineChart"),barChart:e("./trace/BarChart"),pieChart:e("./trace/PieChart")}}),r("d3",function(){return e}),n("trace")});
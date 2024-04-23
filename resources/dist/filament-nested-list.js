var S=(u,l)=>()=>(l||u((l={exports:{}}).exports,l),l.exports);var M=S((f,p)=>{(function(u,l){typeof f=="object"&&typeof p<"u"?p.exports=l():typeof define=="function"&&define.amd?define(l):(u=typeof globalThis<"u"?globalThis:u||self).NestedSort=l()})(f,function(){"use strict";function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,L(i.key),i)}}function y(n,t,e){return t&&l(n.prototype,t),e&&l(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function r(n,t,e){return(t=L(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){return function(t){if(Array.isArray(t))return v(t)}(n)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(n)||function(t,e){if(t){if(typeof t=="string")return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return v(t,e)}}(n)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function v(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function L(n){var t=function(e,i){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,i||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}(n,"string");return typeof t=="symbol"?t:String(t)}var D=function(){function n(t){var e=t.data,i=t.propertyMap,a=i===void 0?{}:i,s=t.renderListItem;u(this,n),r(this,"data",void 0),r(this,"sortedData",void 0),r(this,"sortedDataDomArray",void 0),r(this,"propertyMap",void 0),r(this,"renderListItem",void 0),r(this,"boundGetItemPropProxyName",void 0),this.data=e,this.sortedData=[],this.sortedDataDomArray=[],this.propertyMap=a,this.renderListItem=s,this.boundGetItemPropProxyName=this.getItemPropProxyName.bind(this),this.maybeTransformData()}return y(n,[{key:"addMappingProxyToItem",value:function(t){var e=this;return new Proxy(t,{get:function(i,a,s){return Reflect.get(i,e.boundGetItemPropProxyName(a),s)}})}},{key:"maybeTransformData",value:function(){Object.keys(this.propertyMap).length&&Array.isArray(this.data)&&(this.data=this.data.map(this.addMappingProxyToItem.bind(this)))}},{key:"getItemPropProxyName",value:function(t){return Object.prototype.hasOwnProperty.call(this.propertyMap,t)?this.propertyMap[t]:t}},{key:"isTopLevelItem",value:function(t){return!t.parent}},{key:"sortListItems",value:function(){var t=this,e=c(this.data),i=e.filter(function(s){return t.isTopLevelItem(s)}).sort(function(s,o){return s.order&&o.order?s.order-o.order:0}),a=e.filter(function(s){return!t.isTopLevelItem(s)}).reduce(function(s,o){return o.parent&&(Object.prototype.hasOwnProperty.call(s,o.parent)?s[o.parent].push(o):s[o.parent]=[o]),s},{});return Object.keys(a).forEach(function(s){a[s].sort(function(o,d){return o.order&&d.order?o.order-d.order:0})}),this.sortedData=[].concat(c(i),c(Object.values(a).flat())),this.sortedData}},{key:"addNewItem",value:function(t){var e=t.item,i=t.asLastChild,a=i!==void 0&&i,s=this.addMappingProxyToItem(e);return Array.isArray(this.data)&&this.data[a?"push":"unshift"](s),this.createItemElement(s)}},{key:"createItemElement",value:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"li",i=t.id,a=t.text,s=document.createElement(e);return s.dataset.id=i,e==="li"&&a&&(s.innerHTML=a),e==="li"&&typeof this.renderListItem=="function"?this.renderListItem(s,t):s}},{key:"elementIsParentOfItem",value:function(t,e){return t.dataset.id==="".concat(e.parent)}},{key:"getParentNodeOfItem",value:function(t,e,i){return t.querySelector("".concat(i,'[data-id="').concat(e.parent,'"]'))}},{key:"elementIsAncestorOfItem",value:function(t,e){return!!this.getParentNodeOfItem(t,e,"li")}},{key:"getDirectListParentOfItem",value:function(t,e){return this.getParentNodeOfItem(t,e,"ol")}},{key:"maybeAppendItemToParentDom",value:function(t){var e=this,i=t.parent,a=this.sortedDataDomArray.find(function(d){return e.elementIsParentOfItem(d,t)||e.elementIsAncestorOfItem(d,t)});if(!a)return!1;var s=this.createItemElement(t),o=this.getDirectListParentOfItem(a,t);return o||(o=this.createItemElement({id:i},"ol"),(this.getParentNodeOfItem(a,t,"li")||a).appendChild(o)),o.appendChild(s),!0}},{key:"getListItemsDom",value:function(){var t=this;this.sortedDataDomArray=[];for(var e=[];e.length!==this.sortListItems().length;)e=this.sortedData.reduce(function(i,a){if(!a.id)return i;var s,o=a.id.toString();if(i.includes(o))return i;if(a.parent)s=t.maybeAppendItemToParentDom(a);else{var d=t.createItemElement(a);t.sortedDataDomArray.push(d),s=!0}return s&&i.push(o),i},e);return this.sortedDataDomArray}},{key:"convertDomToData",value:function(t){var e=this;return Array.from(t?.querySelectorAll("li")||[]).map(function(i){var a,s=i.parentNode,o=s.dataset.id,d=Array.from(s.children).findIndex(function(h){return h===i})+1;return r(a={},e.getItemPropProxyName("id"),i.dataset.id),r(a,e.getItemPropProxyName("parent"),o),r(a,e.getItemPropProxyName("order"),d),a})}},{key:"render",value:function(){var t=document.createElement("ol");return this.getListItemsDom().forEach(function(e){return t.appendChild(e)}),t}}]),n}(),E=function(){function n(t){var e=t.actions,i=e===void 0?{}:e,a=t.data,s=t.droppingEdge,o=s===void 0?15:s,d=t.el,h=t.init,g=h===void 0||h,k=t.listClassNames,P=t.listItemClassNames,A=t.nestingLevels,N=t.propertyMap,T=N===void 0?{}:N,C=t.renderListItem;u(this,n),r(this,"actions",void 0),r(this,"classNames",void 0),r(this,"cursor",void 0),r(this,"data",void 0),r(this,"dataEngine",void 0),r(this,"distances",void 0),r(this,"draggedNode",void 0),r(this,"initialised",void 0),r(this,"listClassNames",void 0),r(this,"listEventListeners",void 0),r(this,"listInterface",void 0),r(this,"listItemClassNames",void 0),r(this,"mainListClassName",void 0),r(this,"nestingLevels",void 0),r(this,"placeholderList",void 0),r(this,"placeholderInUse",void 0),r(this,"propertyMap",void 0),r(this,"renderListItem",void 0),r(this,"sortableList",void 0),r(this,"targetedNode",void 0),r(this,"targetNode",void 0),r(this,"wrapper",void 0),this.renderListItem=C;var m=typeof d=="string"?document.querySelector(d):d,I=m instanceof HTMLOListElement||m instanceof HTMLUListElement;this.wrapper=I?void 0:m,this.sortableList=I?m:null,this.data=a,this.listClassNames=this.createListClassNamesArray(k),this.mainListClassName=this.listClassNames[0]||"nested-sort",this.listItemClassNames=this.createListClassNamesArray(P),this.propertyMap=T,this.actions={onDrop:i.onDrop},this.initialised=!1,this.distances={droppingEdge:o},this.classNames={dragged:"ns-dragged",placeholder:"ns-placeholder",targeted:"ns-targeted"},this.listEventListeners={dragover:this.onDragOver.bind(this),dragstart:this.onDragStart.bind(this),dragenter:this.onDragEnter.bind(this),dragend:this.onDragEnd.bind(this),drop:this.onDrop.bind(this)};var b=parseInt(A);this.nestingLevels=isNaN(b)?-1:b,this.listInterface=this.getListInterface(),this.maybeInitDataDom(),this.addListAttributes(),g&&this.initDragAndDrop()}return y(n,[{key:"getListInterface",value:function(){return Array.isArray(this.data)&&this.data.length||this.sortableList instanceof HTMLOListElement?HTMLOListElement:HTMLUListElement}},{key:"getDataEngine",value:function(){return this.dataEngine||(this.dataEngine=new D({data:this.data,propertyMap:this.propertyMap,renderListItem:this.renderListItem})),this.dataEngine}},{key:"createListClassNamesArray",value:function(t){return t?Array.isArray(t)?t:t.split(" "):[]}},{key:"maybeInitDataDom",value:function(){if(Array.isArray(this.data)&&this.data.length&&this.wrapper){var t=this.getDataEngine().render();this.wrapper.innerHTML="",this.wrapper.appendChild(t),this.sortableList=t}}},{key:"getListTagName",value:function(){return this.listInterface===HTMLOListElement?"ol":"ul"}},{key:"getSortableList",value:function(){var t;return this.sortableList instanceof this.listInterface||(this.sortableList=(t=this.wrapper)===null||t===void 0?void 0:t.querySelector(this.getListTagName())),this.sortableList}},{key:"addListAttributes",value:function(){var t,e=this,i=this.getSortableList();i&&((t=i.classList).add.apply(t,c(this.listClassNames.concat(this.mainListClassName))),i.querySelectorAll(this.getListTagName()).forEach(function(a){var s;(s=a.classList).add.apply(s,c(e.listClassNames))}),i.querySelectorAll("li").forEach(function(a){var s;(s=a.classList).add.apply(s,c(e.listItemClassNames))}))}},{key:"toggleMainListLifeCycleClassName",value:function(){var t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],e=this.getSortableList();if(e){var i="".concat(this.mainListClassName,"--enabled");t?e.classList.add(i):e.classList.remove(i)}}},{key:"toggleListItemAttributes",value:function(){var t,e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];(t=this.getSortableList())===null||t===void 0||t.querySelectorAll("li").forEach(function(i){i.setAttribute("draggable",e.toString())})}},{key:"toggleListEventListeners",value:function(){var t=this,e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],i=this.getSortableList();i&&Object.keys(this.listEventListeners).forEach(function(a){e?i.removeEventListener(a,t.listEventListeners[a]):i.addEventListener(a,t.listEventListeners[a],!1)})}},{key:"initDragAndDrop",value:function(){this.initialised||(this.toggleListEventListeners(),this.initPlaceholderList(),this.toggleListItemAttributes(),this.toggleMainListLifeCycleClassName(),this.initialised=!0)}},{key:"init",value:function(){this.initDragAndDrop()}},{key:"destroy",value:function(){this.toggleListEventListeners(!0),this.toggleListItemAttributes(!1),this.toggleMainListLifeCycleClassName(!1),this.initialised=!1}},{key:"removeClassFromEl",value:function(t,e){e&&e.classList.contains(t)&&e.classList.remove(t)}},{key:"canBeTargeted",value:function(t){return!(!this.draggedNode||this.draggedNode===t)&&(t.nodeName==="LI"?!this.nestingThresholdReached(t):t instanceof this.listInterface&&t.classList.contains(this.classNames.placeholder))}},{key:"onDragStart",value:function(t){var e;this.draggedNode=t.target,this.draggedNode.classList.add(this.classNames.dragged),(e=t.dataTransfer)===null||e===void 0||e.setData("text","")}},{key:"onDragOver",value:function(t){t.preventDefault(),this.updateCoordination(t),this.managePlaceholderLists()}},{key:"onDragEnter",value:function(t){this.canBeTargeted(t.target)&&(this.removeClassFromEl(this.classNames.targeted,this.targetedNode),this.targetedNode=t.target,this.targetedNode.classList.add(this.classNames.targeted))}},{key:"onDragEnd",value:function(t){t.stopPropagation(),this.removeClassFromEl(this.classNames.dragged,this.draggedNode),this.removeClassFromEl(this.classNames.targeted,this.targetedNode),this.cleanupPlaceholderLists(),delete this.draggedNode,delete this.targetedNode}},{key:"onDrop",value:function(t){t.stopPropagation(),this.maybeDrop(),this.cleanupPlaceholderLists(),typeof this.actions.onDrop=="function"&&this.actions.onDrop(this.getDataEngine().convertDomToData(this.getSortableList()))}},{key:"updateCoordination",value:function(t){this.calcMouseCoords(t),this.calcMouseToTargetedElDist()}},{key:"getDropLocation",value:function(){if(this.canBeDropped()){var t;if(((t=this.targetedNode)===null||t===void 0?void 0:t.nodeName)==="LI")return"before";if(this.targetedNode instanceof this.listInterface)return"inside"}}},{key:"maybeDrop",value:function(){var t=this.getDropLocation();t&&this.dropTheItem(t)}},{key:"dropTheItem",value:function(t){var e,i,a;switch(t){case"before":(e=this.targetedNode)===null||e===void 0||(i=e.parentNode)===null||i===void 0||i.insertBefore(this.draggedNode,this.targetedNode);break;case"inside":(a=this.targetedNode)===null||a===void 0||a.appendChild(this.draggedNode)}}},{key:"calcMouseCoords",value:function(t){this.cursor={X:t.clientX,Y:t.clientY}}},{key:"calcMouseToTargetedElDist",value:function(){if(this.targetedNode){var t=this.targetedNode.getBoundingClientRect();this.targetNode={X:t.left,Y:t.top};var e=this.targetNode.Y-this.cursor.Y,i=Math.abs(e);this.distances.mouseTo={targetedElTop:e,targetedElTopAbs:i,targetedElBot:i-this.targetedNode.clientHeight}}}},{key:"areNested",value:function(t,e){return!!t&&!!e&&Array.from(e?.querySelectorAll("li")).some(function(i){return i===t})}},{key:"cursorIsIndentedEnough",value:function(){return this.cursor.X-this.targetNode.X>50}},{key:"mouseIsTooCloseToTop",value:function(){var t;return!((t=this.distances)===null||t===void 0||!t.droppingEdge)&&this.cursor.Y-this.targetNode.Y<this.distances.droppingEdge}},{key:"managePlaceholderLists",value:function(){var t=this;this.analysePlaceHolderSituation().forEach(function(e){switch(e){case"add":t.cleanupPlaceholderLists(),t.addPlaceholderList();break;case"cleanup":t.cleanupPlaceholderLists()}})}},{key:"targetedNodeIsPlaceholder",value:function(){return this.targetedNode instanceof this.listInterface&&this.targetedNode.classList.contains(this.classNames.placeholder)}},{key:"getNodeDepth",value:function(t){var e=0,i=this.getSortableList(),a=0;if(this.draggedNode){var s=this.draggedNode.querySelectorAll("ul").length||0,o=this.draggedNode.querySelectorAll("ol").length||0;a=s>o?s:o}for(;i!==((d=t)===null||d===void 0?void 0:d.parentElement);){var d,h,g;((h=t)===null||h===void 0?void 0:h.parentElement)instanceof this.listInterface&&e++,t=(g=t)===null||g===void 0?void 0:g.parentElement}return e+a}},{key:"nestingThresholdReached",value:function(t){var e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return!(this.nestingLevels<0)&&(e?this.getNodeDepth(t)>=this.nestingLevels:this.getNodeDepth(t)>this.nestingLevels)}},{key:"analysePlaceHolderSituation",value:function(){if(!this.targetedNode||this.areNested(this.targetedNode,this.draggedNode))return[];var t=[];return!this.cursorIsIndentedEnough()||this.mouseIsTooCloseToTop()?this.targetedNodeIsPlaceholder()||t.push("cleanup"):this.targetedNode===this.draggedNode||this.targetedNode.nodeName!=="LI"||this.targetedNode.querySelectorAll(this.getListTagName()).length||this.nestingThresholdReached(this.targetedNode,!0)||t.push("add"),t}},{key:"animatePlaceholderList",value:function(){var t;this.placeholderInUse.style.minHeight="0",this.placeholderInUse.style.transition="min-height ease .2s",this.placeholderInUse.style.minHeight="".concat((t=this.draggedNode)===null||t===void 0?void 0:t.offsetHeight,"px")}},{key:"addPlaceholderList",value:function(){var t;this.getPlaceholderList(),(t=this.targetedNode)===null||t===void 0||t.appendChild(this.placeholderInUse),this.animatePlaceholderList()}},{key:"targetNodeIsIdentified",value:function(){return!!this.targetedNode}},{key:"targetNodeIsBeingDragged",value:function(){return this.targetNodeIsIdentified()&&this.targetedNode===this.draggedNode}},{key:"targetNodeIsListWithItems",value:function(){return this.targetNodeIsIdentified()&&this.targetedNode instanceof this.listInterface&&!!this.targetedNode.querySelectorAll("li").length}},{key:"canBeDropped",value:function(){return this.targetNodeIsIdentified()&&!this.targetNodeIsBeingDragged()&&!this.targetNodeIsListWithItems()&&!this.areNested(this.targetedNode,this.draggedNode)}},{key:"cleanupPlaceholderLists",value:function(){var t,e=this,i=this.getListTagName(),a=((t=this.getSortableList())===null||t===void 0?void 0:t.querySelectorAll(i))||[];Array.from(a).forEach(function(s){s.querySelectorAll("li").length?s.classList.contains(e.classNames.placeholder)&&(s.classList.remove(e.classNames.placeholder),s.style.minHeight="auto",s.dataset.id=s.parentNode.dataset.id):s.remove()})}},{key:"initPlaceholderList",value:function(){var t;this.placeholderList=document.createElement(this.getListTagName()),(t=this.placeholderList.classList).add.apply(t,[this.classNames.placeholder].concat(c(this.listClassNames)))}},{key:"getPlaceholderList",value:function(){return this.placeholderInUse=this.placeholderList.cloneNode(!0),this.placeholderInUse}},{key:"addNewItem",value:function(t){var e,i=t.item,a=t.asLastChild,s=a!==void 0&&a,o=this.getDataEngine().addNewItem({item:i,asLastChild:s});return o.setAttribute("draggable",String(this.initialised)),(e=this.getSortableList())===null||e===void 0||e[s?"append":"prepend"](o),{data:this.getDataEngine().convertDomToData(this.getSortableList())}}}]),n}();return E})});export default M();
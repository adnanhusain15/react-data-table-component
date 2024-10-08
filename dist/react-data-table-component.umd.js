!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react","styled-components"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactDataTable={},e.React,e.styled)}(this,(function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l,r=a(t),i=o(t),s=o(n);function d(e,t){return e[t]}function c(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function g(e=[],t,n="id"){const o=e.slice(),a=d(t,n);return a?o.splice(o.findIndex((e=>d(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function u(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function p(e,t){return Math.ceil(e/t)}function b(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const f=()=>null;function m(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{conditionalStyle:o,classNames:a.join(" ")}}function h(e,t=[],n="id"){const o=d(e,n);return o?t.some((e=>d(e,n)===o)):t.some((t=>t===e))}function w(e,t){return t?e.findIndex((e=>x(e.id,t))):-1}function x(e,t){return e==t}function C(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!h(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!h(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:g(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:c(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!h(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const y=n.css`
	pointer-events: none;
	opacity: 0.4;
`,v=s.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&y};
	${({theme:e})=>e.table.style};
`,R=n.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,S=s.default.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&R};
	${({theme:e})=>e.head.style};
`,E=s.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,O=(e,...t)=>n.css`
		@media screen and (max-width: ${599}px) {
			${n.css(e,...t)}
		}
	`,$=(e,...t)=>n.css`
		@media screen and (max-width: ${959}px) {
			${n.css(e,...t)}
		}
	`,P=(e,...t)=>n.css`
		@media screen and (max-width: ${1280}px) {
			${n.css(e,...t)}
		}
	`,k=e=>(t,...o)=>n.css`
			@media screen and (max-width: ${e}px) {
				${n.css(t,...o)}
			}
		`,D=s.default.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,H=s.default(D)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&n.css`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&"sm"===e&&O`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&$`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&P`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&k(e)`
    display: none;
  `};
`,j=n.css`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,F=s.default(H).attrs((e=>({style:e.style})))`
	${({$renderAsCell:e})=>!e&&j};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var T=r.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:g}){const{conditionalStyle:u,classNames:p}=m(n,t.conditionalCellStyles,["rdt_TableCell"]);return r.createElement(F,{id:e,"data-column-id":t.id,role:"cell",className:p,"data-tag":a,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:u,$isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:g},!t.cell&&r.createElement("div",{"data-tag":a},function(e,t,n,o){return t?n&&"function"==typeof n?n(e,o):t(e,o):null}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));const I="input";var M=r.memo((function({name:e,component:t=I,componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:l=!1,onClick:i=f}){const s=t,d=s!==I?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(l),c=r.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return r.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:l?f:i,name:e,"aria-label":e,checked:a,disabled:l},c,{onChange:f}))}));const A=s.default(D)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function L({name:e,keyField:t,row:n,rowCount:o,selected:a,selectableRowsComponent:l,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(n));return r.createElement(A,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},r.createElement(M,{name:e,component:l,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:o,singleSelect:s})},disabled:g}))}const _=s.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function z({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:o,row:a,onToggled:l}){const i=t?n.expanded:n.collapsed;return r.createElement(_,{"aria-disabled":e,onClick:()=>l&&l(a),"data-testid":`expander-button-${o}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const N=s.default(D)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function W({row:e,expanded:t=!1,expandableIcon:n,id:o,onToggled:a,disabled:l=!1}){return r.createElement(N,{onClick:e=>e.stopPropagation(),$noPadding:!0},r.createElement(z,{id:o,row:e,expanded:t,expandableIcon:n,disabled:l,onToggled:a}))}const B=s.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var G=r.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:a}){const l=["rdt_ExpanderRow",...a.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return r.createElement(B,{className:l,$extendedRowStyle:o},r.createElement(t,Object.assign({data:e},n)))}));const V="allowRowEvents";var U,q,Y;e.Direction=void 0,(U=e.Direction||(e.Direction={})).LTR="ltr",U.RTL="rtl",U.AUTO="auto",e.Alignment=void 0,(q=e.Alignment||(e.Alignment={})).LEFT="left",q.RIGHT="right",q.CENTER="center",e.Media=void 0,(Y=e.Media||(e.Media={})).SM="sm",Y.MD="md",Y.LG="lg";const K=n.css`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,J=n.css`
	&:hover {
		cursor: pointer;
	}
`,Q=s.default.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&K};
	${({$pointerOnHover:e})=>e&&J};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function X({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:o=!1,dense:a=!1,expandableIcon:l,expandableRows:i=!1,expandableRowsComponent:s,expandableRowsComponentProps:c,expandableRowsHideExpander:g,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:b=!1,id:h,expandableInheritConditionalStyles:w,keyField:C,onRowClicked:y=f,onRowDoubleClicked:v=f,onRowMouseEnter:R=f,onRowMouseLeave:S=f,onRowExpandToggled:E=f,onSelectedRow:O=f,pointerOnHover:$=!1,row:P,rowCount:k,rowIndex:D,selectableRowDisabled:H=null,selectableRows:j=!1,selectableRowsComponent:F,selectableRowsComponentProps:I,selectableRowsHighlight:M=!1,selectableRowsSingle:A=!1,selected:_,striped:z=!1,draggingColumnId:N,onDragStart:B,onDragOver:U,onDragEnd:q,onDragEnter:Y,onDragLeave:K}){const[J,X]=r.useState(n);r.useEffect((()=>{X(n)}),[n]);const Z=r.useCallback((()=>{X(!J),E(!J,P)}),[J,E,P]),ee=$||i&&(u||p),te=r.useCallback((e=>{e.target.getAttribute("data-tag")===V&&(y(P,e),!o&&i&&u&&Z())}),[o,u,i,Z,y,P]),ne=r.useCallback((e=>{e.target.getAttribute("data-tag")===V&&(v(P,e),!o&&i&&p&&Z())}),[o,p,i,Z,v,P]),oe=r.useCallback((e=>{R(P,e)}),[R,P]),ae=r.useCallback((e=>{S(P,e)}),[S,P]),le=d(P,C),{conditionalStyle:re,classNames:ie}=m(P,t,["rdt_TableRow"]),se=M&&_,de=w?re:{},ce=z&&D%2==0;return r.createElement(r.Fragment,null,r.createElement(Q,{id:`row-${h}`,role:"row",$striped:ce,$highlightOnHover:b,$pointerOnHover:!o&&ee,$dense:a,onClick:te,onDoubleClick:ne,onMouseEnter:oe,onMouseLeave:ae,className:ie,$selected:se,$conditionalStyle:re},j&&r.createElement(L,{name:`select-row-${le}`,keyField:C,row:P,rowCount:k,selected:_,selectableRowsComponent:F,selectableRowsComponentProps:I,selectableRowDisabled:H,selectableRowsSingle:A,onSelectedRow:O}),i&&!g&&r.createElement(W,{id:le,expandableIcon:l,expanded:J,row:P,onToggled:Z,disabled:o}),e.map((e=>e.omit?null:r.createElement(T,{id:`cell-${e.id}-${le}`,key:`cell-${e.id}-${le}`,dataTag:e.ignoreRowClick||e.button?null:V,column:e,row:P,rowIndex:D,isDragging:x(N,e.id),onDragStart:B,onDragOver:U,onDragEnd:q,onDragEnter:Y,onDragLeave:K})))),i&&J&&r.createElement(G,{key:`expander-${le}`,data:P,extendedRowStyle:de,extendedClassNames:ie,ExpanderComponent:s,expanderComponentProps:c}))}const Z=s.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,ee=({sortActive:e,sortDirection:t})=>i.default.createElement(Z,{$sortActive:e,$sortDirection:t},"▲"),te=s.default(H)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,ne=n.css`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&n.css`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,oe=s.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&ne};
`,ae=s.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var le=r.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:a,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:u,onSort:p,onDragStart:b,onDragOver:f,onDragEnd:m,onDragEnter:h,onDragLeave:w}){r.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[C,y]=r.useState(!1),v=r.useRef(null);if(r.useEffect((()=>{v.current&&y(v.current.scrollWidth>v.current.clientWidth)}),[C]),e.omit)return null;const R=()=>{if(!e.sortable&&!e.selector)return;let t=a;x(o.id,e.id)&&(t=a===l.ASC?l.DESC:l.ASC),p({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||u})},S=e=>r.createElement(ee,{sortActive:e,sortDirection:a}),E=()=>r.createElement("span",{className:[a,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!e.sortable||!x(o.id,e.id)),$=!e.sortable||t,P=e.sortable&&!i&&!e.right,k=e.sortable&&!i&&e.right,D=e.sortable&&i&&!e.right,H=e.sortable&&i&&e.right;return r.createElement(te,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:x(e.id,n),onDragStart:b,onDragOver:f,onDragEnd:m,onDragEnter:h,onDragLeave:w},e.name&&r.createElement(oe,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:$?void 0:R,onKeyPress:$?void 0:e=>{"Enter"===e.key&&R()},$sortActive:!$&&O,disabled:$},!$&&H&&E(),!$&&k&&S(O),"string"==typeof e.name?r.createElement(ae,{title:C?e.name:void 0,ref:v,"data-column-id":e.id},e.name):e.name,!$&&D&&E(),!$&&P&&S(O)))}));const re=s.default(D)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ie({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=l.length>0&&!o,u=d?t.filter((e=>!d(e))):t,p=0===u.length,b=Math.min(t.length,u.length);return r.createElement(re,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},r.createElement(M,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:u,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:p}))}function se(t=e.Direction.AUTO){const n="object"==typeof window,[o,a]=r.useState(!1);return r.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const de=s.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ce=s.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ge=s.default.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function ue({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const l=se(a),i=o>0;return n?r.createElement(ge,{$visible:i},r.cloneElement(n,{selectedCount:o})):r.createElement(ge,{$visible:i,$rtl:l},r.createElement(de,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,l)),r.createElement(ce,null,t))}const pe=s.default.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,be=s.default.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,fe=s.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,me=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:l,direction:i,showMenu:s=!0})=>r.createElement(pe,{className:"rdt_TableHeader",role:"heading","aria-level":1},r.createElement(be,null,e),t&&r.createElement(fe,null,t),s&&r.createElement(ue,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:l}));function he(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;const we={left:"flex-start",right:"flex-end",center:"center"},xe=s.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>we[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Ce=e=>{var{align:t="right",wrapContent:n=!0}=e,o=he(e,["align","wrapContent"]);return r.createElement(xe,Object.assign({align:t,$wrapContent:n},o))},ye=s.default.div`
	display: flex;
	flex-direction: column;
`,ve=s.default.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&n.css`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&n.css`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Re=s.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Se=s.default(D)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Ee=s.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Oe=()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M7 10l5 5 5-5z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),$e=s.default.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Pe=s.default.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,ke=e=>{var{defaultValue:t,onChange:n}=e,o=he(e,["defaultValue","onChange"]);return r.createElement(Pe,null,r.createElement($e,Object.assign({onChange:n,defaultValue:t},o)),r.createElement(Oe,null))},De={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return i.default.createElement("div",null,"To add an expander pass in a component instance via ",i.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),i.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),i.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:i.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:i.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:e.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),i.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:e.Direction.AUTO,onChangePage:f,onChangeRowsPerPage:f,onRowClicked:f,onRowDoubleClicked:f,onRowMouseEnter:f,onRowMouseLeave:f,onRowExpandToggled:f,onSelectedRowsChange:f,onSort:f,onColumnOrderChange:f},He={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},je=s.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Fe=s.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Te=s.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${O`
    width: 100%;
    justify-content: space-around;
  `};
`,Ie=s.default.span`
	flex-shrink: 1;
	user-select: none;
`,Me=s.default(Ie)`
	margin: 0 24px;
`,Ae=s.default(Ie)`
	margin: 0 4px;
`;var Le=r.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=De.direction,paginationRowsPerPageOptions:a=De.paginationRowsPerPageOptions,paginationIconLastPage:l=De.paginationIconLastPage,paginationIconFirstPage:i=De.paginationIconFirstPage,paginationIconNext:s=De.paginationIconNext,paginationIconPrevious:d=De.paginationIconPrevious,paginationComponentOptions:c=De.paginationComponentOptions,onChangeRowsPerPage:g=De.onChangeRowsPerPage,onChangePage:u=De.onChangePage}){const b=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=r.useState(t);return r.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),f=se(o),m=b.width&&b.width>599,h=p(t,e),w=n*e,x=w-e+1,C=1===n,y=n===h,v=Object.assign(Object.assign({},He),c),R=n===h?`${x}-${t} ${v.rangeSeparatorText} ${t}`:`${x}-${w} ${v.rangeSeparatorText} ${t}`,S=r.useCallback((()=>u(n-1)),[n,u]),E=r.useCallback((()=>u(n+1)),[n,u]),O=r.useCallback((()=>u(1)),[u]),$=r.useCallback((()=>u(p(t,e))),[u,t,e]),P=r.useCallback((e=>g(Number(e.target.value),n)),[n,g]),k=a.map((e=>r.createElement("option",{key:e,value:e},e)));v.selectAllRowsItem&&k.push(r.createElement("option",{key:-1,value:t},v.selectAllRowsItemText));const D=r.createElement(ke,{onChange:P,defaultValue:e,"aria-label":v.rowsPerPageText},k);return r.createElement(je,{className:"rdt_Pagination"},!v.noRowsPerPage&&m&&r.createElement(r.Fragment,null,r.createElement(Ae,null,v.rowsPerPageText),D),m&&r.createElement(Me,null,R),r.createElement(Te,null,r.createElement(Fe,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,$isRTL:f},i),r.createElement(Fe,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:S,disabled:C,$isRTL:f},d),!v.noRowsPerPage&&!m&&D,r.createElement(Fe,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":y,onClick:E,disabled:y,$isRTL:f},s),r.createElement(Fe,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":y,onClick:$,disabled:y,$isRTL:f},l)))}));const _e=(e,t)=>{const n=r.useRef(!0);r.useEffect((()=>{n.current?n.current=!1:e()}),t)};function ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ne=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===We}(e)}(e)};var We="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Be(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Ye((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ge(e,t,n){return e.concat(t).map((function(e){return Be(e,n)}))}function Ve(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function Ue(e,t){try{return t in e}catch(e){return!1}}function qe(e,t,n){var o={};return n.isMergeableObject(e)&&Ve(e).forEach((function(t){o[t]=Be(e[t],n)})),Ve(t).forEach((function(a){(function(e,t){return Ue(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Ue(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Ye;var n=t.customMerge(e);return"function"==typeof n?n:Ye}(a,n)(e[a],t[a],n):o[a]=Be(t[a],n))})),o}function Ye(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ge,n.isMergeableObject=n.isMergeableObject||Ne,n.cloneUnlessOtherwiseSpecified=Be;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):qe(e,t,n):Be(t,n)}Ye.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Ye(e,n,t)}),{})};var Ke=ze(Ye);const Je={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Qe={default:Je,light:Je,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Xe(e,t,n,o){const[a,i]=r.useState((()=>u(e))),[s,d]=r.useState(""),c=r.useRef("");_e((()=>{i(u(e))}),[e]);const g=r.useCallback((e=>{var t,n,o;const{attributes:l}=e.target,r=null===(t=l.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;r&&(c.current=(null===(o=null===(n=a[w(a,r)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[a]),p=r.useCallback((e=>{var n;const{attributes:o}=e.target,l=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(l&&c.current&&l!==c.current){const e=w(a,c.current),n=w(a,l),o=[...a];o[e]=a[n],o[n]=a[e],i(o),t(o)}}),[t,a]),b=r.useCallback((e=>{e.preventDefault()}),[]),f=r.useCallback((e=>{e.preventDefault()}),[]),m=r.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),h=function(e=!1){return e?l.ASC:l.DESC}(o),x=r.useMemo((()=>a[w(a,null==n?void 0:n.toString())]||{}),[n,a]);return{tableColumns:a,draggingColumnId:s,handleDragStart:g,handleDragEnter:p,handleDragOver:b,handleDragLeave:f,handleDragEnd:m,defaultSortDirection:h,defaultSortColumn:x}}const Ze=s.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`;var et=r.memo((function(e){const{data:t=De.data,columns:o=De.columns,title:a=De.title,actions:i=De.actions,keyField:s=De.keyField,striped:c=De.striped,highlightOnHover:g=De.highlightOnHover,pointerOnHover:u=De.pointerOnHover,dense:f=De.dense,selectableRows:m=De.selectableRows,selectableRowsSingle:w=De.selectableRowsSingle,selectableRowsHighlight:x=De.selectableRowsHighlight,selectableRowsNoSelectAll:y=De.selectableRowsNoSelectAll,selectableRowsVisibleOnly:R=De.selectableRowsVisibleOnly,selectableRowSelected:O=De.selectableRowSelected,selectableRowDisabled:$=De.selectableRowDisabled,selectableRowsComponent:P=De.selectableRowsComponent,selectableRowsComponentProps:k=De.selectableRowsComponentProps,onRowExpandToggled:H=De.onRowExpandToggled,onSelectedRowsChange:j=De.onSelectedRowsChange,expandableIcon:F=De.expandableIcon,onChangeRowsPerPage:T=De.onChangeRowsPerPage,onChangePage:I=De.onChangePage,paginationServer:M=De.paginationServer,paginationServerOptions:A=De.paginationServerOptions,paginationTotalRows:L=De.paginationTotalRows,paginationDefaultPage:_=De.paginationDefaultPage,paginationResetDefaultPage:z=De.paginationResetDefaultPage,paginationPerPage:N=De.paginationPerPage,paginationRowsPerPageOptions:W=De.paginationRowsPerPageOptions,paginationIconLastPage:B=De.paginationIconLastPage,paginationIconFirstPage:G=De.paginationIconFirstPage,paginationIconNext:V=De.paginationIconNext,paginationIconPrevious:U=De.paginationIconPrevious,paginationComponent:q=De.paginationComponent,paginationComponentOptions:Y=De.paginationComponentOptions,responsive:K=De.responsive,progressPending:J=De.progressPending,progressComponent:Q=De.progressComponent,persistTableHead:Z=De.persistTableHead,noDataComponent:ee=De.noDataComponent,disabled:te=De.disabled,noTableHead:ne=De.noTableHead,noHeader:oe=De.noHeader,fixedHeader:ae=De.fixedHeader,fixedHeaderScrollHeight:re=De.fixedHeaderScrollHeight,pagination:se=De.pagination,subHeader:de=De.subHeader,subHeaderAlign:ce=De.subHeaderAlign,subHeaderWrap:ge=De.subHeaderWrap,subHeaderComponent:ue=De.subHeaderComponent,noContextMenu:pe=De.noContextMenu,contextMessage:be=De.contextMessage,contextActions:fe=De.contextActions,contextComponent:he=De.contextComponent,expandableRows:we=De.expandableRows,onRowClicked:xe=De.onRowClicked,onRowDoubleClicked:Oe=De.onRowDoubleClicked,onRowMouseEnter:$e=De.onRowMouseEnter,onRowMouseLeave:Pe=De.onRowMouseLeave,sortIcon:ke=De.sortIcon,onSort:He=De.onSort,sortFunction:je=De.sortFunction,sortServer:Fe=De.sortServer,expandableRowsComponent:Te=De.expandableRowsComponent,expandableRowsComponentProps:Ie=De.expandableRowsComponentProps,expandableRowDisabled:Me=De.expandableRowDisabled,expandableRowsHideExpander:Ae=De.expandableRowsHideExpander,expandOnRowClicked:ze=De.expandOnRowClicked,expandOnRowDoubleClicked:Ne=De.expandOnRowDoubleClicked,expandableRowExpanded:We=De.expandableRowExpanded,expandableInheritConditionalStyles:Be=De.expandableInheritConditionalStyles,defaultSortFieldId:Ge=De.defaultSortFieldId,defaultSortAsc:Ve=De.defaultSortAsc,clearSelectedRows:Ue=De.clearSelectedRows,conditionalRowStyles:qe=De.conditionalRowStyles,theme:Ye=De.theme,customStyles:Je=De.customStyles,direction:et=De.direction,onColumnOrderChange:tt=De.onColumnOrderChange,RowWrapper:nt=r.Fragment,className:ot}=e,{tableColumns:at,draggingColumnId:lt,handleDragStart:rt,handleDragEnter:it,handleDragOver:st,handleDragLeave:dt,handleDragEnd:ct,defaultSortDirection:gt,defaultSortColumn:ut}=Xe(o,tt,Ge,Ve),[{rowsPerPage:pt,currentPage:bt,selectedRows:ft,allSelected:mt,selectedCount:ht,selectedColumn:wt,sortDirection:xt,toggleOnSelectedRowsChange:Ct},yt]=r.useReducer(C,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:ut,toggleOnSelectedRowsChange:!1,sortDirection:gt,currentPage:_,rowsPerPage:N,selectedRowsFlag:!1,contextMessage:De.contextMessage}),{persistSelectedOnSort:vt=!1,persistSelectedOnPageChange:Rt=!1}=A,St=!(!M||!Rt&&!vt),Et=se&&!J&&t.length>0,Ot=q||Le,$t=r.useMemo((()=>((e={},t="default",n="default")=>{const o=Qe[t]?t:n;return Ke({table:{style:{color:(a=Qe[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(Je,Ye)),[Je,Ye]),Pt=r.useMemo((()=>Object.assign({},"auto"!==et&&{dir:et})),[et]),kt=r.useMemo((()=>{if(Fe)return t;if((null==wt?void 0:wt.sortFunction)&&"function"==typeof wt.sortFunction){const e=wt.sortFunction,n=xt===l.ASC?e:(t,n)=>-1*e(t,n);return[...t].sort(n)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{const a=t(e),l=t(o);if("asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(t,null==wt?void 0:wt.selector,xt,je)}),[Fe,wt,xt,t,je]),Dt=r.useMemo((()=>{if(se&&!M){const e=bt*pt,t=e-pt;return kt.slice(t,e)}return kt}),[bt,se,M,pt,kt]),Ht=r.useCallback((e=>{yt(e)}),[]),jt=r.useCallback((e=>{yt(e)}),[]),Ft=r.useCallback((e=>{yt(e)}),[]),Tt=r.useCallback(((e,t)=>xe(e,t)),[xe]),It=r.useCallback(((e,t)=>Oe(e,t)),[Oe]),Mt=r.useCallback(((e,t)=>$e(e,t)),[$e]),At=r.useCallback(((e,t)=>Pe(e,t)),[Pe]),Lt=r.useCallback((e=>yt({type:"CHANGE_PAGE",page:e,paginationServer:M,visibleOnly:R,persistSelectedOnPageChange:Rt})),[M,Rt,R]),_t=r.useCallback((e=>{const t=p(L||Dt.length,e),n=b(bt,t);M||Lt(n),yt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[bt,Lt,M,L,Dt.length]);if(se&&!M&&kt.length>0&&0===Dt.length){const e=p(kt.length,pt),t=b(bt,e);Lt(t)}_e((()=>{j({allSelected:mt,selectedCount:ht,selectedRows:ft.slice(0)})}),[Ct]),_e((()=>{He(wt,xt,kt.slice(0))}),[wt,xt]),_e((()=>{I(bt,L||kt.length)}),[bt]),_e((()=>{T(pt,bt)}),[pt]),_e((()=>{Lt(_)}),[_,z]),_e((()=>{if(se&&M&&L>0){const e=p(L,pt),t=b(bt,e);bt!==t&&Lt(t)}}),[L]),r.useEffect((()=>{yt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ue})}),[w,Ue]),r.useEffect((()=>{if(!O)return;const e=kt.filter((e=>O(e))),t=w?e.slice(0,1):e;yt({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:t,totalRows:kt.length,mergeSelections:St})}),[t,O]);const zt=R?Dt:kt,Nt=Rt||w||y;return r.createElement(n.ThemeProvider,{theme:$t},!oe&&(!!a||!!i)&&r.createElement(me,{title:a,actions:i,showMenu:!pe,selectedCount:ht,direction:et,contextActions:fe,contextComponent:he,contextMessage:be}),de&&r.createElement(Ce,{align:ce,wrapContent:ge},ue),r.createElement(ve,Object.assign({$responsive:K,$fixedHeader:ae,$fixedHeaderScrollHeight:re,className:ot},Pt),r.createElement(Ze,null,J&&!Z&&r.createElement(Re,null,Q),r.createElement(v,{disabled:te,className:"rdt_Table",role:"table"},!ne&&(!!Z||kt.length>0&&!J)&&r.createElement(S,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:ae},r.createElement(E,{className:"rdt_TableHeadRow",role:"row",$dense:f},m&&(Nt?r.createElement(D,{style:{flex:"0 0 48px"}}):r.createElement(ie,{allSelected:mt,selectedRows:ft,selectableRowsComponent:P,selectableRowsComponentProps:k,selectableRowDisabled:$,rowData:zt,keyField:s,mergeSelections:St,onSelectAllRows:jt})),we&&!Ae&&r.createElement(Se,null),at.map((e=>r.createElement(le,{key:e.id,column:e,selectedColumn:wt,disabled:J||0===kt.length,pagination:se,paginationServer:M,persistSelectedOnSort:vt,selectableRowsVisibleOnly:R,sortDirection:xt,sortIcon:ke,sortServer:Fe,onSort:Ht,onDragStart:rt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt,draggingColumnId:lt}))))),!kt.length&&!J&&r.createElement(Ee,null,ee),J&&Z&&r.createElement(Re,null,Q),!J&&kt.length>0&&r.createElement(ye,{className:"rdt_TableBody",role:"rowgroup"},Dt.map(((e,t)=>{const n=d(e,s),o=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(n)?t:n,a=h(e,ft,s),l=!!(we&&We&&We(e)),i=!!(we&&Me&&Me(e));return r.createElement(nt,{index:t,row:e,key:o},r.createElement(X,{id:o,key:o,keyField:s,"data-row-id":o,columns:at,row:e,rowCount:kt.length,rowIndex:t,selectableRows:m,expandableRows:we,expandableIcon:F,highlightOnHover:g,pointerOnHover:u,dense:f,expandOnRowClicked:ze,expandOnRowDoubleClicked:Ne,expandableRowsComponent:Te,expandableRowsComponentProps:Ie,expandableRowsHideExpander:Ae,defaultExpanderDisabled:i,defaultExpanded:l,expandableInheritConditionalStyles:Be,conditionalRowStyles:qe,selected:a,selectableRowsHighlight:x,selectableRowsComponent:P,selectableRowsComponentProps:k,selectableRowDisabled:$,selectableRowsSingle:w,striped:c,onRowExpandToggled:H,onRowClicked:Tt,onRowDoubleClicked:It,onRowMouseEnter:Mt,onRowMouseLeave:At,onSelectedRow:Ft,draggingColumnId:lt,onDragStart:rt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt}))})))))),Et&&r.createElement("div",null,r.createElement(Ot,{onChangePage:Lt,onChangeRowsPerPage:_t,rowCount:L||kt.length,currentPage:bt,rowsPerPage:pt,direction:et,paginationRowsPerPageOptions:W,paginationIconLastPage:B,paginationIconFirstPage:G,paginationIconNext:V,paginationIconPrevious:U,paginationComponentOptions:Y})))}));e.STOP_PROP_TAG=V,e.createTheme=function(e="default",t,n="default"){return Qe[e]||(Qe[e]=Ke(Qe[n],t||{})),Qe[e]=Ke(Qe[e],t||{}),Qe[e]},e.default=et,e.defaultThemes=Qe,Object.defineProperty(e,"__esModule",{value:!0})}));

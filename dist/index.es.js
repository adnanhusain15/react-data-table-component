import*as e from"react";import t from"react";import n,{css as o,ThemeProvider as a}from"styled-components";var l;function r(e,t){return e[t]}function i(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function s(e=[],t,n="id"){const o=e.slice(),a=r(t,n);return a?o.splice(o.findIndex((e=>r(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function d(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function c(e,t){return Math.ceil(e/t)}function g(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const p=()=>null;function u(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{conditionalStyle:o,classNames:a.join(" ")}}function b(e,t=[],n="id"){const o=r(e,n);return o?t.some((e=>r(e,n)===o)):t.some((t=>t===e))}function m(e,t){return t?e.findIndex((e=>h(e.id,t))):-1}function h(e,t){return e==t}function w(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!b(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!b(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:d}=t;return d?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:s(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:i(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!b(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const f=o`
	pointer-events: none;
	opacity: 0.4;
`,x=n.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&f};
	${({theme:e})=>e.table.style};
`,C=o`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,y=n.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&C};
	${({theme:e})=>e.head.style};
`,R=n.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,v=(e,...t)=>o`
		@media screen and (max-width: ${599}px) {
			${o(e,...t)}
		}
	`,S=(e,...t)=>o`
		@media screen and (max-width: ${959}px) {
			${o(e,...t)}
		}
	`,E=(e,...t)=>o`
		@media screen and (max-width: ${1280}px) {
			${o(e,...t)}
		}
	`,O=e=>(t,...n)=>o`
			@media screen and (max-width: ${e}px) {
				${o(t,...n)}
			}
		`,$=n.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,k=n($)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&o`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&"sm"===e&&v`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&S`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&E`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&O(e)`
    display: none;
  `};
`,P=o`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,D=n(k).attrs((e=>({style:e.style})))`
	${({$renderAsCell:e})=>!e&&P};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var H=e.memo((function({id:t,column:n,row:o,rowIndex:a,dataTag:l,isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:g}){const{conditionalStyle:p,classNames:b}=u(o,n.conditionalCellStyles,["rdt_TableCell"]);return e.createElement(D,{id:t,"data-column-id":n.id,role:"cell",className:b,"data-tag":l,$cellStyle:n.style,$renderAsCell:!!n.cell,$allowOverflow:n.allowOverflow,button:n.button,center:n.center,compact:n.compact,grow:n.grow,hide:n.hide,maxWidth:n.maxWidth,minWidth:n.minWidth,right:n.right,width:n.width,$wrapCell:n.wrap,style:p,$isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:g},!n.cell&&e.createElement("div",{"data-tag":l},function(e,t,n,o){return t?n&&"function"==typeof n?n(e,o):t(e,o):null}(o,n.selector,n.format,a)),n.cell&&n.cell(o,a,n,t))}));const F="input";var j=e.memo((function({name:t,component:n=F,componentOptions:o={style:{}},indeterminate:a=!1,checked:l=!1,disabled:r=!1,onClick:i=p}){const s=n,d=s!==F?o.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(r),c=e.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(o,a)),[o,a]);return e.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=a)},style:d,onClick:r?p:i,name:t,"aria-label":t,checked:l,disabled:r},c,{onChange:p}))}));const I=n($)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function T({name:t,keyField:n,row:o,rowCount:a,selected:l,selectableRowsComponent:r,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(o));return e.createElement(I,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},e.createElement(j,{name:t,component:r,componentOptions:i,checked:l,"aria-checked":l,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:o,isSelected:l,keyField:n,rowCount:a,singleSelect:s})},disabled:g}))}const M=n.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function L({disabled:t=!1,expanded:n=!1,expandableIcon:o,id:a,row:l,onToggled:r}){const i=n?o.expanded:o.collapsed;return e.createElement(M,{"aria-disabled":t,onClick:()=>r&&r(l),"data-testid":`expander-button-${a}`,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const A=n($)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function _({row:t,expanded:n=!1,expandableIcon:o,id:a,onToggled:l,disabled:r=!1}){return e.createElement(A,{onClick:e=>e.stopPropagation(),$noPadding:!0},e.createElement(L,{id:a,row:t,expanded:n,expandableIcon:o,disabled:r,onToggled:l}))}const N=n.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var z=e.memo((function({data:t,ExpanderComponent:n,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:l}){const r=["rdt_ExpanderRow",...l.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return e.createElement(N,{className:r,$extendedRowStyle:a},e.createElement(n,Object.assign({data:t},o)))}));const W="allowRowEvents";var B,G,V;!function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"}(B||(B={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(G||(G={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(V||(V={}));const U=o`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Y=o`
	&:hover {
		cursor: pointer;
	}
`,K=n.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&U};
	${({$pointerOnHover:e})=>e&&Y};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function q({columns:t=[],conditionalRowStyles:n=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:l=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:d,expandableRowsComponentProps:c,expandableRowsHideExpander:g,expandOnRowClicked:b=!1,expandOnRowDoubleClicked:m=!1,highlightOnHover:w=!1,id:f,expandableInheritConditionalStyles:x,keyField:C,onRowClicked:y=p,onRowDoubleClicked:R=p,onRowMouseEnter:v=p,onRowMouseLeave:S=p,onRowExpandToggled:E=p,onSelectedRow:O=p,pointerOnHover:$=!1,row:k,rowCount:P,rowIndex:D,selectableRowDisabled:F=null,selectableRows:j=!1,selectableRowsComponent:I,selectableRowsComponentProps:M,selectableRowsHighlight:L=!1,selectableRowsSingle:A=!1,selected:N,striped:B=!1,draggingColumnId:G,onDragStart:V,onDragOver:U,onDragEnd:Y,onDragEnter:q,onDragLeave:J}){const[Q,X]=e.useState(o);e.useEffect((()=>{X(o)}),[o]);const Z=e.useCallback((()=>{X(!Q),E(!Q,k)}),[Q,E,k]),ee=$||s&&(b||m),te=e.useCallback((e=>{e.target.getAttribute("data-tag")===W&&(y(k,e),!a&&s&&b&&Z())}),[a,b,s,Z,y,k]),ne=e.useCallback((e=>{e.target.getAttribute("data-tag")===W&&(R(k,e),!a&&s&&m&&Z())}),[a,m,s,Z,R,k]),oe=e.useCallback((e=>{v(k,e)}),[v,k]),ae=e.useCallback((e=>{S(k,e)}),[S,k]),le=r(k,C),{conditionalStyle:re,classNames:ie}=u(k,n,["rdt_TableRow"]),se=L&&N,de=x?re:{},ce=B&&D%2==0;return e.createElement(e.Fragment,null,e.createElement(K,{id:`row-${f}`,role:"row",$striped:ce,$highlightOnHover:w,$pointerOnHover:!a&&ee,$dense:l,onClick:te,onDoubleClick:ne,onMouseEnter:oe,onMouseLeave:ae,className:ie,$selected:se,$conditionalStyle:re},j&&e.createElement(T,{name:`select-row-${le}`,keyField:C,row:k,rowCount:P,selected:N,selectableRowsComponent:I,selectableRowsComponentProps:M,selectableRowDisabled:F,selectableRowsSingle:A,onSelectedRow:O}),s&&!g&&e.createElement(_,{id:le,expandableIcon:i,expanded:Q,row:k,onToggled:Z,disabled:a}),t.map((t=>t.omit?null:e.createElement(H,{id:`cell-${t.id}-${le}`,key:`cell-${t.id}-${le}`,dataTag:t.ignoreRowClick||t.button?null:W,column:t,row:k,rowIndex:D,isDragging:h(G,t.id),onDragStart:V,onDragOver:U,onDragEnd:Y,onDragEnter:q,onDragLeave:J})))),s&&Q&&e.createElement(z,{key:`expander-${le}`,data:k,extendedRowStyle:de,extendedClassNames:ie,ExpanderComponent:d,expanderComponentProps:c}))}const J=n.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,Q=({sortActive:e,sortDirection:n})=>t.createElement(J,{$sortActive:e,$sortDirection:n},"▲"),X=n(k)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,Z=o`
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

	${({$sortActive:e})=>!e&&o`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ee=n.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Z};
`,te=n.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ne=e.memo((function({column:t,disabled:n,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:m,onDragEnd:w,onDragEnter:f,onDragLeave:x}){e.useEffect((()=>{"string"==typeof t.selector&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[C,y]=e.useState(!1),R=e.useRef(null);if(e.useEffect((()=>{R.current&&y(R.current.scrollWidth>R.current.clientWidth)}),[C]),t.omit)return null;const v=()=>{if(!t.sortable&&!t.selector)return;let e=r;h(a.id,t.id)&&(e=r===l.ASC?l.DESC:l.ASC),u({type:"SORT_CHANGE",sortDirection:e,selectedColumn:t,clearSelectedOnSort:d&&c&&!g||s||p})},S=t=>e.createElement(Q,{sortActive:t,sortDirection:r}),E=()=>e.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!t.sortable||!h(a.id,t.id)),$=!t.sortable||n,k=t.sortable&&!i&&!t.right,P=t.sortable&&!i&&t.right,D=t.sortable&&i&&!t.right,H=t.sortable&&i&&t.right;return e.createElement(X,{"data-column-id":t.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,$isDragging:h(t.id,o),onDragStart:b,onDragOver:m,onDragEnd:w,onDragEnter:f,onDragLeave:x},t.name&&e.createElement(ee,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:$?void 0:v,onKeyPress:$?void 0:e=>{"Enter"===e.key&&v()},$sortActive:!$&&O,disabled:$},!$&&H&&E(),!$&&P&&S(O),"string"==typeof t.name?e.createElement(te,{title:C?t.name:void 0,ref:R,"data-column-id":t.id},t.name):t.name,!$&&D&&E(),!$&&k&&S(O)))}));const oe=n($)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ae({headCell:t=!0,rowData:n,keyField:o,allSelected:a,mergeSelections:l,selectedRows:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=r.length>0&&!a,p=d?n.filter((e=>!d(e))):n,u=0===p.length,b=Math.min(n.length,p.length);return e.createElement(oe,{className:"rdt_TableCol",$headCell:t,$noPadding:!0},e.createElement(j,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:l,keyField:o})},checked:a,indeterminate:g,disabled:u}))}function le(t=B.AUTO){const n="object"==typeof window,[o,a]=e.useState(!1);return e.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const re=n.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ie=n.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,se=n.div`
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
`;function de({contextMessage:t,contextActions:n,contextComponent:o,selectedCount:a,direction:l}){const r=le(l),i=a>0;return o?e.createElement(se,{$visible:i},e.cloneElement(o,{selectedCount:a})):e.createElement(se,{$visible:i,$rtl:r},e.createElement(re,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(t,a,r)),e.createElement(ie,null,n))}const ce=n.div`
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
`,ge=n.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,pe=n.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,ue=({title:t,actions:n=null,contextMessage:o,contextActions:a,contextComponent:l,selectedCount:r,direction:i,showMenu:s=!0})=>e.createElement(ce,{className:"rdt_TableHeader",role:"heading","aria-level":1},e.createElement(ge,null,t),n&&e.createElement(pe,null,n),s&&e.createElement(de,{contextMessage:o,contextActions:a,contextComponent:l,direction:i,selectedCount:r}));function be(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;const me={left:"flex-start",right:"flex-end",center:"center"},he=n.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>me[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,we=t=>{var{align:n="right",wrapContent:o=!0}=t,a=be(t,["align","wrapContent"]);return e.createElement(he,Object.assign({align:n,$wrapContent:o},a))},fe=n.div`
	display: flex;
	flex-direction: column;
`,xe=n.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&o`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&o`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Ce=n.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ye=n($)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Re=n.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,ve=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t.createElement("path",{d:"M7 10l5 5 5-5z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Se=n.select`
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
`,Ee=n.div`
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
`,Oe=t=>{var{defaultValue:n,onChange:o}=t,a=be(t,["defaultValue","onChange"]);return e.createElement(Ee,null,e.createElement(Se,Object.assign({onChange:o,defaultValue:n},a)),e.createElement(ve,null))},$e={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return t.createElement("div",null,"To add an expander pass in a component instance via ",t.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),t.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),t.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:t.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:t.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:G.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),t.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:B.AUTO,onChangePage:p,onChangeRowsPerPage:p,onRowClicked:p,onRowDoubleClicked:p,onRowMouseEnter:p,onRowMouseLeave:p,onRowExpandToggled:p,onSelectedRowsChange:p,onSort:p,onColumnOrderChange:p},ke={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Pe=n.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,De=n.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,He=n.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${v`
    width: 100%;
    justify-content: space-around;
  `};
`,Fe=n.span`
	flex-shrink: 1;
	user-select: none;
`,je=n(Fe)`
	margin: 0 24px;
`,Ie=n(Fe)`
	margin: 0 4px;
`;var Te=e.memo((function({rowsPerPage:t,rowCount:n,currentPage:o,direction:a=$e.direction,paginationRowsPerPageOptions:l=$e.paginationRowsPerPageOptions,paginationIconLastPage:r=$e.paginationIconLastPage,paginationIconFirstPage:i=$e.paginationIconFirstPage,paginationIconNext:s=$e.paginationIconNext,paginationIconPrevious:d=$e.paginationIconPrevious,paginationComponentOptions:g=$e.paginationComponentOptions,onChangeRowsPerPage:p=$e.onChangeRowsPerPage,onChangePage:u=$e.onChangePage}){const b=(()=>{const t="object"==typeof window;function n(){return{width:t?window.innerWidth:void 0,height:t?window.innerHeight:void 0}}const[o,a]=e.useState(n);return e.useEffect((()=>{if(!t)return()=>null;function e(){a(n())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),o})(),m=le(a),h=b.width&&b.width>599,w=c(n,t),f=o*t,x=f-t+1,C=1===o,y=o===w,R=Object.assign(Object.assign({},ke),g),v=o===w?`${x}-${n} ${R.rangeSeparatorText} ${n}`:`${x}-${f} ${R.rangeSeparatorText} ${n}`,S=e.useCallback((()=>u(o-1)),[o,u]),E=e.useCallback((()=>u(o+1)),[o,u]),O=e.useCallback((()=>u(1)),[u]),$=e.useCallback((()=>u(c(n,t))),[u,n,t]),k=e.useCallback((e=>p(Number(e.target.value),o)),[o,p]),P=l.map((t=>e.createElement("option",{key:t,value:t},t)));R.selectAllRowsItem&&P.push(e.createElement("option",{key:-1,value:n},R.selectAllRowsItemText));const D=e.createElement(Oe,{onChange:k,defaultValue:t,"aria-label":R.rowsPerPageText},P);return e.createElement(Pe,{className:"rdt_Pagination"},!R.noRowsPerPage&&h&&e.createElement(e.Fragment,null,e.createElement(Ie,null,R.rowsPerPageText),D),h&&e.createElement(je,null,v),e.createElement(He,null,e.createElement(De,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,$isRTL:m},i),e.createElement(De,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:S,disabled:C,$isRTL:m},d),!R.noRowsPerPage&&!h&&D,e.createElement(De,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":y,onClick:E,disabled:y,$isRTL:m},s),e.createElement(De,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":y,onClick:$,disabled:y,$isRTL:m},r)))}));const Me=(t,n)=>{const o=e.useRef(!0);e.useEffect((()=>{o.current?o.current=!1:t()}),n)};function Le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ae=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===_e}(e)}(e)};var _e="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ne(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Ve((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ze(e,t,n){return e.concat(t).map((function(e){return Ne(e,n)}))}function We(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function Be(e,t){try{return t in e}catch(e){return!1}}function Ge(e,t,n){var o={};return n.isMergeableObject(e)&&We(e).forEach((function(t){o[t]=Ne(e[t],n)})),We(t).forEach((function(a){(function(e,t){return Be(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Be(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Ve;var n=t.customMerge(e);return"function"==typeof n?n:Ve}(a,n)(e[a],t[a],n):o[a]=Ne(t[a],n))})),o}function Ve(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ze,n.isMergeableObject=n.isMergeableObject||Ae,n.cloneUnlessOtherwiseSpecified=Ne;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Ge(e,t,n):Ne(t,n)}Ve.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Ve(e,n,t)}),{})};var Ue=Le(Ve);const Ye={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Ke={default:Ye,light:Ye,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function qe(e="default",t,n="default"){return Ke[e]||(Ke[e]=Ue(Ke[n],t||{})),Ke[e]=Ue(Ke[e],t||{}),Ke[e]}function Je(t,n,o,a){const[r,i]=e.useState((()=>d(t))),[s,c]=e.useState(""),g=e.useRef("");Me((()=>{i(d(t))}),[t]);const p=e.useCallback((e=>{var t,n,o;const{attributes:a}=e.target,l=null===(t=a.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;l&&(g.current=(null===(o=null===(n=r[m(r,l)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",c(g.current))}),[r]),u=e.useCallback((e=>{var t;const{attributes:o}=e.target,a=null===(t=o.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;if(a&&g.current&&a!==g.current){const e=m(r,g.current),t=m(r,a),o=[...r];o[e]=r[t],o[t]=r[e],i(o),n(o)}}),[n,r]),b=e.useCallback((e=>{e.preventDefault()}),[]),h=e.useCallback((e=>{e.preventDefault()}),[]),w=e.useCallback((e=>{e.preventDefault(),g.current="",c("")}),[]),f=function(e=!1){return e?l.ASC:l.DESC}(a),x=e.useMemo((()=>r[m(r,null==o?void 0:o.toString())]||{}),[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:p,handleDragEnter:u,handleDragOver:b,handleDragLeave:h,handleDragEnd:w,defaultSortDirection:f,defaultSortColumn:x}}const Qe=n.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`;var Xe=e.memo((function(t){const{data:n=$e.data,columns:o=$e.columns,title:i=$e.title,actions:s=$e.actions,keyField:d=$e.keyField,striped:p=$e.striped,highlightOnHover:u=$e.highlightOnHover,pointerOnHover:m=$e.pointerOnHover,dense:h=$e.dense,selectableRows:f=$e.selectableRows,selectableRowsSingle:C=$e.selectableRowsSingle,selectableRowsHighlight:v=$e.selectableRowsHighlight,selectableRowsNoSelectAll:S=$e.selectableRowsNoSelectAll,selectableRowsVisibleOnly:E=$e.selectableRowsVisibleOnly,selectableRowSelected:O=$e.selectableRowSelected,selectableRowDisabled:k=$e.selectableRowDisabled,selectableRowsComponent:P=$e.selectableRowsComponent,selectableRowsComponentProps:D=$e.selectableRowsComponentProps,onRowExpandToggled:H=$e.onRowExpandToggled,onSelectedRowsChange:F=$e.onSelectedRowsChange,expandableIcon:j=$e.expandableIcon,onChangeRowsPerPage:I=$e.onChangeRowsPerPage,onChangePage:T=$e.onChangePage,paginationServer:M=$e.paginationServer,paginationServerOptions:L=$e.paginationServerOptions,paginationTotalRows:A=$e.paginationTotalRows,paginationDefaultPage:_=$e.paginationDefaultPage,paginationResetDefaultPage:N=$e.paginationResetDefaultPage,paginationPerPage:z=$e.paginationPerPage,paginationRowsPerPageOptions:W=$e.paginationRowsPerPageOptions,paginationIconLastPage:B=$e.paginationIconLastPage,paginationIconFirstPage:G=$e.paginationIconFirstPage,paginationIconNext:V=$e.paginationIconNext,paginationIconPrevious:U=$e.paginationIconPrevious,paginationComponent:Y=$e.paginationComponent,paginationComponentOptions:K=$e.paginationComponentOptions,responsive:J=$e.responsive,progressPending:Q=$e.progressPending,progressComponent:X=$e.progressComponent,persistTableHead:Z=$e.persistTableHead,noDataComponent:ee=$e.noDataComponent,disabled:te=$e.disabled,noTableHead:oe=$e.noTableHead,noHeader:le=$e.noHeader,fixedHeader:re=$e.fixedHeader,fixedHeaderScrollHeight:ie=$e.fixedHeaderScrollHeight,pagination:se=$e.pagination,subHeader:de=$e.subHeader,subHeaderAlign:ce=$e.subHeaderAlign,subHeaderWrap:ge=$e.subHeaderWrap,subHeaderComponent:pe=$e.subHeaderComponent,noContextMenu:be=$e.noContextMenu,contextMessage:me=$e.contextMessage,contextActions:he=$e.contextActions,contextComponent:ve=$e.contextComponent,expandableRows:Se=$e.expandableRows,onRowClicked:Ee=$e.onRowClicked,onRowDoubleClicked:Oe=$e.onRowDoubleClicked,onRowMouseEnter:ke=$e.onRowMouseEnter,onRowMouseLeave:Pe=$e.onRowMouseLeave,sortIcon:De=$e.sortIcon,onSort:He=$e.onSort,sortFunction:Fe=$e.sortFunction,sortServer:je=$e.sortServer,expandableRowsComponent:Ie=$e.expandableRowsComponent,expandableRowsComponentProps:Le=$e.expandableRowsComponentProps,expandableRowDisabled:Ae=$e.expandableRowDisabled,expandableRowsHideExpander:_e=$e.expandableRowsHideExpander,expandOnRowClicked:Ne=$e.expandOnRowClicked,expandOnRowDoubleClicked:ze=$e.expandOnRowDoubleClicked,expandableRowExpanded:We=$e.expandableRowExpanded,expandableInheritConditionalStyles:Be=$e.expandableInheritConditionalStyles,defaultSortFieldId:Ge=$e.defaultSortFieldId,defaultSortAsc:Ve=$e.defaultSortAsc,clearSelectedRows:Ye=$e.clearSelectedRows,conditionalRowStyles:qe=$e.conditionalRowStyles,theme:Xe=$e.theme,customStyles:Ze=$e.customStyles,direction:et=$e.direction,onColumnOrderChange:tt=$e.onColumnOrderChange,RowWrapper:nt=e.Fragment,className:ot}=t,{tableColumns:at,draggingColumnId:lt,handleDragStart:rt,handleDragEnter:it,handleDragOver:st,handleDragLeave:dt,handleDragEnd:ct,defaultSortDirection:gt,defaultSortColumn:pt}=Je(o,tt,Ge,Ve),[{rowsPerPage:ut,currentPage:bt,selectedRows:mt,allSelected:ht,selectedCount:wt,selectedColumn:ft,sortDirection:xt,toggleOnSelectedRowsChange:Ct},yt]=e.useReducer(w,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:pt,toggleOnSelectedRowsChange:!1,sortDirection:gt,currentPage:_,rowsPerPage:z,selectedRowsFlag:!1,contextMessage:$e.contextMessage}),{persistSelectedOnSort:Rt=!1,persistSelectedOnPageChange:vt=!1}=L,St=!(!M||!vt&&!Rt),Et=se&&!Q&&n.length>0,Ot=Y||Te,$t=e.useMemo((()=>((e={},t="default",n="default")=>{const o=Ke[t]?t:n;return Ue({table:{style:{color:(a=Ke[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(Ze,Xe)),[Ze,Xe]),kt=e.useMemo((()=>Object.assign({},"auto"!==et&&{dir:et})),[et]),Pt=e.useMemo((()=>{if(je)return n;if((null==ft?void 0:ft.sortFunction)&&"function"==typeof ft.sortFunction){const e=ft.sortFunction,t=xt===l.ASC?e:(t,n)=>-1*e(t,n);return[...n].sort(t)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{const a=t(e),l=t(o);if("asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(n,null==ft?void 0:ft.selector,xt,Fe)}),[je,ft,xt,n,Fe]),Dt=e.useMemo((()=>{if(se&&!M){const e=bt*ut,t=e-ut;return Pt.slice(t,e)}return Pt}),[bt,se,M,ut,Pt]),Ht=e.useCallback((e=>{yt(e)}),[]),Ft=e.useCallback((e=>{yt(e)}),[]),jt=e.useCallback((e=>{yt(e)}),[]),It=e.useCallback(((e,t)=>Ee(e,t)),[Ee]),Tt=e.useCallback(((e,t)=>Oe(e,t)),[Oe]),Mt=e.useCallback(((e,t)=>ke(e,t)),[ke]),Lt=e.useCallback(((e,t)=>Pe(e,t)),[Pe]),At=e.useCallback((e=>yt({type:"CHANGE_PAGE",page:e,paginationServer:M,visibleOnly:E,persistSelectedOnPageChange:vt})),[M,vt,E]),_t=e.useCallback((e=>{const t=c(A||Dt.length,e),n=g(bt,t);M||At(n),yt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[bt,At,M,A,Dt.length]);if(se&&!M&&Pt.length>0&&0===Dt.length){const e=c(Pt.length,ut),t=g(bt,e);At(t)}Me((()=>{F({allSelected:ht,selectedCount:wt,selectedRows:mt.slice(0)})}),[Ct]),Me((()=>{He(ft,xt,Pt.slice(0))}),[ft,xt]),Me((()=>{T(bt,A||Pt.length)}),[bt]),Me((()=>{I(ut,bt)}),[ut]),Me((()=>{At(_)}),[_,N]),Me((()=>{if(se&&M&&A>0){const e=c(A,ut),t=g(bt,e);bt!==t&&At(t)}}),[A]),e.useEffect((()=>{yt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ye})}),[C,Ye]),e.useEffect((()=>{if(!O)return;const e=Pt.filter((e=>O(e))),t=C?e.slice(0,1):e;yt({type:"SELECT_MULTIPLE_ROWS",keyField:d,selectedRows:t,totalRows:Pt.length,mergeSelections:St})}),[n,O]);const Nt=E?Dt:Pt,zt=vt||C||S;return e.createElement(a,{theme:$t},!le&&(!!i||!!s)&&e.createElement(ue,{title:i,actions:s,showMenu:!be,selectedCount:wt,direction:et,contextActions:he,contextComponent:ve,contextMessage:me}),de&&e.createElement(we,{align:ce,wrapContent:ge},pe),e.createElement(xe,Object.assign({$responsive:J,$fixedHeader:re,$fixedHeaderScrollHeight:ie,className:ot},kt),e.createElement(Qe,null,Q&&!Z&&e.createElement(Ce,null,X),e.createElement(x,{disabled:te,className:"rdt_Table",role:"table"},!oe&&(!!Z||Pt.length>0&&!Q)&&e.createElement(y,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:re},e.createElement(R,{className:"rdt_TableHeadRow",role:"row",$dense:h},f&&(zt?e.createElement($,{style:{flex:"0 0 48px"}}):e.createElement(ae,{allSelected:ht,selectedRows:mt,selectableRowsComponent:P,selectableRowsComponentProps:D,selectableRowDisabled:k,rowData:Nt,keyField:d,mergeSelections:St,onSelectAllRows:Ft})),Se&&!_e&&e.createElement(ye,null),at.map((t=>e.createElement(ne,{key:t.id,column:t,selectedColumn:ft,disabled:Q||0===Pt.length,pagination:se,paginationServer:M,persistSelectedOnSort:Rt,selectableRowsVisibleOnly:E,sortDirection:xt,sortIcon:De,sortServer:je,onSort:Ht,onDragStart:rt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt,draggingColumnId:lt}))))),!Pt.length&&!Q&&e.createElement(Re,null,ee),Q&&Z&&e.createElement(Ce,null,X),!Q&&Pt.length>0&&e.createElement(fe,{className:"rdt_TableBody",role:"rowgroup"},Dt.map(((t,n)=>{const o=r(t,d),a=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(o)?n:o,l=b(t,mt,d),i=!!(Se&&We&&We(t)),s=!!(Se&&Ae&&Ae(t));return e.createElement(nt,{key:a},e.createElement(q,{id:a,key:a,keyField:d,"data-row-id":a,columns:at,row:t,rowCount:Pt.length,rowIndex:n,selectableRows:f,expandableRows:Se,expandableIcon:j,highlightOnHover:u,pointerOnHover:m,dense:h,expandOnRowClicked:Ne,expandOnRowDoubleClicked:ze,expandableRowsComponent:Ie,expandableRowsComponentProps:Le,expandableRowsHideExpander:_e,defaultExpanderDisabled:s,defaultExpanded:i,expandableInheritConditionalStyles:Be,conditionalRowStyles:qe,selected:l,selectableRowsHighlight:v,selectableRowsComponent:P,selectableRowsComponentProps:D,selectableRowDisabled:k,selectableRowsSingle:C,striped:p,onRowExpandToggled:H,onRowClicked:It,onRowDoubleClicked:Tt,onRowMouseEnter:Mt,onRowMouseLeave:Lt,onSelectedRow:jt,draggingColumnId:lt,onDragStart:rt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt}))})))))),Et&&e.createElement("div",null,e.createElement(Ot,{onChangePage:At,onChangeRowsPerPage:_t,rowCount:A||Pt.length,currentPage:bt,rowsPerPage:ut,direction:et,paginationRowsPerPageOptions:W,paginationIconLastPage:B,paginationIconFirstPage:G,paginationIconNext:V,paginationIconPrevious:U,paginationComponentOptions:K})))}));export{G as Alignment,B as Direction,V as Media,W as STOP_PROP_TAG,qe as createTheme,Xe as default,Ke as defaultThemes};

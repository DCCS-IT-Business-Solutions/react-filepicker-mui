(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),es=__webpack_require__(294),List=__webpack_require__(617),IconButton=__webpack_require__(631),Delete=__webpack_require__(138),Delete_default=__webpack_require__.n(Delete),AddCircle=__webpack_require__(293),AddCircle_default=__webpack_require__.n(AddCircle),ListItem=__webpack_require__(614),ListItemText=__webpack_require__(615),ListItemSecondaryAction=__webpack_require__(616),CircularProgress=__webpack_require__(630),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};function FileListItem(props){return react.createElement(ListItem.a,{style:props.listItemStyle,button:!0,onClick:function(e){props.file.downloadLink&&(e.stopPropagation(),window.open(props.file.downloadLink,"_blank"))}},react.createElement(ListItemText.a,{primary:props.file.name,secondary:props.file.size,style:props.listItemTextStyle}),react.createElement(ListItemSecondaryAction.a,{style:props.listItemSecondayActionStyle},props.file.isLocal?react.createElement(CircularProgress.a,null):react.createElement(IconButton.a,{onClick:function(e){e.stopPropagation(),props.removeFile(props.file.id)},style:props.deleteIconButtonStyle},react.createElement(Delete_default.a,__assign({},props.deleteIconProps)))))}try{FileListItem.displayName="FileListItem",FileListItem.__docgenInfo={description:"",displayName:"FileListItem",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"IFileMetadata"}},removeFile:{defaultValue:null,description:"",name:"removeFile",required:!0,type:{name:"(id: string) => void"}},listItemStyle:{defaultValue:null,description:"",name:"listItemStyle",required:!1,type:{name:"CSSProperties"}},listItemTextStyle:{defaultValue:null,description:"",name:"listItemTextStyle",required:!1,type:{name:"CSSProperties"}},listItemSecondayActionStyle:{defaultValue:null,description:"",name:"listItemSecondayActionStyle",required:!1,type:{name:"CSSProperties"}},deleteIconButtonStyle:{defaultValue:null,description:"",name:"deleteIconButtonStyle",required:!1,type:{name:"CSSProperties"}},deleteIconProps:{defaultValue:null,description:"",name:"deleteIconProps",required:!1,type:{name:"SvgIconProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/FileListItem.tsx#FileListItem"]={docgenInfo:FileListItem.__docgenInfo,name:"FileListItem",path:"src/FileListItem.tsx#FileListItem"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__.d(__webpack_exports__,"a",(function(){return FilePicker}));var FilePicker_assign=function(){return(FilePicker_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function FilePicker(props){var _a=Object(es.a)(FilePicker_assign({onDrop:function onDrop(acceptedFiles){for(var i=0;i<(!0===props.multiple?acceptedFiles.length:1);i++){var file=acceptedFiles[i],newFile={isLocal:!0,id:files.length.toString(),name:file.name};setFiles(__spreadArrays(files,[newFile])),handleFilePicker(newFile,file)}}},props)),getRootProps=_a.getRootProps,getInputProps=_a.getInputProps,_b=react.useState([]),files=_b[0],setFiles=_b[1];function handleFilePicker(newFile,file){props.uploadFile(file).then((function(id){newFile.id=id,props.onChange(__spreadArrays(props.value,[id]))}),(function(error){props.onUploadFileError&&props.onUploadFileError(error)}))}function handleDownloadMissingFiles(notDownloadedFiles){notDownloadedFiles.forEach((function(serverId){props.getFile(serverId).then((function(response){!function updateFilesAfterDownload(serverFile){var existingFile=files.find((function(value){return value.id===serverFile.id}));if(void 0!==existingFile)existingFile.isLocal=!1,existingFile.downloadLink=serverFile.downloadLink,existingFile.name=serverFile.name,existingFile.size=serverFile.size,setFiles(__spreadArrays(files));else{var newFile=FilePicker_assign({isLocal:!1},serverFile);setFiles(__spreadArrays(files,[newFile]))}}(response)}),(function(error){props.onGetFileError&&props.onGetFileError(serverId,error)}))}))}return react.useEffect((function(){var notDownloadedFiles=props.value.filter((function(fileId){return!files.some((function(file){return!1===file.isLocal&&fileId===file.id}))})),filesToRemove=files.filter((function(file){return!props.value.some((function(fileId){return!0===file.isLocal||fileId===file.id}))}));null!=notDownloadedFiles&&notDownloadedFiles.length>0&&handleDownloadMissingFiles(notDownloadedFiles),null!=filesToRemove&&filesToRemove.length>0&&function handleRemoveUnusedFiles(filesToRemove){setFiles(files.filter((function(file){return!filesToRemove.some((function(fileToRemove){return fileToRemove.id===file.id}))})))}(filesToRemove)}),[props.value]),props.children?props.children({getRootProps:getRootProps,getInputProps:getInputProps},files,(function handleRemoveFile(fileId){props.onChange(props.value.filter((function(entry){return entry!==fileId})))})):react.createElement("div",FilePicker_assign({style:{borderStyle:"solid",borderWidth:"2px",borderColor:"gray",borderRadius:"4px",minWidth:"350px",minHeight:"175px",display:"inline-flex",justifyContent:"space-between"}},getRootProps()),react.createElement("input",FilePicker_assign({},getInputProps())),react.createElement(List.a,FilePicker_assign({style:{flex:"9",paddingTop:0,paddingBottom:0}},props.fileListProps),files.map((function(file){return props.renderFileListItem?props.renderFileListItem(file):react.createElement(FileListItem,FilePicker_assign({key:file.id,file:file,removeFile:function(fileId){props.onChange(props.value.filter((function(entry){return entry!==fileId})))}},props.fileListItemProps))}))),!0!==props.disableOptions&&react.createElement("div",{style:FilePicker_assign({display:"block",flex:1,backgroundColor:"gray"},props.optionContainerStyle)},react.createElement("section",null,!0!==props.disableAddOption&&react.createElement(IconButton.a,{style:{padding:"8px"}},react.createElement(AddCircle_default.a,{htmlColor:"white"})),!0!==props.disableDeleteAllOption&&react.createElement(IconButton.a,{style:{padding:"8px"},onClick:function(e){e.stopPropagation(),props.onChange([])}},react.createElement(Delete_default.a,{htmlColor:"white"})))))}try{FilePicker.displayName="FilePicker",FilePicker.__docgenInfo={description:"",displayName:"FilePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: string[]) => void"}},getFile:{defaultValue:null,description:"",name:"getFile",required:!0,type:{name:"(id: string) => Promise<Pick<any, string | number | symbol>>"}},uploadFile:{defaultValue:null,description:"",name:"uploadFile",required:!0,type:{name:"(file: File) => Promise<string>"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"(isLoading: boolean) => void"}},onUploadFileError:{defaultValue:null,description:"",name:"onUploadFileError",required:!1,type:{name:"(e: any) => void"}},onGetFileError:{defaultValue:null,description:"",name:"onGetFileError",required:!1,type:{name:"(id: string, e: any) => void"}},fileListItemProps:{defaultValue:null,description:"",name:"fileListItemProps",required:!1,type:{name:"any"}},renderFileListItem:{defaultValue:null,description:"",name:"renderFileListItem",required:!1,type:{name:"(IFileData: any) => ReactNode"}},fileListProps:{defaultValue:null,description:"",name:"fileListProps",required:!1,type:{name:"{ dense?: boolean; disablePadding?: boolean; subheader?: ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<...>)>; ... 257 more ...; css?: InterpolationWithTheme<...>; }"}},optionContainerStyle:{defaultValue:null,description:"",name:"optionContainerStyle",required:!1,type:{name:"CSSProperties"}},disableDeleteAllOption:{defaultValue:null,description:"",name:"disableDeleteAllOption",required:!1,type:{name:"boolean"}},disableAddOption:{defaultValue:null,description:"",name:"disableAddOption",required:!1,type:{name:"boolean"}},disableOptions:{defaultValue:null,description:"",name:"disableOptions",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"(event: DragEvent<HTMLElement>) => void"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"(event: DragEvent<HTMLElement>) => void"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"(event: DragEvent<HTMLElement>) => void"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string | string[]"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},preventDropOnDocument:{defaultValue:null,description:"",name:"preventDropOnDocument",required:!1,type:{name:"boolean"}},noClick:{defaultValue:null,description:"",name:"noClick",required:!1,type:{name:"boolean"}},noKeyboard:{defaultValue:null,description:"",name:"noKeyboard",required:!1,type:{name:"boolean"}},noDrag:{defaultValue:null,description:"",name:"noDrag",required:!1,type:{name:"boolean"}},noDragEventsBubbling:{defaultValue:null,description:"",name:"noDragEventsBubbling",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onDropAccepted:{defaultValue:null,description:"",name:"onDropAccepted",required:!1,type:{name:"<T extends File>(files: T[], event: DropEvent) => void"}},onDropRejected:{defaultValue:null,description:"",name:"onDropRejected",required:!1,type:{name:"<T extends File>(files: T[], event: DropEvent) => void"}},getFilesFromEvent:{defaultValue:null,description:"",name:"getFilesFromEvent",required:!1,type:{name:"(event: DropEvent) => Promise<(File | DataTransferItem)[]>"}},onFileDialogCancel:{defaultValue:null,description:"",name:"onFileDialogCancel",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/FilePicker.tsx#FilePicker"]={docgenInfo:FilePicker.__docgenInfo,name:"FilePicker",path:"src/FilePicker.tsx#FilePicker"})}catch(__react_docgen_typescript_loader_error){}},296:function(module,exports,__webpack_require__){__webpack_require__(297),__webpack_require__(406),module.exports=__webpack_require__(407)},318:function(module,exports){},407:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(28),__webpack_require__(23),__webpack_require__(19),__webpack_require__(29),__webpack_require__(30);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(93),req=__webpack_require__(607);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(224)(module))},607:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":608};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=607},608:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93),_src_FilePicker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(186),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(617),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(614),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(615),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(616),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(618),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(94),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function BasicFilePicker(){var _a=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),server=_a[0],setServer=_a[1],_b=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),fileIds=_b[0],setFileIds=_b[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_FilePicker__WEBPACK_IMPORTED_MODULE_2__.a,{multiple:!0,value:fileIds,onChange:function(selectedIds){setFileIds(selectedIds)},uploadFile:function uploadFile(newFile){return new Promise((function(res,rej){var newId=server.length.toString();setServer(__spreadArrays(server,[{id:newId,name:newFile.name,size:newFile.size.toString()}])),setTimeout((function(){return res(newId)}),500)}))},getFile:function(id){return new Promise((function(res,rej){setTimeout((function(){return res(server.find((function(e){return e.id===id})))}),500)}))}})}function CustomRenderExample(){var _a=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),server=_a[0],setServer=_a[1],_b=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),fileIds=_b[0],setFileIds=_b[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_FilePicker__WEBPACK_IMPORTED_MODULE_2__.a,{multiple:!0,value:fileIds,onChange:function(selectedIds){setFileIds(selectedIds)},uploadFile:function uploadFile(newFile){return new Promise((function(res,rej){var newId=server.length.toString();setServer(__spreadArrays(server,[{id:newId,name:newFile.name,size:newFile.size.toString()}])),setTimeout((function(){return res(newId)}),500)}))},getFile:function(id){return new Promise((function(res,rej){setTimeout((function(){return res(server.find((function(e){return e.id===id})))}),500)}))}},(function(state,files,removeFile){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",__assign({},state.getRootProps(),{style:{width:500,minHeight:500,backgroundColor:"lightgray"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",__assign({},state.getInputProps())),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,null,files.map((function(f){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{key:f.id},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{primary:f.name}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:function(e){e.stopPropagation(),removeFile(f.id)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,null,"Delete"))))}))))}))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("FilePicker",module).add("Uncustomized example",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicFilePicker,null)})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("FilePicker",module).add("Custom render example",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomRenderExample,null)}))}.call(this,__webpack_require__(224)(module))}},[[296,1,2]]]);
//# sourceMappingURL=main.da57a9252863c127a0f6.bundle.js.map
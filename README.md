# react-filepicker-mui &middot; ![travis build](https://img.shields.io/travis/DCCS-IT-Business-Solutions/react-filepicker-mui.svg) ![npm version](https://img.shields.io/npm/v/@dccs/react-filepicker-mui.svg)

filepicker [https://dccs-it-business-solutions.github.io/react-filepicker-mui/](https://dccs-it-business-solutions.github.io/react-filepicker-mui/)

## Installation

You should install [react-filepicker-mui with npm or yarn](https://www.npmjs.com/package/@dccs/react-filepicker-mui):

    npm install @dccs/react-filepicker-mui
    or
    yarn add @dccs/react-filepicker-mui

This command will download and install react-filepicker-mui

## Usage

### Required Parameters

| Name       | Type                                    | Description                                                                                                       |
| ---------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| value      | `string[]`                              | Array of Ids from selected files                                                                                  |
| onChange   | `(newValue: string[]) => voId`          | gets called every time a file is: <li>added and the uploadFile function has returned the Id</li> <li>removed</li> |
| uploadFile | `(file: File) => Promise<string>`       | do something with the file and return an Id for it                                                                |
| getFile    | `(Id: string) => Promise<FileMetadata>` | gets called for every Id in the `value[]` and should return the metadata for the file with the given Id           |

### No Customization

```javascript
<FilePicker
  value={fileIds}
  onChange={ids => {
    setFileIds(ids);
  }}
  uploadFile={(file:File)=>{
    // could look like this:
    string fileId = await api.uploadFile(file);
    return fileId;
  }}
  getFile={(id: string) => {
    // could look like this:
    let metadata = await api.getFile(id);
    return metadata;
  }}
/>
```

### Custom Render Example

```javascript
<FilePicker
  value={fileIds}
  onChange={ids => {
    setFileIds(ids);
  }}
  uploadFile={(file:File)=>{
    // could look like this:
    string fileId = await api.uploadFile(file);
    return fileId;
  }}
  getFile={(id: string) => {
    // could look like this:
    let metadata = await api.getFile(id);
    return metadata;
  }}
>
  {(state, files, removeFile) => (
    <div
      {...state.getRootProps()}
      style={{ minWIdth: 500, minHeight: 500, backgroundColor: "gray" }}
    >
      <input {...state.getInputProps()} />
      {files.map(f => (
        <ListItem key={f.Id}>
          <ListItemText primary={f.name} />
          <ListItemSecondaryAction>
            <Button
              onClick={e => {
                e.stopPropagation();
                removeFile(f.Id);
              }}
            >
              <Typography>Delete</Typography>
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </div>
  )}
</FilePicker>
```

## Contributing

### License

@dccs/react-filepicker-mui is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)

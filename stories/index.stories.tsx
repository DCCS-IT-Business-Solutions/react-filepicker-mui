import * as React from "react";

import { storiesOf } from "@storybook/react";
import { FilePicker, FileMetadata } from "../src/FilePicker";
import { string } from "prop-types";
import { file } from "@babel/types";
import { DropzoneState } from "react-dropzone";
import { IFileMetadata } from "../src/FileListItem";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Typography,
  List
} from "@material-ui/core";

function BasicFilePicker() {
  // simulating the server
  const [server, setServer] = React.useState<FileMetadata[]>([]);

  // fileIds
  const [fileIds, setFileIds] = React.useState<string[]>([]);

  function uploadFile(newFile: File) {
    return new Promise<string>((res, rej) => {
      const newId = server.length.toString();
      setServer([
        ...server,
        { id: newId, name: newFile.name, size: newFile.size.toString() }
      ]);
      setTimeout(() => res(newId), 500);
    });
  }

  return (
    <FilePicker
      multiple={true}
      value={fileIds}
      onChange={selectedIds => {
        setFileIds(selectedIds);
      }}
      uploadFile={uploadFile}
      getFile={(id: string) => {
        return new Promise((res, rej) => {
          setTimeout(() => res(server.find(e => e.id === id)), 500);
        });
      }}
      // children={(
      //   state: DropzoneState,
      //   files: IFileMetadata[],
      //   removeFile: (id: string) => void
      // ) => (
      //   <div
      //     {...state.getRootProps()}
      //     style={{ minWidth: 500, minHeight: 500, backgroundColor: "gray" }}
      //   >
      //     <input {...state.getInputProps()} />
      //     {files.map(f => (
      //       <ListItem key={f.id}>{f.name}</ListItem>
      //     ))}
      //   </div>
      // )}
    />
  );
}

function CustomRenderExample() {
  // simulating the server
  const [server, setServer] = React.useState<FileMetadata[]>([]);

  // fileIds
  const [fileIds, setFileIds] = React.useState<string[]>([]);

  function uploadFile(newFile: File) {
    return new Promise<string>((res, rej) => {
      const newId = server.length.toString();
      setServer([
        ...server,
        { id: newId, name: newFile.name, size: newFile.size.toString() }
      ]);
      setTimeout(() => res(newId), 500);
    });
  }

  return (
    <FilePicker
      multiple={true}
      value={fileIds}
      onChange={selectedIds => {
        setFileIds(selectedIds);
      }}
      uploadFile={uploadFile}
      getFile={(id: string) => {
        return new Promise((res, rej) => {
          setTimeout(() => res(server.find(e => e.id === id)), 500);
        });
      }}
    >
      {(state, files, removeFile) => (
        <div
          {...state.getRootProps()}
          style={{ width: 500, minHeight: 500, backgroundColor: "lightgray" }}
        >
          <input {...state.getInputProps()} />
          <List>
            {files.map(f => (
              <ListItem key={f.id}>
                <ListItemText primary={f.name} />
                <ListItemSecondaryAction>
                  <Button
                    onClick={e => {
                      e.stopPropagation();
                      removeFile(f.id);
                    }}
                  >
                    <Typography>Delete</Typography>
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </FilePicker>
  );
}

storiesOf("FilePicker", module).add("Uncustomized example", () => (
  <BasicFilePicker />
));

storiesOf("FilePicker", module).add("Custom render example", () => (
  <CustomRenderExample />
));

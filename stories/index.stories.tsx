import * as React from "react";

import { storiesOf } from "@storybook/react";
import { FilePicker } from "../src/FilePicker";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Typography,
  List
} from "@material-ui/core";
import { reject, resolve } from "q";
import { sleep } from "@dccs/utils";
import { FileMetadata, IFileMetadata } from "../src/types";

const server: FileMetadata[] = [];
function setServer(data: FileMetadata) {
  server.push(data);
}

function BasicAsyncFilePicker() {
  React.useEffect(() => {
    return;
  }, [server.length]);

  const [fileIds, setFileIds] = React.useState<string[]>([]);

  async function uploadFile(newFile: File) {
    await sleep(500);
    const newId = (Math.random() * 1000000000).toString();
    setServer({
      id: newId,
      name: newFile.name,
      size: newFile.size.toString()
    });
    return resolve<string>(newId);
  }

  async function getFile(id: string) {
    await sleep(500);
    const file = server.find(e => e.id === id);
    if (file) {
      return resolve<FileMetadata>(file);
    } else {
      return reject<any>("file not found!");
    }
  }

  return (
    <FilePicker
      variant="async"
      multiple={true}
      value={fileIds}
      onChange={selectedIds => {
        setFileIds([...selectedIds]);
      }}
      uploadFile={uploadFile}
      getFile={getFile}
    />
  );
}

function CustomRenderAsyncExample() {
  React.useEffect(() => {
    return;
  }, [server.length]);

  const [fileIds, setFileIds] = React.useState<string[]>([]);

  async function uploadFile(newFile: File) {
    await sleep(500);
    const newId = (Math.random() * 1000000000).toString();
    setServer({
      id: newId,
      name: newFile.name,
      size: newFile.size.toString()
    });
    return resolve<string>(newId);
  }

  async function getFile(id: string) {
    await sleep(500);
    const file = server.find(e => e.id === id);
    if (file) {
      return resolve<FileMetadata>(file);
    } else {
      return reject<any>("file not found!");
    }
  }

  return (
    <FilePicker
      variant="async"
      multiple={true}
      value={fileIds}
      onChange={selectedIds => {
        setFileIds(selectedIds);
      }}
      uploadFile={uploadFile}
      getFile={getFile}
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

function BasicFilePicker() {
  const [myFiles, setMyFiles] = React.useState<IFileMetadata[]>([]);

  return (
    <FilePicker
      multiple={true}
      value={myFiles}
      onChange={(newFiles: IFileMetadata[]) => setMyFiles(newFiles)}
    />
  );
}

function CustomRenderExample() {
  const [myFiles, setMyFiles] = React.useState<IFileMetadata[]>([]);

  return (
    <FilePicker
      multiple={true}
      value={myFiles}
      onChange={(newFiles: IFileMetadata[]) => {
        setMyFiles(newFiles);
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

storiesOf("AsyncFilePicker", module).add("Uncustomized async example", () => (
  <BasicAsyncFilePicker />
));

storiesOf("AsyncFilePicker", module).add("Custom render async example", () => (
  <CustomRenderAsyncExample />
));

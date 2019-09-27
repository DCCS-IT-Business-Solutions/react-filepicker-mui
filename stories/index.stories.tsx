import * as React from "react";

import { storiesOf } from "@storybook/react";
import { FilePicker, FileMetadata } from "../src/FilePicker";
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

const server: FileMetadata[] = [];
function setServer(data: FileMetadata) {
  server.push(data);
}

function BasicFilePicker() {
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
    window.console.log("searching file", id, "server files", server);
    const file = server.find(e => e.id === id);
    if (file) {
      return resolve<FileMetadata>(file);
    } else {
      return reject<any>("file not found!");
    }
  }

  return (
    <FilePicker
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

function CustomRenderExample() {
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
    window.console.log("searching file", id, "server files", server);
    const file = server.find(e => e.id === id);
    if (file) {
      return resolve<FileMetadata>(file);
    } else {
      return reject<any>("file not found!");
    }
  }

  return (
    <FilePicker
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

storiesOf("FilePicker", module).add("Uncustomized example", () => (
  <BasicFilePicker />
));

storiesOf("FilePicker", module).add("Custom render example", () => (
  <CustomRenderExample />
));

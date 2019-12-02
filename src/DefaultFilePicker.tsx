import * as React from "react";
import { IFileMetadata, IFilePickerProps } from "./types";
import { useDropzone, DropzoneProps, DropzoneState } from "react-dropzone";
import { List, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { FileListItem } from "./FileListItem";

export function DefaultFilePicker(props: IFilePickerProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    ...(props as DropzoneProps)
  });

  function handleRemoveFile(fileId: string) {
    props.onChange(props.value.filter(entry => entry.id !== fileId));
  }

  async function onDrop(acceptedFiles: File[]) {
    const newFiles: IFileMetadata[] = [];
    for (let i = 0; i < acceptedFiles.length; i++) {
      const file = acceptedFiles[i];
      const localId = (props.value.length + i).toString();
      const newFile: IFileMetadata = {
        isLocal: true,
        id: localId,
        name: file.name,
        ...file,
        size: `${file.size / 1000} KB`
      };
      newFiles.push(newFile);
    }
    props.onChange([...props.value, ...newFiles]);
  }

  return props.children ? (
    props.children(
      { getRootProps, getInputProps } as DropzoneState,
      props.value,
      handleRemoveFile
    )
  ) : (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "gray",
        borderRadius: "4px",
        minWidth: "350px",
        minHeight: "175px",
        display: "inline-flex",
        justifyContent: "space-between"
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <List
        style={{
          flex: "9",
          paddingTop: 0,
          paddingBottom: 0
        }}
        {...props.fileListProps}
      >
        {props.value.map((file: IFileMetadata) =>
          props.renderFileListItem ? (
            props.renderFileListItem(file)
          ) : (
            <FileListItem
              key={file.id}
              file={file}
              removeFile={(fileId: string) => {
                props.onChange(
                  props.value.filter(entry => entry.id !== fileId)
                );
              }}
              {...props.fileListItemProps}
            />
          )
        )}
      </List>
      {props.disableOptions !== true && (
        <div
          style={{
            display: "block",
            flex: 1,
            backgroundColor: "gray",
            ...props.optionContainerStyle
          }}
        >
          <section>
            {props.disableAddOption !== true && (
              <IconButton style={{ padding: "8px" }}>
                <AddIcon htmlColor="white" />
              </IconButton>
            )}
            {props.disableDeleteAllOption !== true && (
              <IconButton
                style={{ padding: "8px" }}
                onClick={e => {
                  e.stopPropagation();
                  props.onChange([]);
                }}
              >
                <DeleteIcon htmlColor="white" />
              </IconButton>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

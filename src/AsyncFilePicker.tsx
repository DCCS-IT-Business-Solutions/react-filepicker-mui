import * as React from "react";
import { IAsyncFilePickerProps, IFileMetadata } from "./types";
import { useDropzone, DropzoneProps, DropzoneState } from "react-dropzone";
import { List, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { AsyncFileListItem } from "./AsyncFileListItem";

export function AsyncFilePicker(props: IAsyncFilePickerProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    ...(props as DropzoneProps)
  });

  const [files, setFiles] = React.useState<IFileMetadata[]>([]);

  React.useEffect(() => {
    const newFiles = files.filter(f => f.isLocal && f.isDownloading !== true);
    if (newFiles !== undefined && newFiles.length > 0) {
      handleFilePicker(newFiles);
    }
  }, [files]);

  async function handleFilePicker(newFiles: IFileMetadata[]) {
    const newIds: string[] = [];
    for (const f of newFiles) {
      f.isDownloading = true;
    }
    for (const newFile of newFiles) {
      const id = await props.uploadFile(newFile as File).catch((error: any) => {
        newFile.isDownloading = undefined;
        window.console.log("fileupload error:", error);
        if (props.onUploadFileError) {
          props.onUploadFileError(error);
        }
      });
      if (id) {
        newFile.id = id;
        newFile.isDownloading = undefined;
        newIds.push(id);
      }
    }
    props.onChange([...props.value, ...newIds]);
  }

  function handleRemoveFile(fileId: string) {
    window.console.log("removing file:", fileId);
    props.onChange(props.value.filter((entry: string) => entry !== fileId));
  }

  async function onDrop(acceptedFiles: File[]) {
    const newFiles: IFileMetadata[] = [];
    for (let i = 0; i < acceptedFiles.length; i++) {
      const file = acceptedFiles[i];
      const localId = (files.length + i).toString();
      const newFile: IFileMetadata = {
        isLocal: true,
        id: localId,
        name: file.name,
        ...file,
        size: file.size
      };
      newFiles.push(newFile);
    }
    setFiles([...files, ...newFiles]);
  }

  function updateFilesAfterDownload(serverFile: IFileMetadata) {
    const existingFile = files.find(value => value.id === serverFile.id);
    if (existingFile !== undefined) {
      existingFile.isLocal = false;
      existingFile.downloadLink = serverFile.downloadLink;
      existingFile.name = serverFile.name;
      existingFile.size = serverFile.size;
      setFiles([...files]);
    } else {
      const newFile: IFileMetadata = {
        isLocal: false,
        ...serverFile
      };
      setFiles([...files, newFile]);
    }
  }

  function handleDownloadMissingFiles(notDownloadedFiles: string[]) {
    notDownloadedFiles.forEach((serverId: string) => {
      props.getFile(serverId).then(
        (response: IFileMetadata) => {
          updateFilesAfterDownload(response);
        },
        (error: any) => {
          window.console.log(
            "error downloading file",
            serverId,
            "error: ",
            error
          );
          if (props.onGetFileError) {
            props.onGetFileError(serverId, error);
          }
        }
      );
    });
  }

  function handleRemoveUnusedFiles(filesToRemove: IFileMetadata[]) {
    setFiles(
      files.filter(
        file => !filesToRemove.some(fileToRemove => fileToRemove.id === file.id)
      )
    );
  }

  React.useEffect(() => {
    const notDownloadedFiles = props.value.filter(
      (fileId: string) =>
        !files.some(file => file.isLocal === false && fileId === file.id)
    );
    const filesToRemove = files.filter(
      file =>
        !props.value.some(fileId => file.isLocal === true || fileId === file.id)
    );
    if (notDownloadedFiles != null && notDownloadedFiles.length > 0) {
      handleDownloadMissingFiles(notDownloadedFiles);
    }
    if (filesToRemove != null && filesToRemove.length > 0) {
      handleRemoveUnusedFiles(filesToRemove);
    }
  }, [props.value]);

  return props.children ? (
    props.children(
      { getRootProps, getInputProps } as DropzoneState,
      files,
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
        {files.map((file: IFileMetadata) =>
          props.renderFileListItem ? (
            props.renderFileListItem(file)
          ) : (
            <AsyncFileListItem
              key={file.id}
              file={file}
              removeFile={(fileId: string) => {
                props.onChange(
                  props.value.filter((entry: string) => entry !== fileId)
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
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
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

import { ListProps } from "@material-ui/core/List";
import { DropzoneState, DropzoneProps } from "react-dropzone";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

/**
 *
 */
export interface IFileMetadata extends Omit<File, "size"> {
  id: string;
  name: string;
  isLocal: boolean;
  downloadLink?: string;
  size: string | number;
  [key: string]: any;
}

interface IBaseFilePickerProps
  extends Omit<DropzoneProps, "onDrop" | "children"> {
  fileListItemProps?: FileListItemProps;
  fileListProps?: ListProps;
  optionContainerStyle?: React.CSSProperties;
  disableDeleteAllOption?: boolean;
  disableAddOption?: boolean;
  disableOptions?: boolean;
  children?: (
    state: DropzoneState,
    files: IFileMetadata[],
    removeFile: (fileId: string) => void
  ) => JSX.Element;
  renderFileListItem?: (fileData: IFileMetadata) => React.ReactNode;
}

export interface IAsyncFilePickerProps extends IBaseFilePickerProps {
  variant: "async";
  value: string[];
  onChange: (newValue: string[]) => void;
  getFile: (id: string) => Promise<FileMetadata>;
  uploadFile: (file: File) => Promise<string>;
  isLoading?: (isLoading: boolean) => void;
  onUploadFileError?: (e: any) => void;
  onGetFileError?: (id: string, e: any) => void;
}

export interface IFilePickerProps extends IBaseFilePickerProps {
  variant?: "default";
  value: IFileMetadata[];
  onChange: (newValue: IFileMetadata[]) => void;
}

export interface IFileListItemProps {
  file: IFileMetadata;
  removeFile: (id: string) => void;
  listItemStyle?: React.CSSProperties;
  listItemTextStyle?: React.CSSProperties;
  listItemSecondayActionStyle?: React.CSSProperties;
  deleteIconButtonStyle?: React.CSSProperties;
  deleteIconProps?: SvgIconProps;
}

export type FileListItemProps = Omit<IFileListItemProps, "removeFile" | "file">;

export type FileMetadata = Omit<IFileMetadata, "isLocal">;

export type FilePickerProps = IAsyncFilePickerProps | IFilePickerProps;

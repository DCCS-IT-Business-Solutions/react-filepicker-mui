import * as React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  CircularProgress,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface IFileMetadata {
  id: string;
  name: string;
  isLocal: boolean;
  downloadLink?: string;
  size?: string;
  [key: string]: any;
}

interface IFileListItemProps {
  file: IFileMetadata;
  removeFile: (id: string) => void;
  listItemStyle?: React.CSSProperties;
  listItemTextStyle?: React.CSSProperties;
  listItemSecondayActionStyle?: React.CSSProperties;
  deleteIconButtonStyle?: React.CSSProperties;
  deleteIconProps?: SvgIconProps;
}

export type FileListItemProps = Omit<IFileListItemProps, "removeFile" | "file">;

export function FileListItem(props: IFileListItemProps) {
  return (
    <ListItem
      style={props.listItemStyle}
      button
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (props.file.downloadLink) {
          e.stopPropagation();
          window.open(props.file.downloadLink, "_blank");
        }
      }}
    >
      <ListItemText
        primary={props.file.name}
        secondary={props.file.size}
        style={props.listItemTextStyle}
      />
      <ListItemSecondaryAction style={props.listItemSecondayActionStyle}>
        {props.file.isLocal ? (
          <CircularProgress />
        ) : (
          <IconButton
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.stopPropagation();
              props.removeFile(props.file.id);
            }}
            style={props.deleteIconButtonStyle}
          >
            <DeleteIcon {...props.deleteIconProps} />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
}

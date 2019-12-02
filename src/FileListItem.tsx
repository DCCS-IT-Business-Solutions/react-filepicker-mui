import * as React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IFileListItemProps } from "./types";

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
        primary={props.file.name || props.file.path}
        secondary={props.file.size}
        style={props.listItemTextStyle}
      />
      <ListItemSecondaryAction style={props.listItemSecondayActionStyle}>
        <IconButton
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            props.removeFile(props.file.id);
          }}
          style={props.deleteIconButtonStyle}
        >
          <DeleteIcon {...props.deleteIconProps} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

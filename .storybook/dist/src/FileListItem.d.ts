import * as React from "react";
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
export declare type FileListItemProps = Omit<IFileListItemProps, "removeFile" | "file">;
export declare function FileListItem(props: IFileListItemProps): JSX.Element;
export declare namespace FileListItem {
    var displayName: string;
    var __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "file": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "removeFile": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "listItemStyle": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "listItemTextStyle": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "listItemSecondayActionStyle": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "deleteIconButtonStyle": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "deleteIconProps": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
}
export {};

import * as React from "react";
import { INotificationTypeProps } from "./NotificationContext";
import { SnackbarOrigin } from "@material-ui/core/Snackbar";
import { ThemeStyle } from "@material-ui/core/styles/createTypography";
export declare enum NotificationType {
    info = 0,
    warning = 1,
    error = 2,
    custom = 3
}
export interface ICustomNotificationProps {
    autoHideDuration?: number;
    enableClickAway?: boolean;
    transitionDuration?: number;
    snackBarStyle?: React.CSSProperties;
    snackBarMessageStyle?: React.CSSProperties;
    snackBarMessageVariant?: ThemeStyle;
    snackBarTitleStyle?: React.CSSProperties;
    snackBarTitleVariant?: ThemeStyle;
    message: string | React.ReactNode;
    title?: string | React.ReactNode;
    action?: React.ReactNode;
}
export interface INotificationItemProps extends INotificationTypeProps {
    title?: string | React.ReactNode;
    message: string | React.ReactNode;
    open: boolean;
    id: number;
    variant: NotificationType;
    timestamp: number;
    height?: number;
    remainingDuration?: number;
}
export interface ISnackbarItemProps extends INotificationItemProps {
    index: number;
    onClose: (id: number) => void;
    onExited: (id: number) => void;
    children?: any;
    onSetHeight?: (id: number, height: number) => void;
    onCalcMarginTop: (index: number) => number;
    anchorOrigin: SnackbarOrigin;
}
export declare function NotificationItem(props: ISnackbarItemProps): JSX.Element;
export declare namespace NotificationItem {
    var displayName: string;
    var __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "index": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onClose": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onExited": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onSetHeight": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onCalcMarginTop": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "anchorOrigin": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "title": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "message": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "open": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "id": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "variant": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "timestamp": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "height": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "remainingDuration": {
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

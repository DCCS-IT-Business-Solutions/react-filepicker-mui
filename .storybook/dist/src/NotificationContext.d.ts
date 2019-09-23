import * as React from "react";
import { ICustomNotificationProps } from "./NotificationItem";
import { SnackbarOrigin } from "@material-ui/core/Snackbar";
import { ThemeStyle } from "@material-ui/core/styles/createTypography";
export interface INotificationTypeProps {
    autoHideDuration?: number;
    enableClickAway: boolean;
    transitionDuration: number;
    snackBarStyle?: React.CSSProperties;
    snackBarMessageStyle?: React.CSSProperties;
    snackBarMessageVariant?: ThemeStyle;
    snackBarTitleStyle?: React.CSSProperties;
    snackBarTitleVariant?: ThemeStyle;
    action?: React.ReactNode;
}
export interface INotificationContextProps {
    displayOldestOnTop?: boolean;
    infoProps: INotificationTypeProps;
    warningProps: INotificationTypeProps;
    errorProps: INotificationTypeProps;
    anchorOrigin: SnackbarOrigin;
    children?: any;
}
export declare function NotificationContextProvider(props: INotificationContextProps): JSX.Element;
export declare namespace NotificationContextProvider {
    var defaultProps: {
        anchorOrigin: {
            vertical: string;
            horizontal: string;
        };
        infoProps: {
            transitionDuration: number;
            enableClickAway: boolean;
            autoHideDuration: number;
            snackBarStyle: {
                backgroundColor: string;
                color: string;
                fontSize: number;
            };
            snackBarMessageVariant: string;
            snackBarTitleVariant: string;
        };
        warningProps: {
            transitionDuration: number;
            enableClickAway: boolean;
            autoHideDuration: number;
            snackBarStyle: {
                backgroundColor: string;
                color: string;
                fontSize: number;
            };
            snackBarMessageVariant: string;
            snackBarTitleVariant: string;
        };
        errorProps: {
            transitionDuration: number;
            enableClickAway: boolean;
            snackBarStyle: {
                backgroundColor: string;
                color: string;
                fontSize: number;
            };
            snackBarMessageVariant: string;
            snackBarTitleVariant: string;
        };
    };
    var displayName: string;
    var __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "displayOldestOnTop": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "infoProps": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "warningProps": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "errorProps": {
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
        };
    };
}
export interface INotificationContext {
    addInfo: (message: string | React.ReactNode, title?: string | React.ReactNode) => void;
    addWarning: (message: string | React.ReactNode, title?: string | React.ReactNode) => void;
    addError: (message: string | React.ReactNode, title?: string | React.ReactNode) => void;
    addCustomNotification: (notification: ICustomNotificationProps) => void;
}
export declare const NotificationContext: React.Context<any>;

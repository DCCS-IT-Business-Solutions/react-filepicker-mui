import * as React from "react";
import { FilePickerProps } from "./types";
import { AsyncFilePicker } from "./AsyncFilePicker";
import { DefaultFilePicker } from "./DefaultFilePicker";

export function FilePicker(props: FilePickerProps) {
  if (props.variant === "async") {
    return <AsyncFilePicker {...props} />;
  } else {
    return <DefaultFilePicker {...props} />;
  }
}

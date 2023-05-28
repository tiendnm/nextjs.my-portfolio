"use client";
import { CKEditor as CKEditorBase } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "ckeditor5-custom-build";
import type { EventInfo } from "@ckeditor/ckeditor5-utils";
import type { Editor, EditorConfig } from "@ckeditor/ckeditor5-core";
import type { WatchdogConfig } from "@ckeditor/ckeditor5-watchdog/src/watchdog";
import { type InferProps } from "prop-types";

const editorConfig: any = {
  mediaEmbed: {
    previewsInData: true,
  },
};
interface Props<TEditor extends Editor>
  extends InferProps<typeof CKEditorBase.propTypes> {
  editor: {
    create(...args: any): Promise<TEditor>;
  };
  config?: EditorConfig;
  watchdogConfig?: WatchdogConfig;
  onReady?: (editor: TEditor) => void;
  onError?: (error: Error, details: ErrorDetails) => void;
  onChange?: (event: EventInfo, editor: TEditor) => void;
  onFocus?: (event: EventInfo, editor: TEditor) => void;
  onBlur?: (event: EventInfo, editor: TEditor) => void;
}
interface ErrorDetails {
  phase: "initialization" | "runtime";
  willEditorRestart?: boolean;
}

export default function CustomCKEditor({
  config,
  ...props
}: //@ts-expect-error
Omit<Props<ClassicEditor>, "editor">) {
  return (
    <CKEditorBase
      config={{
        ...editorConfig,
        ...config,
      }}
      editor={ClassicEditor as any}
      {...props}
    />
  );
}

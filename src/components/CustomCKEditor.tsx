"use client";
import { CKEditor as CKEditorBase } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "ckeditor5-custom-build";
import { ComponentProps } from "react";

const editorConfig: any = {
  mediaEmbed: {
    previewsInData: true,
  },
};
type EditorProps = ComponentProps<typeof CKEditorBase>;
export default function CustomCKEditor({
  config,
  ...props
}: Omit<EditorProps, "editor">) {
  return (
    <CKEditorBase
      config={{
        ...editorConfig,
        ...config,
      }}
      editor={ClassicEditor}
      {...props}
    />
  );
}

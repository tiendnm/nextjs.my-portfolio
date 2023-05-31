"use client";
import { CKEditor as CKEditorBase } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "ckeditor5-custom-build";
import {
  ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
const editorConfig: any = {
  mediaEmbed: {
    previewsInData: true,
  },
};
type EditorProps = ComponentProps<typeof CKEditorBase>;
interface CustomCKEditorProps extends Omit<EditorProps, "editor" | "onChange"> {
  onChange: (str?: string | null) => void;
}
type onEditorChange = NonNullable<EditorProps["onChange"]>;
type onEditorChangeParams = Parameters<onEditorChange>;
export default function CustomCKEditor({
  config,
  data,
  onChange,
  ...props
}: CustomCKEditorProps) {
  const idRef = useRef<NodeJS.Timeout>();

  const handleChange = useCallback(
    (event: onEditorChangeParams[0], editor: onEditorChangeParams[1]) => {
      if (idRef.current) {
        clearTimeout(idRef.current);
        idRef.current = undefined;
      }
      idRef.current = setTimeout(() => {
        const data = editor.data.get();
        onChange(data);
      }, 1200);
    },
    [onChange]
  );
  return (
    <CKEditorBase
      config={{
        ...editorConfig,
        ...config,
      }}
      onChange={handleChange}
      data={data}
      editor={ClassicEditor}
      {...props}
    />
  );
}

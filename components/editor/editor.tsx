"use client"; // this registers <Editor> as a Client Component

import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";

// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({});

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}

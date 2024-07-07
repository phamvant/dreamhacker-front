"use client";

import EditorTopbar from "@/components/EditorTopBar";
import { Block } from "@blocknote/core";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export default function EditorPage() {
  let preData = "[]";
  const [publishStatus, setPublicStatus] = useState<string>("idle");

  if (typeof window !== "undefined") {
    preData = localStorage.getItem("documentData") || "[]";
  }

  const [blocks, setBlocks] = useState<Block[]>([]);

  const publish = () => {
    console.log(JSON.stringify(blocks));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("documentData", JSON.stringify(blocks));
    }
  }, [blocks]);

  return (
    <div>
      <EditorTopbar onPublish={publish} status={publishStatus} />
      <div className="flex gap-2">
        <div className="flex flex-col w-80 border rounded-xl p-4 gap-4">
          <div className="p-2 text-primary text-xl font-bold">Editor tools</div>
          <div className="border rounded-xl p-2 h-40" />
          <div className="border rounded-xl p-2 h-40" />
          <div className="border rounded-xl p-2 h-40" />
          <div className="border rounded-xl p-2 h-40" />
        </div>
        <div className="xl:border min-h-screen p-6 pt-10 rounded-xl flex-grow">
          <Editor
            setBlocks={setBlocks}
            initialContent={preData}
            editable={false}
          />
        </div>
      </div>
    </div>
  );
}
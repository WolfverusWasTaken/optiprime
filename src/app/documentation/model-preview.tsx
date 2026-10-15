"use client";
import ModelViewer from "@/components/ui/model-viewer";
import { useState } from "react";

interface ModelPreviewProps {
  src: string;
  orientation?: string;
}

export default function ModelPreview({ src, orientation }: ModelPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#e5e7eb",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      )}
      <ModelViewer
        src={src}
        camera-controls={true}
        auto-rotate={true}
        camera-orbit="0deg 90deg 2.5m"
        min-camera-orbit="auto 0deg auto"
        max-camera-orbit="auto 180deg auto"
        orientation={orientation || "0deg 0deg 0deg"}
        style={{ width: "100%", height: "500px", maxHeight: "500px" }}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

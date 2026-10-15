"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import type { ModelViewerElement } from "@google/model-viewer";

interface ModelViewerProps {
  src: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  "camera-controls"?: boolean;
  style?: React.CSSProperties;
  orientation?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "camera-orbit"?: string;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

export default function ModelViewer({
  src,
  alt,
  ar,
  autoRotate,
  "camera-controls": cameraControls,
  style,
  orientation,
  "min-camera-orbit": minCameraOrbit,
  "max-camera-orbit": maxCameraOrbit,
  "camera-orbit": cameraOrbit,
  setIsLoading,
}: ModelViewerProps) {
  const modelRef = useRef<ModelViewerElement | null>(null);

  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  useEffect(() => {
    const modelViwer = modelRef.current;
    if (!modelViwer) return;

    const handleLoad = () => {
      console.log("Model loaded");
      setIsLoading && setIsLoading(false);
      setStatus("loaded");
    };
    const handleError = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      console.error("Error loading model:", detail?.sourceError ?? detail);
      setIsLoading && setIsLoading(false);
      setStatus("error");
    };
    modelViwer.addEventListener("load", handleLoad);
    modelViwer.addEventListener("error", handleError);
    return () => {
      modelViwer.removeEventListener("load", handleLoad);
      modelViwer.removeEventListener("error", handleError);
    };
  }, []);

  const retryLoad = () => {
    setStatus("loading");
    setIsLoading && setIsLoading(true);
    setAttempt((prev) => prev + 1);
  };

  return (
    <>
      {status === "error" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b7280",
            fontSize: "1rem",
          }}
        >
          Failed to load model.
          <button
            onClick={retryLoad}
            style={{ marginLeft: "1rem", color: "#3b82f6" }}
          >
            Retry
          </button>
        </div>
      )}
      <model-viewer
        ref={modelRef}
        src={src}
        alt={alt}
        ar={ar}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        style={style}
        orientation={orientation}
        min-camera-orbit={minCameraOrbit}
        max-camera-orbit={maxCameraOrbit}
        camera-orbit={cameraOrbit}
      ></model-viewer>
    </>
  );
}

import "@google/model-viewer";

// model-viewer.d.ts
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "camera-orbit"?: string;
        "min-camera-orbit"?: string;
        "max-camera-orbit"?: string;
        "field-of-view"?: string;
        "shadow-intensity"?: string;
        "environment-image"?: string;
        exposure?: string;
        orientation?: string;
        scale?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "ar-scale"?: string;
        "ar-placement"?: string;
        "ar-status"?: string;
        "ar-prompt"?: string;
        reveal?: string;
        "interaction-policy"?: string;
        "interaction-prompt"?: string;
      };
    }
  }
}

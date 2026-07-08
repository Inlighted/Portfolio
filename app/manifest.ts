import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Priyanka Deshpande — AI/ML & Data Engineer",
    short_name: "Priyanka.dev",
    description:
      "Portfolio of Priyanka Deshpande — AI/ML Engineer, Data Engineer and Python & Database tutor.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060f",
    theme_color: "#8b5cf6",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

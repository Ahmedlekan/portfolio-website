import { ImageResponse } from "next/og";

export const alt = "Ahmed — DevOps & Cloud Engineer based in Canada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#0a192f", padding: "80px", color: "#ccd6f6", fontFamily: "sans-serif" }}>
      <div style={{ color: "#64ffda", fontSize: 26, marginBottom: 32 }}>AWS · Azure · Terraform · Kubernetes</div>
      <div style={{ fontSize: 88, fontWeight: 700 }}>Ahmed</div>
      <div style={{ fontSize: 48, marginTop: 16 }}>DevOps &amp; Cloud Engineer</div>
      <div style={{ color: "#a3b1cc", fontSize: 26, marginTop: 48 }}>Reliable infrastructure. Automated delivery. Based in Canada.</div>
    </div>,
    size,
  );
}

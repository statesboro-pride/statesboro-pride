export function WaterBottle() {
  return (
    <>
      <svg data-image-mask-id="250649fdeab70fa5e9bb" width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="250649fdeab70fa5e9bb" clipPathUnits="objectBoundingBox">
            <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0"></path>
          </clipPath>
        </defs>
      </svg>
      <div
        style={{
          overflow: "hidden",
          clipPath: "url(#250649fdeab70fa5e9bb)",
          WebkitClipPath: "url(#250649fdeab70fa5e9bb)",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <img src="/images/Water_Bottle.webp" style={{ maxWidth: "100%" }} alt="Boro Pride water bottle" />
      </div>
    </>
  );
}

export default WaterBottle;

import React from "react";

const Charts = ({svgChart}) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Horoscope Chart</h1>
      
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginTop: "20px",
          }}
          dangerouslySetInnerHTML={{ __html: svgChart }} // Render SVG as HTML
        />
    </div>
  );
};

export default Charts;

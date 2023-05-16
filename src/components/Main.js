import React, { useState } from "react";
import QRCode from "react-qr-code";

const Main = () => {
  const [value, setValue] = useState("");
  const [bgColor, setBackground] = useState("#000");
  const [fgColor, setForeground] = useState("#fff");
  const [size, setSize] = useState("210");
  const [level, setLevel] = useState("L");
  const [title, setTitle] = useState("");

  const handleDownload = () => {
    var svgData = document.querySelector("#gen-qr").outerHTML;
    var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `${title}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleQRChange = (e) => {
    switch (e.target.id) {
      case "qr-value":
        setValue(e.target.value);
        break;
      case "qr-title":
        setTitle(e.target.value);
        break;
      case "qr-bg":
        setBackground(e.target.value);
        break;
      case "qr-fg":
        setForeground(e.target.value);
        break;
      case "qr-size":
        setSize(e.target.value);
        break;
      case "qr-level":
        setLevel(e.target.value);
        break;
      default:
        console.log("No Changes Made.");
        break;
    }
  };

  return (
    <>
      <div id="logo-area"><span>Handy</span> QR</div>
      <div id="main-area">
          <div className="input-div">
            <h4>Enter QR Value (Text or URL) : </h4>
            <textarea
              type="text"
              placeholder="Enter QR text"
              onChange={handleQRChange}
              id="qr-value"
              rows={4}
              cols={50}
            />{" "}
            
            <br/><br/>
    
            <label>Enter QR Title : </label>
            <input
              type="text"
              placeholder="Enter QR Title"
              onChange={handleQRChange}
              id="qr-title"
            />{" "}
            <br/><br/>
            
            <label>Set QR Background : </label>
            <input
              type="color"
              onChange={handleQRChange}
              id="qr-bg"
              value={bgColor}
            />{" "}
            <br /><br/>
            
            <label>Set QR Foreground : </label>
            <input
              type="color"
              onChange={handleQRChange}
              id="qr-fg"
              value={fgColor}
            />{" "}
            <br/><br/>
            
            <label>Set QR Size : </label>
            <input
              type="range"
              onChange={handleQRChange}
              id="qr-size"
              min={150}
              max={400}
            />{" "}
            
            <br/><br/>
            
            <label>Set QR Level : </label>
            <select id="qr-level" onChange={handleQRChange} defaultValue={"L"}>
              <option value="L">Level L</option>
              <option value="M">Level M</option>
              <option value="Q">Level Q</option>
              <option value="H">Level H</option>
            </select>
            
            <br/><br/>
            
            <input
              type="button"
              className="download-btn"
              value="Download QR"
              onClick={handleDownload}
            />
          
          </div>
          <div className="qr-div">
            {value !== "" ? (
              <QRCode
                id="gen-qr"
                value={value}
                bgColor={bgColor}
                fgColor={fgColor}
                title={title}
                size={size}
                level={level}
              />
            ) : (
              <></>
            )}
            <br />
          </div>
      </div>
    </>
  );
};

export default Main;

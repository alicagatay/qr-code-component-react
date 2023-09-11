import "./App.css";
import QRCode from "./images/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

function MainComponent() {
  return (
    <div className="MainComponent">
      <ImageComponent />
      <TextComponent1 />
      <TextComponent2 />
    </div>
  );
}

function ImageComponent() {
  return (
    //Create a new component called ImageComponent which displays an image with the file path src/images/image-qr-code.png
    <div className="ImageComponent">
      <img src={QRCode} alt="QR Code" />
    </div>
  );
}

function TextComponent1() {
  return (
    <div className="TextComponent1">
      <p>Improve your front-end skills by building projects</p>
    </div>
  );
}
function TextComponent2() {
  return (
    <div className="TextComponent2">
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;

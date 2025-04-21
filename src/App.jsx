import './App.css';

const mainStyle = {
  width: "1920px",
  height: "1022px",
  backgroundColor: "#909090",
  position: "relative",
  overflow: "hidden",
  border: "blue solid 2px"
}

const myPic = {
  width: "60%",
  height: 1374,
  backgroundColor: "black",
  position: "absolute",
  right: -90,
  transform: "rotate(9.67deg)",
  top: -90,
}

const app = {
  maxWidth: "100vw",
  height: "100vh",
  backgroundColor: "grey",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

function App() {
  return (
    <div className="App" style={app}>
      <div className='main' style={mainStyle}>
        <div className="myPicture" style={myPic}></div>
      </div>
    </div>
  );
}

export default App;

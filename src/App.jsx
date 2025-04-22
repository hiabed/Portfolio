import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const mainStyle = {
  width: "1920px",
  height: "1022px",
  backgroundColor: "#909090",
  position: "relative",
  overflow: "hidden",
  border: "blue solid 2px",
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
  minWidth: 1920,
  maxWidth: "100vw",
  height: "200vh",
  backgroundColor: "grey",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const navigation = {
  color: "white",
  width: 637,
  height: 46,
  // border: "1px red solid",
  fontFamily: "Montserrat",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  position: "fixed",
  fontSize: 17,
  left: "50%",
  top: 40,
}

const contact = {
  height: 46,
  width: 147,
  borderRadius: 23,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  backgroundColor: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: 15,
}

function App() {
  return (
    <div className="App" style={app}>
      <div className='main' style={mainStyle}>
        <div className="myPicture" style={myPic}>
          <div id="me">
            <img src="me-removebg-preview.png" alt="My Picture" style={{height: 706,}} />
          </div>
        </div>
        <div className="navig" style={navigation}>
            <a href="#About" style={{color: "white",textDecoration: "none", fontWeight: "bold"}}>About me</a>
            <a href="#Skills" style={{color: "white",textDecoration: "none", fontWeight: "bold"}}>Skills</a>
            <a href="#Portfolio" style={{color: "white",textDecoration: "none", fontWeight: "bold"}}>Portfolio</a>
            <a href="#Contact" style={contact}>CONTACT ME</a>
        </div>
        <div className='per-infos'>
          <h3 className='hi'>Hi, I am</h3>
          <h1 className='my-name'>Mohammed-Abed Hassani-Idrissi</h1>
          <p className='description'>Software Developer / Front-end Enthusiast</p>
          <div className='socials'>
            <div className='social'><FontAwesomeIcon icon={faAt} style={{fontSize: 34}}/></div>
            <div className='social'><FontAwesomeIcon icon={faGithub} style={{fontSize: 34}}/></div>
            <div className='social'>
              <div id="linked">
                <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize: 24}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
    </div>
  );
}

export default App;

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import About from './About';

const mainStyle = {
  width: "1920px",
  height: "1022px",
  backgroundColor: "#D7D7D7",
  position: "relative",
  overflow: "hidden",
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
  // height: "200vh",
  backgroundColor: "grey",
  display: "flex",
  backgroundColor: "#D7D7D7",
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
    <div className="App w-32 bg-blue-500" style={app}>
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
          <p className='title'>Software Developer / Front-end Enthusiast</p>
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
      <div className='description-container'>
        <div className='description-child'>
          <h2 className='berries'>IT BERRIES</h2>
          <p className='description'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. 
            Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. 
            Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. 
            Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis.
            Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, 
            accumsan nec eros.
          </p>
          <p className='read-more'>READ MORE</p>
        </div>
        <div className='it-container'>
          <h1 className='it'>IT</h1>
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;

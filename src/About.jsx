import "./About.css";

const About = () => {
    return (
    <div id="About">
        <h1 className='about'>ABOUT ME</h1>
        <p className="about-description">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus.
            Sed ornare sit amet lorem sed viverra.
            In vel urna quis libero viverra facilisis ut ac est.
        </p>
        <p className='read-more' style={{borderColor: "black"}}>EXPLORE</p>
        <div className="separator"></div>
        <div className="knowledges">
            <div className="first-two">
                <div className="knowledge" style={{width: 468}}>
                    <div className="h1">
                        <div className="design sign"></div>
                        <h1>DESIGN</h1>
                    </div>
                    <p>
                        I can design the site based on your needs and suggestions.
                        I can also design the site from scratch and consult you during the job.
                    </p>
                </div>
                <div className="knowledge" style={{width: 483}}>
                    <div className="h1">
                        <div className="development sign"></div>
                        <h1>DEVELOPMENT</h1>
                    </div>
                    <p>
                        I can design the site based on your needs and suggestions. 
                        I can also design the site from scratch and consult you during the job. 
                    </p>
                </div>
            </div>
            <div className="knowledge" style={{width: 487}}>
                <div className="h1">
                    <div className="maintenance sign"></div>
                    <h1>MAINTENANCE</h1>
                </div>
                <p>
                    I can design the site based on your needs and suggestions.
                    I can also design the site from scratch and consult you during the job.
                </p>
            </div>
        </div>
    </div>
    )
}

export default About;
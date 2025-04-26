import "./About.css";

const About = () => {
    return (
    <div id="About">
        <h1 className='about'>ABOUT ME</h1>
        <p className="about-description">
            Over two years of focused learning and hands-on project-building have given me the confidence to contribute
            value in any digital-focused environment, regardless of tech stack or tools. My journey began with online
            platforms like Codecademy and freeCodeCamp, where I explored Ruby, JavaScript, and Responsive Web Design.
            I later joined 1337, a high-quality peer-learning program, where I completed 24 challenging projects—solo and
            team-based—across various domains, including Full-Stack Web Development, OOP, Algorithms,
            Multithreading, Unix Systems, Virtualization, Gaming, and DevOps.
            This experience taught me how to independently learn, adapt, and deliver in real-world scenarios with people
            from diverse backgrounds. Some of my projects are listed below.
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
        <div className="separator" style={{marginTop: 80}}></div>
    </div>
    )
}

export default About;
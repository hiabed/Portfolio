import './Portfolio.css';

const images = [
    {}
]

const Portfolio = () => {
    const projectsData = [
        {
          image: 'pingpong.png',  // Add your actual image URLs here
          description: 'Project 1 description',
          buttons: ['Button 1', 'Button 2'],
        },
        {
          image: 'server.webp',
          description: 'Project 2 description',
          buttons: ['Button 3', 'Button 4'],
        },
        {
          image: 'inception.webp',
          description: 'Project 3 description',
          buttons: ['Button 5', 'Button 6'],
        },
        {
          image: 'minishell.png',
          description: 'Project 4 description',
          buttons: ['Button 7', 'Button 8'],
        },
        {
          image: 'ecommerce.png',
          description: 'Project 5 description',
          buttons: ['Button 9', 'Button 10'],
        },
        {
          image: 'cub3d.webp',
          description: 'Project 6 description',
          buttons: ['Button 11', 'Button 12'],
        },
      ];
    return (
        <div id="Portfolio">
            <div className="portfolio">
            </div>
            <div className="tabs">
                <a className='tab' style={{cursor: "pointer",color: "#FFFBFB"}}>Projects</a>
                <a className='tab' style={{pointerEvents: "none"}}>Certifications</a>
                <a className='tab' style={{pointerEvents: "none"}}>Education</a>
            </div>
            <div className="projects">
                {projectsData.map((project, index) => (
                    <div className="project" key={index}>
                    <img src={project.image} alt={`Project ${index + 1}`} width="100%" height="100%" />
                    {/* <p>{project.description}</p> */}
                    {/* <div className="buttons">
                        {project.buttons.map((buttonText, btnIndex) => (
                        <button key={btnIndex}>{buttonText}</button>
                        ))}
                    </div> */}
                    </div>
                ))}
            </div>
            <div className="more-to-come">
                <h3>And many more to come!</h3>
            </div>
        </div>
    )
}

export default Portfolio;
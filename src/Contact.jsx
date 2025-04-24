import "./Contact.css";

const Contact = () => {
    return (
        <div id="Contact">
            <h1 className='about' style={{width: 367}}>Contact</h1>
            <p>
                Nulla in velit a metus rhoncus tempus. 
                Nulla congue nulla vel sem varius finibus. 
                Sed ornare sit amet lorem sed viverra. 
                In vel urna quis libero viverra facilisis ut ac est.
            </p>
            <div className="separator"></div>
            <form id="contact-form">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="ENTER YOUR NAME*" required/>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="ENTER YOUR EMAIL*" required/>
                <label htmlFor="phone" className="sr-only">Phone number</label>
                <input type="tel" name="phone" id="phone" placeholder="PHONE NUMBER"></input>
                <label htmlFor="message" className="sr-only">message</label>
                <input name="message" id="message" placeholder="YOUR MESSAGE*" required></input>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact;
import myImage from '../assets/images/myImagePro_transparent.png'
import './About.css'
function About(){
    return(
        <section id="about">
            <img class="profile-picture gradient-background" src={myImage} alt="Profile Picture" />
            <h1>XR Engineer <br /> Developing <span class="gradient-text">immersive XR</span> simulations</h1>
            <p>I am a <span class="gradient-text">Certified Unity Professional Programmer</span>  and experienced software engineer with 4 years of delivering clean, scalable code and well-designed architectures. Driven to improve lives through technology, I focus on crafting high-quality AR/VR solutions that address real-world challenges and provide immersive, human-centered experiences, while constantly learning, innovating, and raising the bar for code quality and performance.</p>
            <div id="about-actions">
                <button class="about-action-btn" >Get In Touch</button>
                <button class="about-action-btn">Download CV</button>
            </div>
        </section>
    ); 
}
export default About;
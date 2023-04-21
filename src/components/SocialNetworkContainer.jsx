import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import '../styles/components/socialnetworks.sass'




const SocialNetworkContainer = () => {
    return (
      <section id="social-networks">
        <div className="social-btn">
          <a href="https://www.linkedin.com/in/jefferson-william-77a788213/" target={'_blank'} id="linkedin"> <FaLinkedinIn />
          </a>

          <a href="https://github.com/jeff-dev-777" target={'_blank'} id="github"> <FaGithub />
          </a>

          <a href="" target={'_blank'} id="whatsapp"> <FaWhatsapp />
          </a>
        </div>
      </section>
    );
  };
 
export default SocialNetworkContainer;
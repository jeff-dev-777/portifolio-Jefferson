import Avatar from "./img/jefferson-portifolio.jpeg"
import '../styles/components/sidebar.sass'
import SocialNetworks from "./SocialNetworkContainer"
import InformationContainer from "./InformationContainer";
const Sidebar = () => {
    return <aside id="sidebar">
        <img  src={Avatar} alt="jefferson william" />
        <p className="title">Desenvolvedor Full Stack</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="https://liveestacio-my.sharepoint.com/personal/202302597785_alunos_estacio_br/Documents/curriculos-jefferson-william%20(4).pdf" target={'_blank'} className="btn">Dowload curriculo</a>
    </aside>;
}
 
export default Sidebar;
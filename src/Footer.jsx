import linkedin from "./img/linkedin.webp";
import git from "./img/git.png";
import gmail from "./img/gmail.jpg";
import corazon from "./img/corazon.png";
const Footer = () => {
  return (
    <footer className="md:p-4 text-center lg:flex md:justify-center w-[80%] mt-2 mb-2 mx-auto  gap-8">
      <p className="text-sm md:text-xl md:pb-2 xl:text-2xl">
        <img
          src={corazon}
          alt="icono de corazon"
          width={50}
          height={50}
          className="inline-block mr-2 w-[25px] h-[25px]"
        />
        Todos Los Derechos Reservados Raudis Consoro ©2024
      </p>
      <div className="flex  justify-around gap-4">
        <a href="#">
          <img width={30} height={30} src={gmail} alt="icono de gmail" />
        </a>
        <a href="#">
          <img width={30} height={30} src={git} alt="icono de git" />
        </a>
        <a href="#">
          <img width={30} height={30} src={linkedin} alt="icono de linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

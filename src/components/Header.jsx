import imgPerfil from "../img/perfil.jpg";
import ModosDiaNoche from "./ModosDiaNoche";
import Navegacion from "./Navegacion";
const Header = () => {
  return (
    <header className="p-4 flex flex-col md:flex-row justify-evenly items-center bg-slate-500 text-white">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-4 md:mb-0 gap-4 ">
        <img
          src={imgPerfil}
          alt="Imagen de perfil"
          width={100}
          height={100}
          className="rounded-[50px] shadow-slate-500 shadow-xl"
        />
        <span className=" md:mt-10 text-4xl font-bold text-green-400 letra hover:translate-x-1">
          Raudis Consoro
        </span>
      </div>

      <Navegacion />
      <ModosDiaNoche />
    </header>
  );
};

export default Header;

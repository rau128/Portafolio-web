const Navegacion = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-2 md:gap-10 text-[1.3rem] mb-2 md:mb-0">
      <a
        href="#"
        className="text-orange-600 bg-green-500 p-3 hover:rotate-3 transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Proyectos
      </a>
      <a
        href="#"
        className="bg-green-500 p-3 hover:rotate-3 transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Tecnologías
      </a>
      <a
        href="#"
        className="bg-green-500 p-3 hover:rotate-3 transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Sobre Mi
      </a>
      <a
        href="#"
        className="bg-green-500 p-3 hover:rotate-3 transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Curriculum
      </a>
    </nav>
  );
};

export default Navegacion;

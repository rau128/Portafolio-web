const Navegacion = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-2 lg:gap-10 text-[1.3rem] md:text-[1rem] mb-2 md:mb-0">
      <a
        href="#proyectos"
        className="text-orange-600 bg-green-500 p-3  hover:rotate-3 md:hover:text-2xl transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Proyectos
      </a>
      <a
        href="#"
        className="bg-green-500 p-3 hover:rotate-3 md:hover:text-2xl transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Tecnologías
      </a>
      <a
        href="#"
        className="bg-green-500 p-3 md:p-3 hover:rotate-3 md:hover:text-2xl transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Sobre Mi
      </a>
      <a
        href="#"
        className="bg-green-500 p-3 hover:rotate-3 md:hover:text-2xl transition-all hover:bg-orange-500 hover:text-white rounded-md"
      >
        Curriculum
      </a>
    </nav>
  );
};

export default Navegacion;

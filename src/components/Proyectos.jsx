import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.webp";
const Proyectos = () => {
  return (
    <section
      className="mx-auto w-[90%] hover:rotate-3 bg-gray-400 py-4 rounded-md "
      id="proyectos"
    >
      <h2 className="text-5xl text-white text-center ">Mis Proyectos</h2>

      <div className="md:grid gap-4 grid-cols-2 p-4 ">
        <img
          src={p1}
          alt="Imagen del proyectos"
          className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
          width={400}
          height={300}
        />
        <img
          src={p2}
          alt="Imagen del proyectos"
          className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
          width={400}
          height={300}
        />
        <img
          src={p3}
          alt="Imagen del proyectos"
          className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
          width={400}
          height={300}
        />
        <img
          src={p1}
          alt="Imagen del proyectos"
          className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
          width={400}
          height={300}
        />
        <img
          src={p2}
          alt="Imagen del proyectos"
          className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
          width={400}
          height={300}
        />
        <img
          src={p3}
          alt="Imagen del proyectos"
          className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};

export default Proyectos;

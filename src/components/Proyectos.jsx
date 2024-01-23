import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";

const Proyectos = () => {
  return (
    <section
      className="mx-auto w-[90%] hover:rotate-3 bg-gray-400 py-4 rounded-md "
      id="proyectos"
    >
      <h2 className=" text-3xl md:text-5xl text-white text-center ">
        Mis Proyectos
      </h2>

      <div className="md:grid gap-4 grid-cols-2 p-4 ">
        <a href="https://frontendstoreraudis.netlify.app/">
          <img
            src={p1}
            alt="Imagen del proyectos"
            className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
            width={400}
            height={300}
          />
        </a>
        <a href="https://festivalrc.netlify.app/">
          <img
            src={p2}
            alt="Imagen del proyectos"
            className="block border-2 rounded-md border-green-600 mx-auto mb-4 w-[90%] hover:rotate-3 h-full max-w-px-[300px]"
            width={400}
            height={300}
          />
        </a>
      </div>
    </section>
  );
};

export default Proyectos;

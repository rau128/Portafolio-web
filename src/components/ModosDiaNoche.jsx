import imgDia from "../img/dia.png";
import imgNoche from "../img/noche.png";
const ModosDiaNoche = () => {
  return (
    <div>
      <img
        src={`${imgNoche}`}
        alt="imagen para cambiar al modo noche o modo dia"
        width={50}
        height={50}
      />
    </div>
  );
};

export default ModosDiaNoche;

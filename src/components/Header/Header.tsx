import image1 from "../../assets/ilustra-01.svg";
import image2 from "../../assets/ilustra-02.svg";

export default function Header() {
  return (
    <header className="w-full h-[33.25rem] flex justify-center items-center">
      <img src={image1} alt="" className="absolute top-0 left-0" />
      <div className="bg-red-600 w-[62.063rem] h-[20.75rem] z-50">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-base font-medium text-red uppercase tracking-widest">
            find your block
          </h3>
          <h1 className="text-5xl leading-[3.75rem] font-bold max-w-[40.438rem] text-center text-black">
            Encontre os <span className="text-purple">melhores blocos</span> de
            carnaval de 2023
          </h1>
        </div>
        <div className="mt-10 p-10 flex gap-6 justify-center">
          <input type="text" placeholder="Pesquise por nome" />
          <select name="select">
            <option value="">Selecione uma cidade</option>
            <option value="orleans">Orleans</option>
            <option value="criciuma">Criciuma</option>
            <option value="tubarao">Tubarão</option>
          </select>
          <button>buscar agora</button>
        </div>
      </div>
      <img src={image2} alt="" className="absolute top-[13.375rem] right-0" />
    </header>
  );
}

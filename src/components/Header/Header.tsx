import image1 from "../../assets/ilustra-01.svg";
import image2 from "../../assets/ilustra-02.svg";
import search from "../../assets/icons/search.svg";
import location from "../../assets/icons/location.svg";

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
        <div className="mt-10 p-10 flex gap-6 justify-between">
          <div className="pt-3 pr-2 pb-3 pl-4 flex gap-3 items-center flex-1">
            <img src={search} alt="icon search" />
            <input
              type="text"
              className="w-full text-base font-normal text-gray"
              placeholder="Pesquise por nome"
            />
          </div>

          <div className="pt-3 pr-2 pb-3 pl-4 flex gap-3 items-center flex-1">
            <img src={location} alt="icon location" />
            <select
              name="select"
              className="w-full text-base font-normal text-gray"
            >
              <option value="">Selecione uma cidade</option>
              <option value="SaoPaulo">São Paulo</option>
              <option value="Frorianopolis">Frorianópolis</option>
              <option value="Curitiba">Curitiba</option>
              <option value="Salvador">Salvador</option>
              <option value="RioDeJanerio">Rio de Janeiro</option>
              <option value="PortoAlegre">Porto Alegre</option>
            </select>
          </div>

          <button className="py-3 px-8 bg-purple rounded font-bold text-sm leading-6 uppercase text-white">
            buscar agora
          </button>
        </div>
      </div>
      <img src={image2} alt="" className="absolute top-[13.375rem] right-0" />
    </header>
  );
}

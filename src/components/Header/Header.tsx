import { useContext, useState } from "react";
import { SearchBlocosContext } from "../../context/SearchBlocosContext";

import image1 from "../../assets/ilustra-01.svg";
import image2 from "../../assets/ilustra-02.svg";
import search from "../../assets/icons/search.svg";
import location from "../../assets/icons/location.svg";

export default function Header() {
  const [nameBloco, setNameBloco] = useState("");
  const [city, setCity] = useState("");

  const { handleSearchBloco } = useContext(SearchBlocosContext);

  return (
    <header className="w-full h-[33.25rem] flex justify-center items-center">
      <img src={image1} alt="" className="absolute top-0 left-0" />
      <div className="bg-red-600 w-[62.063rem] h-[20.75rem] z-50">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-base font-medium text-red uppercase tracking-widest">
            find your block
          </h3>
          <h1 className="text-5xl leading-[3.75rem] font-bold max-w-[40.438rem] text-center text-black-700">
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
              value={nameBloco}
              onChange={(e) => setNameBloco(e.target.value)}
            />
          </div>

          <div className="pt-3 pr-2 pb-3 pl-4 flex gap-3 items-center flex-1">
            <img src={location} alt="icon location" />
            <select
              name="select"
              className="w-full text-base font-normal text-gray"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Selecione uma cidade</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Florianópolis">Frorianópolis</option>
              <option value="Curitiba">Curitiba</option>
              <option value="Salvador">Salvador</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Porto Alegre">Porto Alegre</option>
            </select>
          </div>

          <button
            className="py-3 px-8 bg-purple rounded font-bold text-sm leading-6 uppercase text-white"
            onClick={() => handleSearchBloco(nameBloco, city)}
          >
            buscar agora
          </button>
        </div>
      </div>
      <img src={image2} alt="" className="absolute top-[13.375rem] right-0" />
    </header>
  );
}

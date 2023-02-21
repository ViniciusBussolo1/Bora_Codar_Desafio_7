import { Blocos } from "../../data/blocos";

import location from "../../assets/icons/location.svg";

export default function Main() {
  return (
    <section className="w-full flex justify-center pb-6">
      <main className="max-w-[102rem] mt-28">
        <div className="flex justify-between">
          <h2 className="text-3xl leading-[2.75rem] font-bold text-black-700">
            Blocos recomendados
          </h2>
          <div className="flex gap-2 items-center">
            <button className="px-6 text-sm leading-6 font-bold text-white uppercase bg-purple rounded h-8">
              Lista
            </button>
            <button className="px-6 text-sm leading-6 font-bold text-purple uppercase bg-white h-8">
              Mapa
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {Blocos.map((item, index) => (
            <div key={index} className="w-96 flex flex-col items-center">
              <img
                src={item.image}
                alt="carnival block image"
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-4 mt-4 pl-3">
                <h3 className="text-xl font-bold text-black-700">
                  {item.title}
                </h3>
                <span className="text-base font-normal text-black-900">
                  {item.description}
                </span>
                <div className="flex gap-2">
                  <img src={location} alt="icon search" />
                  <span className="text-base font-normal text-black-900">
                    {item.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

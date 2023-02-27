import { createContext, ReactNode, useState } from "react";
import { Blocos } from "../data/blocos";

interface SearchBlocosContextDataProps {
  handleSearchBloco: (nameBloco: string, city: string) => void;
  blocosFilter: Array<Object>;
}

interface SearchBlocosContextProvidersProps {
  children: ReactNode;
}

export const SearchBlocosContext = createContext(
  {} as SearchBlocosContextDataProps
);

export function SearchBlocosContextProvider({
  children,
}: SearchBlocosContextProvidersProps) {
  const [blocosFilter, setBlocosFilter] = useState([{}]);

  function removerSpecials(texto: any) {
    // eliminando acentuação
    texto = texto.replace(/[ÀÁÂÃÄÅ]/, "A");
    texto = texto.replace(/[àáâãäå]/, "a");
    texto = texto.replace(/[ÈÉÊË]/, "E");
    texto = texto.replace(/[Ç]/, "C");
    texto = texto.replace(/[ç]/, "c");

    return texto.replace(/[^a-z0-9]/gi, "");
  }

  function handleSearchBloco(nameBloco: string, city: string) {
    const newBlocos = Blocos.filter(
      (item) =>
        removerSpecials(item.title)
          .toLocaleLowerCase()
          .includes(removerSpecials(nameBloco).toLocaleLowerCase()) &&
        item.city.includes(city)
    );

    setBlocosFilter(newBlocos);
  }

  return (
    <SearchBlocosContext.Provider value={{ blocosFilter, handleSearchBloco }}>
      {children}
    </SearchBlocosContext.Provider>
  );
}

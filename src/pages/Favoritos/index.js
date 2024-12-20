import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
    const [favorito, setFavorito] = useState([]);

    const agregarFavorito = (nuevoFavorito) => {
        const favoritoRepetido = favorito.some(item => item.id === nuevoFavorito.id);
        let nuevaLista = [...favorito];

        if (favoritoRepetido) {
            nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id);
        } else {
            nuevaLista.push(nuevoFavorito);
        }

        setFavorito(nuevaLista);
    };

    return (
        <FavoritosContext.Provider value={{ favorito, agregarFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
};

export const useFavoritosContext = () => {
    return useContext(FavoritosContext);
};

export default FavoritosContext;
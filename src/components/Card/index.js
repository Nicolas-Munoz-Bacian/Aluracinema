import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavoritosContext } from "../context/FavoritosContext";
import styles from "../Card/Card.module.css";
import iconFavorito from "./iconFavorito.png";
import iconNoFavorito from "./iconNoFavorito.png";
import EditModal from "../../components/Card/edit.modal";

function Card({ id, capa, titulo, descripcion, video }) {
    const { favorito, agregarFavorito } = useFavoritosContext();
    const [showModal, setShowModal] = useState(false);
    const isFavorito = favorito.some(fav => fav.id === id);
    const icon = isFavorito ? iconFavorito : iconNoFavorito;

    const handleEdit = () => {
        setShowModal(true);
    };

    const handleDelete = () => {
        // Manejador de eliminación de card
    };

    return (
        <div className={styles.container}>
            <Link to={`/player/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icon}
                alt="Icono favorito"
                className={styles.favorito}
                onClick={() => agregarFavorito({ id, titulo, capa })}
            />
            <button onClick={handleEdit} className={styles.button}>
                Editar
            </button>
            <button onClick={handleDelete} className={styles.button}>
                Eliminar
            </button>

            {showModal && (
                <EditModal
                    initialData={{ id, titulo, capa, descripcion, video }}
                    onClose={() => setShowModal(false)}
                    // Mandar las funciones de guardado o eliminación si es necesario
                />
            )}
        </div>
    );
}

export default Card;
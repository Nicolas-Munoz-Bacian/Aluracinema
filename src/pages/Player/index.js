import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import NotFound from "../../pages/NotFound";
import styles from "./Player.module.css";

function Player() {
    const [video, setVideo] = useState(null);
    const { id } = useParams(); // Usa destructuring para obtener id
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos`) // Obtiene todos los videos
            .then(response => response.json())
            .then(data => {
                const foundVideo = data.find(v => v.id === parseInt(id, 10)); // Busca por id
                if (foundVideo) {
                    setVideo(foundVideo);
                } else {
                    setVideo(null);
                }
            })
            .catch(error => {
                console.error('Error fetching video:', error);
                setVideo(null);
            });
    }, [id]);

    useEffect(() => {
        if (video) {
            window.location.href = video.video;
        }
    }, [video]);

    if (!video) return <NotFound />;

    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                {/* No se necesita el iframe aquí */}
            </section>
        </>
    );
}

export default Player;

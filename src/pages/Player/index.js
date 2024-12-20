import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import NotFound from "../../pages/NotFound";
import styles from "../../pages/Player/Player.module.css";
import videos from "../../../src/data/db.json"; // Asegúrate de que la ruta sea correcta

function Player() {
    const [video, setVideo] = useState(null);
    const parametros = useParams();

    useEffect(() => {
        const videoEncontrado = videos.videos.find(video => video.id === Number(parametros.id));
        if (videoEncontrado) {
            setVideo(videoEncontrado);
        } else {
            setVideo(null);
        }
    }, [parametros.id]);

    if (!video) return <NotFound />;
    
    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="80vh" 
                    src={video.link} 
                    title={video.titulo} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </section>
        </>
    );
}

export default Player;
import Image from "next/image";
import Charizard from "@/public/imagens/charizard.png"
import style from "../styles/Sobre.module.css"

export default function Sobre() {
    return (
        <div className={style.sobre}>
            <h1>Sobre o projeto</h1> <br/>
            <p>PokeNext é um App construido em Next.js para consultar Pokémons.</p>
            <Image
            className={style.img}
            src={Charizard}
            width={400}
            height={400}
            alt="Imagem do Charizard"
            />
        </div>
    )
}
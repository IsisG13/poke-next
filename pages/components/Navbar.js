import Image from "next/image";
import Link from "next/link";
import PokeNext from "@/public/imagens/pokeball.png"
import styles from "../../styles/NavBar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image
            src={PokeNext}
            width="30"
            height="30"
            alt="PokeNext"
            />
            <h1>Pokenext</h1>
        </div>
        <ul className={styles.link_items}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/sobre">Sobre</Link>
            </li>
        </ul>
    </nav>
  );
}

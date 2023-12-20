import style from "@/styles/Home.module.css";
import Image from "next/image";
import Card from './components/Card'
import pokeBall from "@/public/imagens/pokeball.png";
 
export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={style.title_container}>
        <h1 className={style.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          className={style.logo}
          src={pokeBall}
          alt="Imagem do Charizard"
        />
      </div>

      <div className={style.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
import styles from "./styles.module.css";

export const SectionBanner = () => {
  return (
    <div className={styles.section_one}>
      <section className={styles.section_one_box_text}>
        <h1 className={styles.section_one_title}>
          Monomito <br></br> Filmes
        </h1>
        <p className={styles.section_one_text}>
          Muito mais que uma produtora <br></br> de conteúdo audiovisual
        </p>
      </section>
      <section className={styles.section_one_logo_monomito}>
        <Image
          className={styles.section_one_logo_monomito_image}
          src="/logo_monomito.png"
          width={150}
          height={150}
          alt="Monomito Filmes"
          title="Monomito Filmes"
        />
      </section>
    </div>
  );
};

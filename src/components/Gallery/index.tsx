import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoPeto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import styles from "./Gallery.module.css";
import { Overlay } from "../Overlay";
import { Button } from "../Button";

// Componente principal da galeria
export const Gallery = () => {
  return (
    // Container principal da galeria
    <div className="container">
      {/* Grid da galeria, definido pelo CSS Modules */}
      <div className={styles.galleryGrid}>
        {/* Highlight - Modelo Masculino (galeria-homem.jpg) */}
        {/* Card de destaque com overlay e botões */}
        <div className={`${styles.imageCard} ${styles.highlight} relative rounded-[20px] overflow-hidden`}>
          <img
            className="w-full h-full object-cover"
            src={galeriaHomem}
            alt="Krypton One - Estilo urbano com atitude"
          />
          
          <Overlay title="Kripton One" subtitle="Estilo urbano com atitude" className="inset-0 justify-center">
            <Button variant="secondary">Feminino</Button>
            <Button variant="secondary">Masculino</Button>
          </Overlay>
        </div>

        {/* Sneaker Purple - Tênis Roxo (galeria-tenis-roxo.jpg) */}
        {/* Card do tênis roxo */}
        <div className={`${styles.imageCard} ${styles.sneakerPurple} relative rounded-[20px] overflow-hidden`}>
          <img src={galeriaTenisRoxo} alt="Tênis Roxo" className="w-full h-full object-cover" />
        </div>

        {/* Model - Modelo Feminina (galeria-modelo.jpg) */}
        {/* Card da modelo feminina */}
        <div className={`${styles.imageCard} ${styles.model} relative rounded-[20px] overflow-hidden`}>
          <img src={galeriaModelo} alt="Modelo Feminina" className="w-full h-full object-cover" />
        </div>

        {/* Sneaker Color - Tênis Colorido (galeria-tenis-colorido.jpg) */}
        {/* Card do tênis colorido */}
        <div className={`${styles.imageCard} ${styles.sneakerColor} relative rounded-[20px] overflow-hidden`}>
          <img src={galeriaTenisColorido} alt="Tênis Colorido" className="w-full h-full object-cover" />
        </div>

        {/* Sneaker White - Tênis Branco e Preto (galeria-tenis-branco-e-preto.jpg) */}
        {/* Card do tênis branco e preto */}
        <div className={`${styles.imageCard} ${styles.sneakerWhite} relative rounded-[20px] overflow-hidden`}>
          <img src={galeriaTenisBrancoPeto} alt="Tênis Branco e Preto" className="w-full h-full object-cover" />
        </div>

        {/* Sneaker Silver - Tênis Cinza (galeria-tenis-cinza.jpg) */}
        {/* Card do tênis cinza */}
        <div className={`${styles.imageCard} ${styles.sneakerSilver} relative rounded-[20px] overflow-hidden`}>
          <img src={galeriaTenisCinza} alt="Tênis Cinza" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

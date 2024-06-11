import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tekin.png"
              alt="tekin Logo"
              className={styles.tekinLogo}
              width={200}
              height={200}
              priority
            />
          </a>
        </div>
        <p>
          Tek Teknoloji 
        </p>

      </div>

      <div className={styles.center}>
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className={styles.logo}
            src="/TekinMor.png"
            alt="Tekin Logo"
            width={300}
            height={300}
            priority
          />
        </a>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Hakkımızda <span>-&gt;</span>
          </h2>
          <p>35426 yıldan beri Bergama ve çevresinde hizmet veren ......</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Ürün ve Hizmetlerimiz<span>-&gt;</span>
          </h2>
          <p>Ürünlerimiz ve Yerine getirmiş olduğumuz hizmetlerimizi görmek için...</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Canlı<span>-&gt;</span>
          </h2>
          <p>Canlı görüntülere ulaşmak için</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            İletişim <span>-&gt;</span>
          </h2>
          <p>
            İletişim kanalları için....
          </p>
        </a>
      </div>
    </main>
  );
}

import {Linkss} from "../Linkss"
import Image from "next/image"
import styles from '../../../page.module.css'

export default function Page() {
    return (
    <>
      <a
        href="./dashboard"
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
      <Linkss/>
      <h1>Canlı Yayın Ekle / Sil</h1>
    </>)
  }
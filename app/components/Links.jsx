'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul style={{ backgroundColor:'gray', fontSize:'2rem', display:'flex', justifyContent:'space-around', }}>
        <li  style={{listStyle:'none'}} >
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Ana Sayfa
          </Link>
        </li>
        <li style={{listStyle:'none',}}>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="../dashboard/about"
          >
            About
          </Link>
        </li>
        <li style={{listStyle:'none'}}>
          <Link
            className={`link ${pathname === '/canli' ? 'active' : ''}`}
            href="../dashboard/canli"
          >
            Canlı
          </Link>
        </li>
        <li style={{listStyle:'none'}}>
          <Link
            className={`link ${pathname === '/urun' ? 'active' : ''}`}
            href="../dashboard/urun"
          >
          Ürün ve Hizmetler
          </Link>
        </li>
        <li style={{listStyle:'none'}}>
          <Link
            className={`link ${pathname === '/iletisim' ? 'active' : ''}`}
            href="../dashboard/iletisim"
          >
            İletişim
          </Link>
        </li>
        <li style={{listStyle:'none'}}>
          <Link
            className={`link ${pathname === '/kayit' ? 'active' : ''}`}
            href="../dashboard/kayit"
          >
            Kayıt Sayfası
          </Link>
        </li>
      </ul>
    </nav>
  )
}
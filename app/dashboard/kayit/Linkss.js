'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

 
export function Linkss() {
  const pathname = usePathname()
    
  return (
    <nav  >
      <ul style={{ marginLeft:'25%', borderRadius:"50%", backgroundColor:'blue', fontSize:'3rem', display:'flex', color:"white", flexDirection:"column", width:'50%',  }}>
        <li  style={{listStyle:'none', backgroundColor:'white',  color:"blue", borderRadius:'50%' }} >
          <Link href="/">
           Giriş sayfasına dön
          </Link>
        </li>
        <br/>
        <li style={{listStyle:'none',backgroundColor:'white',  color:"blue", borderRadius:'50%' }}>
          <Link
            href="/dashboard"
          >
          Ana sayfaya dön
          </Link>
        </li>
        <br/>
        <li style={{listStyle:'none',backgroundColor:'white',  color:"blue", borderRadius:'50%' }}>
          <Link
            href="/dashboard/kayit/urunekle"
          >
          Ürün Ekle /Sil
          </Link>
        </li>
        <br/>
        <li style={{listStyle:'none',backgroundColor:'white',  color:"blue", borderRadius:'50%'}}>
          <Link
           href="/dashboard/kayit/canliekle"
          >
          Canlı Ekle /Sil
          </Link>
        </li>
      </ul>
    </nav>
  )
}
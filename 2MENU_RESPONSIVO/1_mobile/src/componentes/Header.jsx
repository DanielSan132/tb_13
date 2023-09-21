import{List } from "@phosphor-icons/react"
import styles from "./Header.module.css"
import { useState } from "react"

function Header() {

const[Abrirmenu, setAbrirmenu] = useState(false)

function handleAbrirFechar(){
if (Abrirmenu === true) {
setAbrirmenu(false)
return
}

setAbrirmenu(true)

}


  return (
    <header className={styles.header}>
<div className={styles.mobile}>
    <div className={styles.menu}>
        <button onClick={handleAbrirFechar} >
        <List size={32} />
        </button >

        <h3>Logo</h3>
    
    </div>
    <div className={`${styles.options} ${Abrirmenu === true && styles.open}`}>
      <nav className="">
        <a href="">Home</a>
        <a href="">Resultados</a>
        <a href="">Produtos</a>
        <a href="">Login</a>
      </nav>
    </div>
</div>
    </header>
  )
}

export default Header
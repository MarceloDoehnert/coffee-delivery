import Logo from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img className={styles.img} src={Logo}/>
      </NavLink>
      <nav className={styles.nav}>
        <span className={styles.location}>
          <MapPin 
          weight="fill"
          color="#8047F8"
          size={22}
          />Piraquara, PR
        </span>
        <NavLink className={styles.cart} to="/checkout">
          <ShoppingCart 
            weight="fill" 
            color="#C47F17" 
            size={22} 
          />
        </NavLink>
      </nav>
    </header>
  )
}
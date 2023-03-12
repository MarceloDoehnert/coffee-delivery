import Banner from '../../assets/coffee-delivery-banner.png'
import {ShoppingCart, Package, Timer, Coffee} from '@phosphor-icons/react'
import styles from '../Home/Home.module.css'

export function Home() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner_content}>
        <h1 className={styles.title}>
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className={styles.subtitle}>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </p>
        <div className={styles.banner_icons}>
          <div>
            <p>
              <span className={styles.cart}>
                <ShoppingCart color="#FAFAFA" weight="fill" size={16} />
              </span>Compra simples e segura
            </p>
            <p>
              <span className={styles.timer}>
                <Timer color="#FAFAFA" weight="fill" size={16} />
              </span>Entrega rápida e rastreada
            </p>
          </div>
          <div>
            <p>
              <span className={styles.package}>
                <Package color="#FAFAFA" weight="fill" size={16} />
              </span>Embalagem mantém o café intacto
            </p>
            <p>
              <span className={styles.coffee}>
                <Coffee color="#FAFAFA" weight="fill" size={16} />
              </span>O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>
      <div className={styles.banner_image}>
        <img src={Banner} alt="" />
      </div>
    </section>
  )
}
import Image from "next/image";
import styles from './home.module.scss';
import Title from '../../public/balancimals_header.png';

export default function Home() {
  return (
    <div>
      <div className={styles.Banner}>
        <div className = {styles.Container}>
          <Image 
            src = {Title}
            width = {600}
            height = {600}
            alt = "Pixel art of a sleeping bear"
          />
          <h1>Balance Training, <br /> made fun. </h1>
          <h2> Where play meets progress - trusted by families and physiotherapists </h2>
        </div>
        <div className={ styles.Card_Container }>
          <div className={ styles.Card } >
            <h2>For Parents</h2>
            
          </div>
        </div>
      </div>
    </div>
  )
}

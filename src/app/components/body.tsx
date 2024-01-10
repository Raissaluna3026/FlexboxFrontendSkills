
import styles from '../page.module.css'
import Header from './header'

export default function Body(){
    return(
        <div className={styles.div1}>
            <Header />
            <img className={styles.img} src="images\alto.jpg" alt="" />
            <div className={styles.div3}>
                <h1>LEGAL COUNSELS FOR YOU BUSINESS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ipsam voluptatum, ullam necessitatibus impedit vero dolorum</p>
                <div className={styles.divbtn}>
                    <button className={styles.cordf}>
                        Contact us
                    </button>
                    <button className={styles.cordf2}>
                        About us
                    </button>
                </div>
            </div>
        </div>
    )
}
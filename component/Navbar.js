import  styles from "./navbar.module.css"
import Image from "next/image";
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.log}>
                <Image src={require("/public/img/nav-logo.png")} alt={"logo"} width={150} height={50}/>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>首页</div>
                <div className={styles.link}>新翼新闻</div>
                <div className={styles.link}>关于新翼</div>
                <div className={styles.link}>新翼优势</div>
                <div className={styles.link}>新翼案例</div>
                <div className={styles.link}>了解更多</div>
            </div>
        </div>
    );
};


export  default  Navbar;
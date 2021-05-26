import UserData from "../components/Home/UserData";
import UserPhoto from "../components/Home/UserPhoto";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <UserPhoto />
            <UserData />
        </div>
    );
}

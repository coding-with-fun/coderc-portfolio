import { Container } from "reactstrap";
import UserData from "../components/Home/UserData";
import UserPhoto from "../components/Home/UserPhoto";
import styles from "../styles/Home/Home.module.scss";

export default function Home() {
    return (
        <Container className={styles.container}>
            <UserPhoto />
            <UserData />
        </Container>
    );
}

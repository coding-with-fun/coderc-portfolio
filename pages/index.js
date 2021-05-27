import { Container } from "reactstrap";
import UserData from "../components/Home/UserData";
import UserPhoto from "../components/Home/UserPhoto";
import { myData as jsonDetails } from "../myData";
import styles from "../styles/Home/Home.module.scss";

const Home = () => {
    return (
        <Container className={styles.HomeContainer}>
            <UserPhoto profileImageUrl={jsonDetails.user_profile_image} />
            <UserData details={jsonDetails} />
        </Container>
    );
};

export default Home;

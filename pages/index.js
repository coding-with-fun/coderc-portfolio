import { Container } from "reactstrap";
import UserData from "../components/Home/UserData";
import UserPhoto from "../components/Home/UserPhoto";
import styles from "../styles/Home/Home.module.scss";

const Home = ({ details }) => {
    console.log(details);
    return (
        <Container className={styles.HomeContainer}>
            <UserPhoto profileImageUrl={details.user_profile_image} />
            <UserData details={details} />
        </Container>
    );
};

export default Home;

export const getStaticProps = async () => {
    let response = await fetch("http://localhost:3000/api/details");
    const details = await response.json();

    return {
        props: {
            details,
        },
    };
};

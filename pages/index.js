import { Container } from "reactstrap";
import UserData from "../components/Home/UserData";
import UserPhoto from "../components/Home/UserPhoto";
import { server } from "../config";
import styles from "../styles/Home/Home.module.scss";

const Home = ({ details }) => {
    return (
        <Container className={styles.HomeContainer}>
            <UserPhoto profileImageUrl={details.user_profile_image} />
            <UserData details={details} />
        </Container>
    );
};

export default Home;

export const getStaticProps = async () => {
    // let response = await fetch(`${server}/api/details`);
    let response = {};
    const details = await response.json();

    return {
        props: {
            details,
        },
    };
};

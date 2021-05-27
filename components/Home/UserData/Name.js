import styles from "../../../styles/Home/Home.module.scss";

const UserName = () => {
    return (
        <div className={styles.name_card__container}>
            <div className={styles.name}>Harsh Patel</div>
            <div className={styles.occupation}>Software Engineer</div>
        </div>
    );
};

export default UserName;

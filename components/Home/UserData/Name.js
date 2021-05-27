import styles from "../../../styles/Home/Home.module.scss";

const Name = ({ name, currentPosition }) => {
    return (
        <div className={styles.name_card__container}>
            <div className={styles.name}>{name}</div>
            <div className={styles.occupation}>{currentPosition}</div>
        </div>
    );
};

export default Name;

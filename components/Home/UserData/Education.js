import styles from "../../../styles/Home/Home.module.scss";

const UserEducation = () => {
    return (
        <div className={styles.education_card__container}>
            <div className={styles.college}>
                <div className={styles.year}>2020 - Present</div>
                <div className={styles.field}>MBA (Finance)</div>
                <div className={styles.university}>
                    Gujarat Technological University
                </div>
            </div>

            <div className={styles.college}>
                <div className={styles.year}>2016 - 2020</div>
                <div className={styles.field}>
                    B.Tech (Computer Engineering)
                </div>
                <div className={styles.university}>
                    Gujarat Technological University
                </div>
            </div>
        </div>
    );
};

export default UserEducation;

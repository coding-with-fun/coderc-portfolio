import styles from "../../../styles/Home/Home.module.scss";

const UserEducation = ({ education }) => {
    return (
        <div className={styles.education_card__container}>
            {education.map((detail) => {
                return (
                    <div className={styles.college} key={detail.id}>
                        <div className={styles.year}>{detail.duration}</div>
                        <div className={styles.field}>{detail.field}</div>
                        <div className={styles.university}>
                            {detail.university}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserEducation;

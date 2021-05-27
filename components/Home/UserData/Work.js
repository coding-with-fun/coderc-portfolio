import styles from "../../../styles/Home/Home.module.scss";

const Work = ({ work }) => {
    return (
        <div className={styles.work_card__container}>
            {work.map((detail) => {
                return (
                    <div className={styles.job} key={detail.id}>
                        <div className={styles.year}>{detail.duration}</div>
                        <div className={styles.position}>{detail.position}</div>
                        <div className={styles.city}>{detail.city}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Work;

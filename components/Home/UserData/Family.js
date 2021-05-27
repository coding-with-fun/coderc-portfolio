import styles from "../../../styles/Home/Home.module.scss";

const Family = ({ family }) => {
    return (
        <div className={styles.family_card__container}>
            <div className={styles.motherOccupation}>
                <div className={styles.title}>Mother's Occupation</div>
                <div className={styles.data}>{family.motherOccupation}</div>
            </div>

            <div className={styles.fatherOccupation}>
                <div className={styles.title}>Father's Occupation</div>
                <div className={styles.data}>{family.fatherOccupation}</div>
            </div>

            <div className={styles.sister}>
                <div className={styles.title}>Sister(s)</div>
                <div className={styles.data}>{family.sister || "0"}</div>
            </div>

            <div className={styles.brother}>
                <div className={styles.title}>Brother(s)</div>
                <div className={styles.data}>{family.brother || "0"}</div>
            </div>

            <div className={styles.familyStatus}>
                <div className={styles.title}>Family Status</div>
                <div className={styles.data}>{family.familyStatus}</div>
            </div>

            <div className={styles.familyIncome}>
                <div className={styles.title}>Family Income</div>
                <div className={styles.data}>{family.familyIncome}</div>
            </div>

            <div className={styles.familyType}>
                <div className={styles.title}>Family Type</div>
                <div className={styles.data}>{family.familyType}</div>
            </div>

            <div className={styles.familyValues}>
                <div className={styles.title}>Family Values</div>
                <div className={styles.data}>{family.familyValues}</div>
            </div>
        </div>
    );
};

export default Family;

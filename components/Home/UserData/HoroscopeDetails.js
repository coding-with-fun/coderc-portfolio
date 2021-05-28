import styles from "../../../styles/Home/Home.module.scss";

const HoroscopeDetails = ({ horoscopeDetails }) => {
    return (
        <div className={styles.horoscope_card__container}>
            <div className={styles.manglik}>
                <div className={styles.title}>Manglik</div>
                <div className={styles.data}>
                    {horoscopeDetails.manglik ? "Manglik" : "Non-Manglik"}
                </div>
            </div>

            <div className={styles.dob}>
                <div className={styles.title}>Date of Birth</div>
                <div className={styles.data}>{horoscopeDetails.dob}</div>
            </div>

            <div className={styles.time}>
                <div className={styles.title}>Time of Birth</div>
                <div className={styles.data}>{horoscopeDetails.time}</div>
            </div>

            <div className={styles.city}>
                <div className={styles.title}>Place of Birth</div>
                <div className={styles.data}>{horoscopeDetails.city}</div>
            </div>

            <div className={styles.sunSign}>
                <div className={styles.title}>Sun sign</div>
                <div className={styles.data}>{horoscopeDetails.sunSign}</div>
            </div>

            <div className={styles.moonSign}>
                <div className={styles.title}>Moon sign</div>
                <div className={styles.data}>{horoscopeDetails.moonSign}</div>
            </div>
        </div>
    );
};

export default HoroscopeDetails;

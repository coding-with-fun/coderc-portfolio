import styles from "../../../styles/Home/Home.module.scss";

const Lifestyle = ({ lifestyle }) => {
    return (
        <div className={styles.lifestyle_card__container}>
            <div className={styles.habits}>
                <div className={styles.title}>Habits</div>

                <div className={styles.subtitle}>Dietary habits</div>
                <div className={styles.data}>{lifestyle.habits.food}</div>

                <div className={styles.subtitle}>Drinking habits</div>
                <div className={styles.data}>
                    {lifestyle.habits.drink ? "Yes" : "No"}
                </div>

                <div className={styles.subtitle}>Smoking habits</div>
                <div className={styles.data}>
                    {lifestyle.habits.smoke ? "Yes" : "No"}
                </div>

                <div className={styles.title}>Assets</div>

                <div className={styles.subtitle}>House</div>
                <div className={styles.data}>
                    {lifestyle.assets.house ? "Yes" : "No"}
                </div>

                <div className={styles.subtitle}>Car</div>
                <div className={styles.data}>
                    {lifestyle.assets.car ? "Yes" : "No"}
                </div>

                <div className={styles.title}>Languages Known</div>
                <div className={styles.data}>
                    {lifestyle.languagesKnown.map((data) => {
                        return (
                            <div
                                className={styles.languagesKnownData}
                                key={data.id}
                            >
                                {data.data}
                            </div>
                        );
                    })}
                </div>

                <div className={styles.bloodGroup}>
                    <div className={styles.title}>Blood Group</div>
                    <div className={styles.data}>{lifestyle.bloodGroup}</div>
                </div>

                <div className={styles.residentialStatus}>
                    <div className={styles.title}>Residential Status</div>
                    <div className={styles.data}>
                        {lifestyle.residentialStatus}
                    </div>
                </div>

                <div className={styles.physicalChallenges}>
                    <div className={styles.title}>Special Cases</div>
                    <div className={styles.data}>
                        {lifestyle.physicalChallenges || "None"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lifestyle;

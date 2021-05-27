import styles from "../../../styles/Home/Home.module.scss";

const About = ({ about }) => {
    return (
        <div className={styles.about_card__container}>
            <div className={styles.age}>
                <div className={styles.title}>Age</div>
                <div className={styles.data}>{about.age}</div>
            </div>

            <div className={styles.dob}>
                <div className={styles.title}>Date of Birth</div>
                <div className={styles.data}>{about.dob}</div>
            </div>

            <div className={styles.height}>
                <div className={styles.title}>Height</div>
                <div className={styles.data}>{about.height}</div>
            </div>

            <div className={styles.religion}>
                <div className={styles.title}>Religion</div>
                <div className={styles.data}>{about.religion}</div>
            </div>

            <div className={styles.caste}>
                <div className={styles.title}>Caste</div>
                <div className={styles.data}>{about.caste}</div>
            </div>

            <div className={styles.motherTongue}>
                <div className={styles.title}>Mother Tongue</div>
                <div className={styles.data}>{about.motherTongue}</div>
            </div>

            <div className={styles.location}>
                <div className={styles.title}>Location</div>
                <div className={styles.data}>{about.location}</div>
            </div>

            <div className={styles.annualIncome}>
                <div className={styles.title}>Annual Income</div>
                <div className={styles.data}>{about.annualIncome}</div>
            </div>

            <div className={styles.maritalStatus}>
                <div className={styles.title}>Marital Status</div>
                <div className={styles.data}>{about.maritalStatus}</div>
            </div>

            <div className={styles.description}>
                <div className={styles.title}>Description</div>
                <div className={styles.data}>
                    {about.description.map((data) => {
                        return (
                            <div
                                className={styles.descriptionData}
                                key={data.id}
                            >
                                {data.data}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.familyDescription}>
                <div className={styles.title}>About My Family</div>
                <div className={styles.data}>{about.familyDescription}</div>
            </div>

            <div className={styles.educationDescription}>
                <div className={styles.title}>Education</div>
                <div className={styles.data}>{about.educationDescription}</div>
            </div>

            <div className={styles.occupationDescription}>
                <div className={styles.title}>Occupation</div>
                <div className={styles.data}>{about.occupationDescription}</div>
            </div>
        </div>
    );
};

export default About;

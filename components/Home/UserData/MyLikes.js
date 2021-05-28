import styles from "../../../styles/Home/Home.module.scss";

const MyLikes = ({ myLikes }) => {
    return (
        <div className={styles.likes_card__container}>
            <div className={styles.hobbies}>
                <div className={styles.title}>Hobbies</div>
                <div className={styles.data}>
                    {myLikes.hobbies.map((data) => {
                        return (
                            <div className={styles.hobbiesData} key={data.id}>
                                {data.data}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.interests}>
                <div className={styles.title}>Interests</div>
                <div className={styles.data}>
                    {myLikes.interests.map((data) => {
                        return (
                            <div className={styles.interestsData} key={data.id}>
                                {data.data}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MyLikes;

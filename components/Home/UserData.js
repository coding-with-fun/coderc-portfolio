import { Card, CardContent } from "@material-ui/core";
import styles from "../../styles/Home/Home.module.scss";

const UserData = () => {
    return (
        <Card className={styles.UserDataContainer} variant="outlined">
            <CardContent>
                <div className={styles.name_card__container}>
                    <div className={styles.name}>Harsh Patel</div>
                    <div className={styles.occupation}>Software Engineer</div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserData;

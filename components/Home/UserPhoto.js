import Image from "next/image";
import styles from "../../styles/Home/Home.module.scss";

const UserPhoto = ({ profileImageUrl }) => {
    return (
        <div className={styles.UserPhotoContainer}>
            <Image
                src={profileImageUrl}
                alt="Harsh Patel"
                width={150}
                height={150}
                priority={true}
                className={styles.logo}
            />
        </div>
    );
};

export default UserPhoto;

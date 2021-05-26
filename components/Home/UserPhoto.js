import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const UserPhoto = () => {
    return (
        <div>
            <span className={styles.logo}>
                <Image
                    src="/profile_image.png"
                    alt="Harsh Patel"
                    width={150}
                    height={150}
                    priority={true}
                />
            </span>
        </div>
    );
};

export default UserPhoto;

import Image from "next/image";
import styles from "../../styles/Home/Home.module.scss";

const myLoader = ({ src }) => {
    return `https://coderc-portfolio.vercel.app/${src}&w=256&q=75`;
};

const UserPhoto = () => {
    return (
        <div>
            <span className={styles.logo}>
                <Image
                    loader={myLoader}
                    src="_next/image?url=profile_image.png"
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

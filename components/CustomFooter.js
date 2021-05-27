import FavoriteIcon from "@material-ui/icons/Favorite";

const CustomFooter = () => {
    return (
        <div className="footer__container">
            Made by <b>Coderc</b> with <FavoriteIcon style={{ color: "red" }} />
        </div>
    );
};

export default CustomFooter;

import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";

const Layout = ({ children }) => {
    return (
        <div className="main__container">
            <CustomHeader />
            <div className="main_children__container">{children}</div>
            <CustomFooter />
        </div>
    );
};

export default Layout;

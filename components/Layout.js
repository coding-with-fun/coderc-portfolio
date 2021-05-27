import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";

const Layout = ({ children }) => {
    return (
        <div className="main__container">
            <CustomHeader />
            {children}
            <CustomFooter />
        </div>
    );
};

export default Layout;

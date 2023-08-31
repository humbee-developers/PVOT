import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.any,
  onClickOut: PropTypes.func,
};
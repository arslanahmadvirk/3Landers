import NavBar from "./navbar";
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
       <Footer/>
    </div>
  );
};

export default Layout;
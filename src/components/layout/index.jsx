import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
    <Header/>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

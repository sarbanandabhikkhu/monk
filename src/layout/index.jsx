import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

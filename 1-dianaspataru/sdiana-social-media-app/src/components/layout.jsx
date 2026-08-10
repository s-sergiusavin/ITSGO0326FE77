import Navigation from "./navigation";
import styles from './layout.module.scss'
const Layout = ({ children }) => {
  return (
    <>
      <Navigation/>
      <main className="{styles.mainContent}">{children}</main>
    </>
  );
};

export default Layout;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/selectors";
import Navigation from "./Navigation";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const themeMode = useSelector(selectTheme);

  useEffect(() => {
    document.body.classList.toggle("light", themeMode === "light");
  }, [themeMode]);

  return (
    <>
      <Navigation />
      <main className={styles.mainContent}>{children}</main>
    </>
  );
};

export default Layout;

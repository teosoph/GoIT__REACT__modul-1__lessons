import { Test } from "components/shared/Test";
import styles from "./Footer.module.scss";

export const Footer = (props) => {
  const { children } = props;

  return (
    <footer className={styles.Footer}>
      <Test />
      <h2 className={styles.Footer__Title}>
        Everyone has come back from the break
      </h2>

      <div>{children}</div>
    </footer>
  );
};

Footer.defaultProps = {
  first: 3,
};

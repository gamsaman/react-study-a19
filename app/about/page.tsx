import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutWrapper}>
      <h2>About US</h2>
      <p>
        Welcome to the official explorer for the The New York Times Best Seller
        list explorer.
        <br />
        We hope you enjoy your stay!
      </p>
    </div>
  );
}

export default About;

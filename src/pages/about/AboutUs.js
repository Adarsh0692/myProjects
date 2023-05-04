import React from "react";
import styles from "./AboutUs.module.css";
import MyFooter from "../footer/Footer";
import Navbar from "../navbar/Navbar";


export default function AboutUs() {
  function handleLearnMore() {
    alert("clicked from about us section");
  }
  return (
    <>
    <Navbar/>
    <div className={styles.containerWithBg}>
      <div className={styles.about}>
        <div className={styles.content_one}>
          <iframe
            src="https://www.youtube.com/embed/vei81-bZhG4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
          ></iframe>
        </div>
        <div className={styles.content_two}>
          <h2>About Us</h2>
          <p>
            At our gym, we believe that fitness is not just about lifting
            weights, but also about building a healthy lifestyle. We provide a
            variety of equipment and classes to meet the needs of different
            individuals, and our experienced trainers are always on hand to
            guide and motivate you.
          </p>
          <button onClick={() => handleLearnMore()}>Learn More</button>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.content_two}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <h3>
                <span1>Consultations With Expert</span1>
              </h3>
              <p>
                Our personalized consultations with experts cater to your unique
                health and fitness goals. Discuss your workout history and
                preferences, and receive a customized fitness plan along with a
                light workout trial.
              </p>
            </li>
            <li>
              <h3>
                <span2>Best Workout Facilities</span2>
              </h3>
              <p>
                Our state-of-the-art workout facilities are designed to provide
                a comfortable and motivating workout environment.We take pride
                in keeping them clean and well-maintained to ensure the best
                possible workout experience for our clients.
              </p>
              <button onClick={() => handleLearnMore()}>Learn More</button>
            </li>
          </ul>
        </div>

        <div className={styles.content_one}>
          <iframe
            src="https://www.youtube.com/embed/Rd3XHPk5me4"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
        <MyFooter/>
    </>
  );
}

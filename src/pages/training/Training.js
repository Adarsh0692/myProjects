import React, { useRef } from "react";
import styles from "./Training.module.css";
import Navbar from "../navbar/Navbar";
import MyFooter from "../footer/Footer";
import trainers from './TrainingData'
import {FcPrevious,FcNext} from 'react-icons/fc'


const TrainerCard = ({ trainer, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={trainer.image} alt={trainer.name} />
      <h3>{trainer.name}</h3>
      <p>{trainer.specialty}</p>
    </div>
  );
};

const Training = () => {

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft =containerRef.current.scrollLeft-300
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft+=300;

    console.log(containerRef.current)
  };


  return (
<>
<Navbar/>
    <div className={styles.container}>
      <h2>Meet our Trainers</h2>

      <div className={styles.scrollContainer} ref={containerRef}>
       
        {trainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            trainer={trainer}
          />
        ))}
      </div>   
      <FcPrevious onClick={scrollLeft} className={styles.scrollbtn}/>
      <FcNext onClick={scrollRight} className={styles.scrollbtn}/>
    </div>
        <MyFooter/>
    </>
  );
};

export default Training;

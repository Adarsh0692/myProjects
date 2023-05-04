import React, { useState, useEffect } from "react";
import Style from "./Program.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const images = [
  {
    url: "https://wallpaperaccess.com/full/139175.jpg",
    text: "It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body.Yoga is for everyone.",
  },
  {
    url: "https://img5.goodfon.com/wallpaper/nbig/9/d7/gymnast-pose-men-workout-competition.jpg",
    text: "Aerobic exercise provides cardiovascular conditioning. The term aerobic actually means with oxygen, which means that breathing controls the amount of oxygen that can make it to the muscles to help them burn fuel and move.",
  },
  {
    url: "https://wallpaperaccess.com/full/113299.jpg",
    text: "Sport, both amateur and professional, involving attack and defense with the fists. Matched in weight and ability, boxing contestants try to land blows hard and often with their fists, each attempting to avoid the blows of the opponent.",
  },
  {
    url: "https://wallpaperaccess.com/full/1960777.jpg",
    text: "Brazilian Jiu-Jitsu (BJJ) is a grappling-based martial art whose central theme is the skill of controlling a resisting opponent in ways that force him to submit. Due to the fact that control is generally easier on the ground than in a standing position, much of the technique of Brazilian Jiu-Jitsu (BJJ) is centered around the skill of taking an opponent down to the ground and wrestling for dominant control positions from where the opponent can be rendered harmless",
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/246/188/1015/fight-skill-training-technique-wallpaper-preview.jpg",
    text: "Jujitsu, Japanese jūjitsu (“gentle art”), form of martial art and method of fighting that makes use of few or no weapons and employs holds, throws, and paralyzing blows to subdue an opponent.",
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/810/571/618/the-sky-sport-battle-wallpaper-preview.jpg",
    text: "Karate, (Japanese: “empty hand”) unarmed martial-arts discipline employing kicking, striking, and defensive blocking with arms and legs. Emphasis is on concentrating as much of the body’s power as possible at the point and instant of impact. Striking surfaces include the hands (particularly the knuckles and the outer edge), ball of the foot, heel, forearm, knee, and elbow. All are toughened by practice blows against padded surfaces or wood.",
  },
  {
    url: "https://wallpaperaccess.com/full/19424.jpg",
    text: "Mixed martial arts (MMA), hybrid combat sport incorporating techniques from boxing, wrestling, judo, jujitsu, karate, Muay Thai (Thai boxing), and other disciplines.",
  }, {
    url: "https://cdn.wallpapersafari.com/93/36/x8q3e5.jpg",
    text: "Taekwondo is one of the most systematic and scientific Korean traditional martial arts, that teaches more than physical fighting skills. It is a discipline that shows ways of enhancing our spirit and life through training our body and mind. Today, it has become a global sport that has gained an international reputation, and stands among the official games in the Olympics.",
  },
];

const Program = () => {

  const [index, setIndex] = useState(0)
  const length = images.length

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index < length - 1 ? index + 1 : 0)
    }, 4000);
    return () => clearInterval(interval);
  }, )

  return (

    <div >
      <Navbar />
      <div className={Style.container}>
        
        <div className={Style.img_div}>
          <img src={images[index].url} alt='hello' />
        </div>
        <div className={Style.textContent}>
          <p>{images[index].text}</p>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Program;

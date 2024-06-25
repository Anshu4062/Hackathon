import { useState, useEffect } from 'react';
import images from "./images";
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    const slider = document.querySelector(".slider");
    const initialTransform = `translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`;
    const zOffset = scrollPos * 0.5;
    slider.style.transform = `${initialTransform} translateY(${zOffset}px)`;
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.left = "15%";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.left = "0%";
  };

  useEffect(() => {
    const newCards = images.map((img, index) => ({
      id: index + 1,
      imgSrc: img,
    }));

    setCards(newCards);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return(
    <>
      <div className="slider">
        {cards.map((card) => (
          <div
           key={card.id} className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
           >
            <img src={card.imgSrc} alt={`img${card.id}`} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App;

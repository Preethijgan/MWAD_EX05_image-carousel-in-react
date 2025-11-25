import React, { useState, useEffect } from "react";

const App = () => {
  const images = [
    "/assets/desert.webp",
    "/assets/forest.avif",
    "/assets/mountain.jpg",
    "/assets/waterfall.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    
    return () => clearInterval(interval);
  }, [images.length]);

  const styles = {
    app: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
    },
    carouselContainer: {
      position: "relative",
      width: "600px",
      maxWidth: "90%",
      margin: "20px auto",
    },
    carouselImage: {
      width: "100%",
      height: "300px",
      borderRadius: "10px",
      objectFit: "cover",
      transition: "opacity 0.5s ease-in-out",
    },
    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
      border: "none",
      fontSize: "24px",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "50%",
    },
    prevButton: { left: "10px" },
    nextButton: { right: "10px" },
    dotsContainer: { marginTop: "10px" },
    dot: {
      height: "15px",
      width: "15px",
      margin: "0 5px",
      display: "inline-block",
      borderRadius: "50%",
      backgroundColor: "#bbb",
      cursor: "pointer",
    },
    activeDot: { backgroundColor: "#717171" },
    footer: {
      backgroundColor: "#f1f1f1",
      padding: "15px",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.mainContent}>
        <h1>Nature Image Carousel</h1>

        <div style={styles.carouselContainer}>
          <button
            style={{ ...styles.button, ...styles.prevButton }}
            onClick={prevSlide}
          >
            &#10094;
          </button>

          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={styles.carouselImage}
          />

          <button
            style={{ ...styles.button, ...styles.nextButton }}
            onClick={nextSlide}
          >
            &#10095;
          </button>

          <div style={styles.dotsContainer}>
            {images.map((_, index) => (
              <span
                key={index}
                style={
                  currentIndex === index
                    ? { ...styles.dot, ...styles.activeDot }
                    : styles.dot
                }
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>Preethi J | Register Number: 212223220080</p>
      </footer>
    </div>
  );
};

export default App;

# MWAD_EX05_image-carousel-in-react
## Date: 27-10-2025

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
App.jsx
```
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


```

main.jsx
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


```


## OUTPUT
<img width="1919" height="1079" alt="Screenshot 2025-10-27 160050" src="https://github.com/user-attachments/assets/3a8b7c7f-c4fe-48e8-ba59-30a2cc12d623" />
<img width="1919" height="1079" alt="Screenshot 2025-10-27 160100" src="https://github.com/user-attachments/assets/e6241860-07f3-4346-848a-c203ac98d0c4" />
<img width="1919" height="1079" alt="Screenshot 2025-10-27 160106" src="https://github.com/user-attachments/assets/169840a3-dee5-49b4-8fdc-93e4fb7b75fa" />
<img width="1919" height="1079" alt="Screenshot 2025-10-27 160113" src="https://github.com/user-attachments/assets/5eb57a3a-5b57-45ae-954f-e5bc1c74b1a2" />


## RESULT
The program for creating Image Carousel using React is executed successfully.

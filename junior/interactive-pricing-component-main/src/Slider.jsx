import React, { useRef } from "react";
import "./Slider.css";

function Slider(props) {
  
  function moveSlider(evt) {
    const slider = document.querySelector(".slider")
    const thumb = document.querySelector(".thumb")
    evt.preventDefault();

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    let shiftX = evt.clientX - thumb.getBoundingClientRect().left
    
    function onMouseMove(evt) {
      evt.preventDefault()
      let newLeft = evt.clientX - shiftX - slider.getBoundingClientRect().left

      if (newLeft < 0) {
        newLeft = 0
      }

      let rightEdge = slider.offsetWidth - thumb.offsetWidth
      if (newLeft > rightEdge) {
        newLeft = rightEdge
      }
      
      console.log(newLeft)
      thumb.style.left = newLeft + "px"
    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  }

  return (
    <div className="slider">
      <div className="thumb" onMouseDown={moveSlider}></div>
    </div>
  );
}

export default Slider;

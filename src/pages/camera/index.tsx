import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import React, { useState, useEffect, useRef } from "react";

export default function CameraPage() {
  const videoHeight = 400;
  const videoWidth = 640;
  const [initialized, setInitialized] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitialized(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia(
      // {
      //   video: {},
      // },
      (stream) => (videoRef.current.srcObject = stream)
    );
  };

  // return <Webcam imageSmoothing={true} audio={true} />;
  return (
    <div>
      <span>{initialized ? "initialized" : "ready"}</span>
      <video ref={videoRef} autoPlay={true} muted width={videoWidth} />
      <canvas ref={canvasRef} />
    </div>
  );
}

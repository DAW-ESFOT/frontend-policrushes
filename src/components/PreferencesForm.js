import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";

export default function PreferencesForm() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!image) return;
    console.log("image selected", image);
  }, [image]);

  const handleImage = (image) => {
    setImage(image);
  };

  return (
    <>
      <ImageUpload handleImage={handleImage} cardName="Input Image" />
    </>
  );
}

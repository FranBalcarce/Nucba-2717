import React, { useEffect, useState } from "react";
import { ClickButton } from "../EjemploSetState/EjemploSetState";

const EjemploUseEffect = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    console.log("Componente montado");
  }, []);

  useEffect(() => {
    setClick(!click);
  }, []);

  return (
    <div>
      <span>{click ? "true" : "false"}</span>
      <ClickButton onClick={() => setClick(!click)}>Click</ClickButton>
    </div>
  );
};

export default EjemploUseEffect;

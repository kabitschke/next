'use client'
import { revalidatePathAction, revalidateTagAction } from "@/actions/revalidate-path";
import React from "react";


export default function AtualizarPage() {
  function handleClick() {
    // revalidatePathAction('/acoes')
    revalidateTagAction('acoes')
  }

  // React.useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     revalidatePathAction('/acoes');

  //   }, 5000);
  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, []);

  return (
    <button onClick={handleClick}>Atualizar</button>
  );
}
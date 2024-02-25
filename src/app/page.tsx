import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "./components/templates/t-welcome/TWelcome";
//import { useState } from "react";

export default function Home() {
  // const [disabledSave, setDisabledSave] = useState(true);

  const submit = () => {

  }
  return (
    <main>
      <Welcome ></Welcome>
    </main>
  );
}

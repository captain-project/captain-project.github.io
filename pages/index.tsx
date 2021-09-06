import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const getImage = (frame: number, plot: number) =>
  `/svg_plots/prioritize_species_0_step${frame}_.pkl_p${plot}.svg`;

const plotIds = [0, 1, 2, 3, 4, 5, 6, 7];

export default function Home() {
  const [frame, setFrame] = useState(1);
  const [plot, setPlot] = useState(0);

  const onFrameChange = ({ target }: any) => setFrame(target.value);
  const onSelectPlot = (plotId: number) => setPlot(plotId);

  return (
    <div className={styles.container}>
      <Head>
        <title>CAPTAIN</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>CAPTAIN 🏴‍☠️</h1>

        <p className={styles.description}>
          <strong>C</strong>onservation <strong>A</strong>rea <strong>P</strong>
          rioritization <strong>T</strong>hrough <strong>AI</strong>{" "}
          <strong>N</strong>etworks
        </p>
        <div>
          <input
            type="range"
            min={1}
            max={31}
            value={frame}
            onChange={onFrameChange}
          />
          <input
            type="number"
            step={1}
            min={1}
            max={31}
            value={frame}
            onChange={onFrameChange}
          />
        </div>

        <div className={styles.selectedPlot}>
          <img width={400} src={getImage(frame, plot)} />
        </div>

        <div className={styles.grid}>
          {plotIds.map((plotId) => (
            <img
              key={plotId}
              width={200}
              src={getImage(frame, plotId)}
              onClick={() => onSelectPlot(plotId)}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="http://antonelli-lab.net/">
          <span className={styles.logo}>
            <Image
              src="https://antonelli-lab.net/wp-content/uploads/2018/10/AntonelliLab_logo_v1_paths.svg"
              alt="Antonelli Lab Logo"
              width={320}
              height={70}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

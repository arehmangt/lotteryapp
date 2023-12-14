import { useState } from "react";
import styles from "@/styles/components/lottery_info.module.css";
const WinningPot = (props) => {
  const { lotteryData } = props;
  const [luckiCount, setLuckiCount] = useState(lotteryData.winningPot);
  if (lotteryData.lotteryName === "CLASSIC") {
    return (
      <div className="px-3 pb-2">
        {lotteryData.previousWinningticket?.map((item, i) => {
          if (i <= 4) {
            return (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center"
              >
                <div className={styles.winningPot}>
                  {lotteryData?.roundNumber}
                </div>
                <div className={`${styles.winningPot} classicColor`}>
                  {item}
                </div>
                <div className={styles.winningPot}>{lotteryData.nextDraw}</div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <>
        <div className="my-2 px-3 d-flex align-items-center">
          {lotteryData.previousWinningticket?.map((item, i) => (
            <div
              key={i}
              className={`rounded-circle d-flex align-items-center justify-content-center ${
                styles.previousWinningticket
              } ${
                lotteryData.lotteryName === "COSMIC"
                  ? i === lotteryData.previousWinningticket.length - 1
                    ? `cosmicstripColor`
                    : "bg-secondary"
                  : ""
              } ${
                lotteryData.lotteryName === "ATOMIC" ? `atomicStripColor` : ""
              }  mx-1 text-light`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mb-2 px-3 d-flex align-items-center justify-content-between">
          <span className={styles.winningPot}>Winnig Pot</span>
          <div className={styles.winnigPotStyle}>
            {lotteryData.winningPot} <span className={styles.lucki}>LUCKI</span>
          </div>
        </div>
      </>
    );
  }
};

export default WinningPot;

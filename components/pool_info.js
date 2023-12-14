import Image from "next/image";
import styles from "@/styles/components/lottery_info.module.css";

const PoolInfo = (props) => {
  const { lotteryData } = props;
  return (
    <div className="px-3 py-2">
      <div className={`${styles.roundedNumbers} pb-2`}>Current Pool Status</div>
      {lotteryData.poolAmount.map((item, i) => (
        <div
          key={i}
          className="d-flex justify-content-between align-items-center "
        >
          <Image
            src={
              item.coinSymbol === "INAE"
                ? "/assets/images/INAE.png"
                : item.coinSymbol === "BTC"
                ? "/assets/images/BTC.png"
                : item.coinSymbol === "ETH"
                ? "/assets/images/ETH.png"
                : item.coinSymbol === "SOL"
                ? "/assets/images/SOL.png"
                : item.coinSymbol === "XRP"
                ? "/assets/images/XRP.png"
                : item.coinSymbol === "DOGE"
                ? "/assets/images/DOGE.png"
                : "/assets/images/TRX.png"
            }
            alt="time Icon"
            className="ms-2 me-1"
            width={14}
            height={14}
          />
          <div>
            {item.poolAmount + " " + item.coinSymbol}
            {item.coinSymbol !== "DOGE" ? " " : ""}
          </div>
        </div>
      ))}
      <hr />
      <div className="d-flex justify-content-end">
        <div className={styles.winnigPotStyle}>
          {`≈ ${lotteryData.winningPot}`}{" "}
          <span className={styles.lucki}>LUCKI</span>
        </div>
      </div>
    </div>
  );
};
export default PoolInfo;

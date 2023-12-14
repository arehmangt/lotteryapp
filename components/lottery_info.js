import React, { useState } from "react";
import PoolInfo from "./pool_info";
import styles from "@/styles/components/lottery_info.module.css";
import CustomButton from "./button";
import Image from "next/image";
import TimeComponent from "./time";
import SvgComponent from "./svgComponent";
import WinningPot from "./winning_pot";

const LotteryInfo = ({ lottery, handleSubmitPlay }) => {
  const [selectedPoolStatus, setSelectedPoolStatus] = useState(-1);
  const [zoomedInIndex, setZoomedInIndex] = useState(-1);
  const handlePlay = (lotteryData) => {
    handleSubmitPlay(lotteryData);
  };
  return (
    <>
      {lottery.map((lot, index) => {
        const lotteryData = lot.data;
        return (
          <div
            className={`mx-auto my-2 ${styles.applyBorders} ${
              lotteryData.lotteryName === "COSMIC"
                ? "cosmicBackColor"
                : lotteryData.lotteryName === "CLASSIC"
                ? "classicBackColor"
                : "atomicBackColor"
            }`}
          >
            <div className="px-3 pt-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5
                  className={
                    lotteryData.lotteryName === "COSMIC"
                      ? "cosmicColor"
                      : lotteryData.lotteryName === "CLASSIC"
                      ? "classicColor"
                      : "atomicColor"
                  }
                >
                  {lotteryData.lotteryName}
                </h5>
                <span
                  className={`ms-2 ${styles.roundedNumbers} ${
                    lotteryData.lotteryName === "COSMIC"
                      ? "cosmicColor"
                      : lotteryData.lotteryName === "CLASSIC"
                      ? "classicColor"
                      : "atomicColor"
                  }`}
                >
                  {lotteryData.lotteryName === "CLASSIC"
                    ? "Past 5 Results"
                    : `No. ${lotteryData.roundNumber}`}
                </span>
              </div>{" "}
              <div
                role="button"
                onClick={() =>
                  zoomedInIndex === index
                    ? setZoomedInIndex(-1)
                    : setZoomedInIndex(index)
                }
              >
                <SvgComponent
                  lotteryData={lotteryData}
                  isZoomedIn={zoomedInIndex === index}
                />
              </div>
            </div>
            <WinningPot lotteryData={lotteryData} />
            <div
              className={`d-flex align-items-center justify-content-between px-3  ${
                lotteryData.lotteryName === "COSMIC"
                  ? "cosmicstripColor"
                  : lotteryData.lotteryName === "CLASSIC"
                  ? "classicStripColor"
                  : "atomicStripColor"
              }`}
            >
              <div className="d-flex py-1">
                <span className={styles.nextDraw}>
                  Next <br /> Draw
                </span>
                <div className={styles.time}>
                  <Image
                    src="/assets/time.svg"
                    alt="time Icon"
                    className="ms-2 me-1"
                    width={14}
                    height={14}
                  />
                  <TimeComponent initialTime={lotteryData.nextDraw} />
                </div>
              </div>{" "}
              <CustomButton
                styles={
                  lotteryData.lotteryName === "COSMIC"
                    ? "cosmicColor"
                    : lotteryData.lotteryName === "CLASSIC"
                    ? "classicColor"
                    : "atomicColor"
                }
                onClick={() => handlePlay(lotteryData)}
              >
                Play
              </CustomButton>
            </div>
            {selectedPoolStatus === index && lotteryData.poolAmount !== null ? (
              <PoolInfo lotteryData={lotteryData} />
            ) : (
              <></>
            )}
            <div
              className="d-flex align-items-center justify-content-center my-1"
              role="button"
              onClick={() =>
                selectedPoolStatus === index
                  ? setSelectedPoolStatus(-1)
                  : setSelectedPoolStatus(index)
              }
            >
              <Image
                src={`${
                  selectedPoolStatus === index
                    ? "/assets/arrowUp.svg"
                    : "/assets/arrowDown.svg"
                }`}
                alt="time Icon"
                className="ms-2 me-1"
                width={14}
                height={14}
              />{" "}
              <span className={styles.winningPot}>
                {selectedPoolStatus === index ? "Close" : "Current Pool Status"}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LotteryInfo;

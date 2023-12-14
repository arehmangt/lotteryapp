import { useState, useEffect } from "react";
import LotteryInfo from "./lottery_info";
import { getLottery } from "@/utils/lottery";
import { useRouter } from "next/router";

const HomeComponent = () => {
  const router = useRouter();
  const [lottery, setLottery] = useState([]);

  useEffect(() => {
    getLottery().then((res) => setLottery(res));
  }, []);

  const handleSubmitPlay = (lottery) => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      alert("Please Authenticate First");
      router.push("/login");
    }
  };
  return (
    <div className="overflow-auto">
      <div className="text-center headingStyles mt-2">Lottery</div>
      <div className="latestResults my-2">Latest Results</div>
      {lottery && (
        <LotteryInfo lottery={lottery} handleSubmitPlay={handleSubmitPlay} />
      )}
    </div>
  );
};

export default HomeComponent;

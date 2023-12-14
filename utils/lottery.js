import axios from "axios";

const lotteryUrl =
  "https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery";

export const getLottery = async () => {
  try {
    const [cosmicResponse, classicResponse, atomicResponse] = await Promise.all(
      [
        axios.get(`${lotteryUrl}?lotteryType=COSMIC`),
        axios.get(`${lotteryUrl}?lotteryType=CLASSIC`),
        axios.get(`${lotteryUrl}?lotteryType=ATOMIC`),
      ]
    );
    return [cosmicResponse.data, classicResponse.data, atomicResponse.data];
  } catch (error) {
    console.error("Error fetching lottery data:", error);
    throw error;
  }
};

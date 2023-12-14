// import { Button } from "../node_modules/nextjs-ui-library";
import style from "@/styles/components/button.module.css";
const CustomButton = ({ onClick, children, styles }) => {
  return (
    <button className={` ${style.button} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;

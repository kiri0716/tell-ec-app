/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Normalbutton } from "../../../components/Button/NormalButton";
import { useNavigate } from "react-router-dom";

// export const Home = React.FC<HomeProps>(({}): HomeProps => {
  export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div css={styles.root}>
        <Normalbutton
          onClick={() => {
            navigate("/test");
          }}
        >
          testページへ
        </Normalbutton>
      </div>
    </>
  );
};

const styles = {
  root: css({
    fontSize: "100px",
  }),
};

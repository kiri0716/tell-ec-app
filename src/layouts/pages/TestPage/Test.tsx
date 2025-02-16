/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Normalbutton } from "../../../components/Button/NormalButton";

function Test() {
  const styles = {
    root: css({
      fontSize: "100px",
    }),
  };
  return (
    <>
      <div css={styles.root}>
        <Normalbutton>test</Normalbutton>
      </div>
    </>
  );
}

export default Test;

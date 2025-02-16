/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Carousel } from "../../../components/Carousel";

/**
 * ホーム画面（初期表示画面）
 * 
 */
const slides = [
  { image: "/23.png" },
  { image: "/33.jpg" },
  { image: "/44.png" },
  { image: "/33.jpg" },
  { image: "/44.png" },
  { image: "/33.jpg" },
  { image: "/44.png" },
];

  export const Home = () => {

  return (
    <>
    <div css={css({height:"120px"})}><Carousel  slides={slides}/></div>
      <div css={styles.root}>

      </div>
    </>
  );
};

const styles = {
  root: css({
    fontSize: "100px",
  }),
};

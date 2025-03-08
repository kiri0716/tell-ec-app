/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Carousel } from "../../../components/Carousel";
import { ListView } from "../../../components/Listview";
import { Button } from "../../../components/Button/Button";

/**
 * ホーム画面（初期表示画面）
 *
 */
const slides = [
  { image: "/23.png" ,link:"https://www.kirby.jp/"},
  { image: "/33.jpg" ,link:"https://www.kirby.jp/"},
  { image: "/44.png" ,link:"https://www.kirby.jp/"},
  { image: "/33.jpg" ,link:"https://www.kirby.jp/"},
  { image: "/44.png" ,link:"https://www.kirby.jp/"},
  { image: "/33.jpg" ,link:"https://www.kirby.jp/"},
  { image: "/44.png" ,link:"https://www.kirby.jp/"},
];

const testData = ["aaaaaaa", "bbbbbbbb", "ccccccc","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaa"];

export const Home = () => {
  return (
    <div css={styles.root}>
      <div>
        <Carousel slides={slides} />
      </div>
      <div css ={styles.listView}>
        <ListView textList={testData} />
      </div>
      <div css={css({width:"50%",display:"flex",justifyContent:"space-between"})}>      <div><Button size="large">large</Button></div>
      <div><Button>medium</Button></div></div>


    </div>
  );
};

const styles = {
  root: css({
    width:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  }),
  listView:css({
    width:"50%",
    height:"100%",
    marginTop:"50px"
  })
};

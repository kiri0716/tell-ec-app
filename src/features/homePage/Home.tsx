/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Carousel } from "../../components/Carousel";
import { ListView } from "../../components/Listview";
import { Button } from "../../components/Button/Button";
import { CircleButton } from "../../components/Button/CircleButton";
import { NewItemsList } from "./NewItemsList";

/**
 * ホーム画面（初期表示画面）
 *
 */
const slides = [
  { image: "/23.png", link: "https://www.kirby.jp/" },
  { image: "/33.jpg", link: "https://www.kirby.jp/" },
  { image: "/44.png", link: "https://www.kirby.jp/" },
  { image: "/33.jpg", link: "https://www.kirby.jp/" },
  { image: "/44.png", link: "https://www.kirby.jp/" },
  { image: "/33.jpg", link: "https://www.kirby.jp/" },
  { image: "/44.png", link: "https://www.kirby.jp/" },
];

const testData = [
  "aaaaaaa",
  "bbbbbbbb",
  "ccccccc",
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "aaaaaaaaaaaaaaaaaaaaaaaaaa",
];

const specialFeatures = [
  {
    onClick: () => alert("Feature 1 clicked"),
    imageUrl: "IMG_4538.jpg",
    label: "ポケモン",
    price: 500,
  },
  { onClick: () => alert("Feature 2 clicked"), imageUrl: "IMG_4539.jpg" },
  { onClick: () => alert("Feature 3 clicked"), imageUrl: "IMG_4538.jpg" },
  { onClick: () => alert("Feature 4 clicked"), imageUrl: "IMG_4539.jpg" },
  { onClick: () => alert("Feature 5 clicked"), imageUrl: "IMG_4538.jpg" },
  { onClick: () => alert("Feature 6 clicked"), imageUrl: "IMG_4539.jpg" },
];

export const Home = () => {
  return (
    <div css={styles.root}>
      <div>
        <Carousel slides={slides} />
      </div>
      <div css={styles.listView}>
        <ListView textList={testData} />
      </div>
      <div
        css={css({
          width: "100%",
          display: "flex",
          justifyContent: "center",
        })}
      >
        <NewItemsList newItemsData={specialFeatures} />
      </div>
    </div>
  );
};

const styles = {
  root: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  listView: css({
    width: "50%",
    height: "100%",
    marginTop: "50px",
  }),
};

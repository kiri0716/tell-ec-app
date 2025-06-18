import { css } from "@emotion/react";
import { Carousel } from "../../components/Carousel";
import { ListView } from "./NewsListview";
import { NewItemsList } from "./NewItemsList";

//todo あとでコンテナ、ディスプレイに分ける

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
type News = {
  id: string
  title: string
  body: string
  date: string
}

const dummyNews: News[] = [
  {
    id: "1",
    title: "新作アクセサリー追加しました",
    body: "本日より新しい天然石のピアスが公開されました。",
    date: "2025/06/17",
  },
  {
    id: "2",
    title: "メルカリにてセール開催中",
    body: "一部商品が期間限定でお得に！",
    date: "2025/06/15",
  },
  {
    id: "3",
    title: "再入荷のお知らせ",
    body: "人気のアイテムが再入荷しました。",
    date: "2025/06/14",
  },
  {
    id: "4",
    title: "お知らせ",
    body: "新しいイベントを予定しています。",
    date: "2025/06/12",
  },
];

const specialFeatures = [
  {
    onClick: () => alert("Feature 1 clicked"),
    imageUrl: "IMG_4538.jpg",
    label: "ポケモン",
    price: 500,
  },
  {
    onClick: () => alert("Feature 2 clicked"),
    imageUrl: "IMG_4539.jpg",
    label: "キーホルダー",
    price: 650,
  },
  {
    onClick: () => alert("Feature 3 clicked"),
    imageUrl: "IMG_4538.jpg",
    label: "天然石ピアス",
    price: 1200,
  },
  {
    onClick: () => alert("Feature 4 clicked"),
    imageUrl: "IMG_4539.jpg",
    label: "ビーズリング",
    price: 800,
  },
  {
    onClick: () => alert("Feature 5 clicked"),
    imageUrl: "IMG_4538.jpg",
    label: "レザーケース",
    price: 1500,
  },
  {
    onClick: () => alert("Feature 6 clicked"),
    imageUrl: "IMG_4539.jpg",
    label: "手作りネックレス",
    price: 1350,
  },
];
export const Home = () => {
  return (
    <div css={styles.root}>
      <div>
        <Carousel slides={slides} />
      </div>
      <div css={styles.listView}>
        <ListView newsList={dummyNews} />
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
  width: "100%",
  maxWidth: "800px", // 適度な中央寄せ幅（必要なら）
  padding: "0 16px", // スマホ時に端にくっつかないように
  margin: "50px auto 0", // 上マージン＋中央寄せ
  boxSizing: "border-box",
}),
};

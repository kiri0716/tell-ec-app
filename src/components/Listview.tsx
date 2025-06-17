/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type News = {
  id: string;
  title: string;
  body: string;
  date: string;
};
type ListViewProps = {
  newsList?: News[];
};

export const ListView: FC<ListViewProps> = ({ newsList = [] }) => {
  return (
    <div css={styles.base}>
      {newsList.map((news) => (
        <div key={news.id} css={styles.item}>
          <div css={styles.date}>{news.date}</div>
          <div css={styles.title}>{news.title}</div>
          <div css={styles.body}>{news.body}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
base: css({
  maxHeight: "180px",
  overflowY: "auto",
  paddingRight: "4px",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ccc",
    borderRadius: "4px",
  },
}),
  item: css({
    padding: "12px",
    background: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "12px",
  }),
  date: css({
    fontSize: "14px",
    color: "#888",
  }),
  title: css({
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "4px",
  }),
  body: css({
    fontSize: "14px",
    marginTop: "4px",
    lineHeight: "1.5",
    whiteSpace: "normal", // 改行を許可
    maxHeight: "200px",
    overflowY: "auto",
    "@media (max-width: 600px)": {
      maxHeight: "140px",
    },
  }),
};

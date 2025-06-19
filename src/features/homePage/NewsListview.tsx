import { css } from "@emotion/react";

type News = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type ListViewProps = {
  newsList?: News[];
};

export const ListView = ({ newsList = [] }:ListViewProps) => {
  return (
    <div css={styles.container}>
      {newsList.map((news) => (
        <div key={news.id} css={styles.card}>
          <div css={styles.date}>{news.date}</div>
          <div css={styles.content}>
            <div css={styles.title}>{news.title}</div>
            <div css={styles.body}>{news.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
   container: css({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 12px", // ← スクロールを防ぐ安全な余白
    boxSizing: "border-box", // ← はみ出し防止

    "@media (max-width: 600px)": {
      padding: "0 12px",
    },
  }),
  card: css({
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#fff8fc",
    border: "1px solid #eee",
    borderRadius: "10px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    boxSizing: "border-box", // ← ここも忘れず
    transition: "transform 0.2s ease, box-shadow 0.2s ease",

    ":hover": {
      transform: "scale(1.01)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },

    "@media (max-width: 600px)": {
      flexDirection: "column",
      padding: "12px",
    },
  }),
  date: css({
    minWidth: "90px",
    fontSize: "14px",
    color: "#999",
    fontWeight: "bold",
    marginRight: "16px",
    whiteSpace: "nowrap",
    "@media (max-width: 600px)": {
      marginRight: "0",
    },
  }),
  content: css({
    flex: 1,
  }),
  title: css({
    fontSize: "16px",
    fontWeight: "bold",
    color: "#444",
    marginBottom: "4px",
  }),
  body: css({
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.6,
  }),
};

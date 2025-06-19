import { css } from "@emotion/react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div css={styles.footer}>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        css={styles.link}
      >
        🕊 X（旧Twitter）で最新情報を見る
      </a>
    </div>
  );
};

const styles = {
  footer: css({
    width: "100%",
    padding: "16px 0",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    marginTop: "60px", // 上に余白
    borderTop: "1px solid #ddd",
  }),
  link: css({
    fontSize: "14px",
    color: "#1DA1F2",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "opacity 0.2s ease",
    ":hover": {
      opacity: 0.7,
    },
  }),
};

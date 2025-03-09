/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

type ListViewProps = {
  textList?: string[];
};

export const ListView: FC<ListViewProps> = ({
  textList = [],
}: ListViewProps) => {
  return (
    <div css={styles.base}>
      {textList.map((text) => {
        return (
          <div key={text} css={styles.text}>
            {text}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  base: css({
    width: "100%",
    borderRadius: "10px",
    border: "1px solid #ccc",
    overflowY: "scroll", // スクロールを有効にする
    height: "80px", // 高さを2行分に設定
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    /* スクロールバーを非表示にする */
    "&::-webkit-scrollbar": {
      display: "none", // スクロールバーを非表示にする
    },
  }),
  text: css({
    width: "90%",
    fontSize: "20px", // フォントサイズ
    borderBottom: "1px solid #ccc",
    paddingLeft: "10px",
    lineHeight: "40px", // 行の高さを調整（見た目上の高さ）
    whiteSpace: "nowrap", // 改行を防止
    // タブレット向け設定
    "@media (max-width: 1024px)": {
      fontSize: "20px",
    },
    "@media (max-width: 600px)": {
      fontSize: "12px",
    },
  }),
};

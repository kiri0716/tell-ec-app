import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import { ColorPallet } from "../../types/ColorPallet";
import { CssVariables } from "../../types/CssVariables";
import { PageType } from "../../types/Enum";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  title?: ReactNode;
  fontSize?: string;
  headerType?: PageType;
};

export const Header = React.memo<HeaderProps>(
  ({
    title = "ハンドメイド工房 tell",
    fontSize = "18px",
    headerType = "home",
  }: HeaderProps) => {
    const navigate = useNavigate();

    return (
      <div css={styles.root(headerType, fontSize)}>
        <div css={styles.title} onClick={() => navigate("/")}>
          {title}
        </div>
        <div css={styles.nav}>
          <div css={styles.navItem} onClick={() => navigate("/items")}>全商品</div>
          <div css={styles.navItem} onClick={() => navigate("/category")}>○○○</div>
          <div css={styles.navItem} onClick={() => navigate("/news")}>○○○</div>
        </div>
      </div>
    );
  }
);

const styles = {
  root: (headerType: PageType, fontSize: string) =>
    css({
      height: CssVariables.header.height,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px",
      fontSize,
      background: ColorPallet.backGround[headerType],
    }),
  title: css({
    fontWeight: "bold",
    cursor: "pointer",
  }),
  nav: css({
    display: "flex",
    gap: "16px",
    "@media (max-width: 600px)": {
      display: "none", // スマホでは隠す or ハンバーガーに切り替え
    },
  }),
  navItem: css({
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  }),
};

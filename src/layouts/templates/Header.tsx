/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import { ColorPallet } from "../../types/ColorPallet";
import { CssVariables } from "../../types/CssVariables";

type HeaderProps = {
  title?: ReactNode;
  fontSize?: string;
  headerType?: "home" | "shop";
};

export const Header = React.memo<HeaderProps>(
  ({
    title = "ハンドメイド工房 tell (logo)",
    fontSize = "18px",
    headerType = "home",
  }: HeaderProps) => {
    return (
        <div css={styles.root(headerType,fontSize)}>
            {title}
        </div>
    )
  }
);

const styles = {
  root: (headerType: "home" | "shop", fontSize: string) =>
    css({
      height: CssVariables.header.height,
      display:"flex",
      alignItems:"center",
      fontSize,
      background:ColorPallet.backGround[headerType],
    }),
};

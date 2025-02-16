/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import { ColorPallet } from "../../types/ColorPallet";
import { CssVariables } from "../../types/CssVariables";
import { PageType } from "../../types/Enum";

type HeaderProps = {
  title?: ReactNode;
  fontSize?: string;
  headerType?:PageType
};

/**
 * 共通のヘッダー
 * @param title ヘッダーに表示する要素
 * @param fontSize 文字サイズ
 * @param HeaderType 
 */

export const Header = React.memo<HeaderProps>(
  ({
    title = "ハンドメイド工房 tell (logo)",
    fontSize = "18px",
    headerType="home"
  }: HeaderProps) => {
    return <div css={styles.root(headerType, fontSize)}>{title}</div>;
  }
);

const styles = {
  root: (headerType:PageType, fontSize: string) =>
    css({
      height: CssVariables.header.height,
      display: "flex",
      alignItems: "center",
      fontSize,
      background: ColorPallet.backGround[headerType],
    }),
};

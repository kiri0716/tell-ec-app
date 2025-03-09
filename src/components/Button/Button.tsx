/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { SizeType } from "../../types/Enum";
import { CssVariables } from "../../types/CssVariables";
import { memo, ReactNode } from "react";

export interface NormalButtonProps {
  size?: SizeType;
  label?: ReactNode;
  css?: SerializedStyles;
  imageUrl?: string;
  textBoxHeight?: string | number;
  isCircle?: boolean;
  onClick?: () => void;
}
/**
 * 基本的なボタンコンポーネント
 * @param size ボタンのサイズタイプ
 * @param imageUrl 画像のパス
 * @param textBoxHeight テキストボックスの高さ
 */
export const Button = memo<NormalButtonProps>(
  ({
    size = "medium",
    imageUrl = "",
    label,
    textBoxHeight,
    onClick,
    isCircle = false,
    ...props
  }) => {
    const styles = {
      root: css({
        width: CssVariables.button.width[size],
        height: CssVariables.button.height[size],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        background: "lightgreen",
        border: "1px solid white",
        outline: "none",
        boxSizing: "border-box",
        position: "relative", // 画像をボタンいっぱいにするために
        overflow: "hidden", // 画像がボタンの外に出ないように
        padding: "0",
        cursor: "pointer",
        "&:active": {
          opacity: "0.4",
        },
        "@media (max-width: 1024px)": {
          height: "300px", // スマホサイズで高さを自動調整
          width: "300px", // 幅は100%に
        },
        "@media (max-width: 600px)": {
          height: "150px", // スマホサイズで高さを自動調整
          width: "150px", // 幅は100%に
        },
      }),
      image: css({
        width: "100%",
        height: isCircle
          ? "auto"
          : label
          ? `calc(100% - ${textBoxHeight})`
          : "auto",
        objectFit: "cover",
        borderRadius: isCircle ? "10%" : "10px 10px 0 0",
      }),
      textContainer: css({
        width: "calc(100% - 6px)",
        height: textBoxHeight,
        padding: "8px",
        backgroundColor: "green",
        borderRadius: "0 0 10px 10px",
        boxSizing: "border-box",
        margin: "3px",
      }),
    };

    return (
      <div css={styles.root} {...props} onClick={onClick}>
        {imageUrl && (
          <img src={imageUrl} alt="button image" css={styles.image} />
        )}
        {label && <div css={styles.textContainer}>{label}</div>}
      </div>
    );
  }
);

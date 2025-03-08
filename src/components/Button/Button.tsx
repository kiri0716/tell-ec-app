import { ButtonHTMLAttributes } from "react";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { SizeType } from "../../types/Enum";
import { CssVariables } from "../../types/CssVariables";

/**
 * 基本的なボタンコンポーネント
 * ボタン系を作るときはこのコンポーネントを継承
 * @param size
 */

interface NormalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType;
  css?: SerializedStyles;
}

export const Button: React.FC<NormalButtonProps> = ({
  size = "medium",
  children,
  ...props
}) => {
  const styles = {
    root: css({
      width:CssVariables.button.width[size],
      height:CssVariables.button.height[size],
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius: "10px",
      background:"lightgreen",
      border: "1px solid white",
      outline:"none",
      boxSizing: "border-box",
      "&:active": {
        opacity:"0.4",
      },
    }),
  };

  return (
    <button css={styles.root} {...props}>
      {children}
    </button>
  );
};

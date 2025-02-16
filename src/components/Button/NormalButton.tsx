import { ButtonHTMLAttributes } from "react";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

interface NormalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  css?: SerializedStyles; // cssプロパティを追加
}

export const Normalbutton: React.FC<NormalButtonProps> = ({
  size = "medium",
  children,
  ...props
}) => {
  const styles = {
    root: css({
      display: "flex",
      borderRadius: "4px",
      border: "solid 1px #329eff",
      boxSizing: "border-box",
    }),
  };

  return (
    <button css={styles.root} {...props}>
      {children}
    </button>
  );
};

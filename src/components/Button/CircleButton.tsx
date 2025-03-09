/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Button, NormalButtonProps } from "./Button";
import { css } from "@emotion/react";

interface CircleButtonProps extends NormalButtonProps {
  width?: string | number;
  height?: string | number;
}

export const CircleButton = memo<CircleButtonProps>(
  ({ width = 172, height = 172, ...props }: CircleButtonProps) => {
    const circleButtonStyles = css({
      width,
      height,
      borderRadius: "50%",
      overflow: "hidden",
    });
    return <Button css={circleButtonStyles} isCircle={true} {...props} />;
  }
);

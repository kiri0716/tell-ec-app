
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type IndicatorProps = {
  slides: { image: string }[];
  currentIndex: number;
};

export const Indicator: React.FC<IndicatorProps> = ({ slides, currentIndex }) => {
  return (
    <div css={styles.indicatorWrapper}>
      {slides.map((_, index) => (
        <div
          key={index}
          css={[styles.indicator, currentIndex === index && styles.activeIndicator]}
        />
      ))}
    </div>
  );
};

const styles = {
  indicatorWrapper: css({
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  }),
  indicator: css({
    width: "10px",
    height: "10px",
    backgroundColor: "black",
    borderRadius: "50%",
    opacity: 0.4,
    transition: "opacity 0.3s ease",
  }),
  activeIndicator: css({
    opacity: 1,
  }),
};

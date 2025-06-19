import { css } from "@emotion/react";
import { memo } from "react";

type ItemCardProps = {
  onClick?: () => void;
  imageUrl?: string;
  label?: string;
  price?: number;
};

/**
 * 商品表示用コンポーネント
 * @param onClick クリック時の動作
 * @param imageUrl 商品画像
 * @param label 商品名
 * @param price 商品価格
 */
export const ItemCard = memo(
  ({ onClick, imageUrl, label, price }: ItemCardProps) => {
    return (
      <div css={styles.card} onClick={onClick}>
        <img src={imageUrl} alt={label} css={styles.image} />
        <div css={styles.info}>
          <div css={styles.label}>{label}</div>
          <div css={styles.price}>{price}円</div>
        </div>
      </div>
    );
  }
);

const styles = {
  card: css({
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    ":hover": {
      transform: "scale(1.02)",
    },
  }),
  image: css({
    width: "100%",
    height: "140px", 
    objectFit: "cover",
    "@media (max-width: 600px)": {
      height: "120px",
    },
  }),
  info: css({
    padding: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  label: css({
    fontSize: "14px",
    fontWeight: "bold",
  }),
  price: css({
    fontSize: "12px",
    color: "#444",
  }),
};

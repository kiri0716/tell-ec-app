import { memo } from "react"
import { css } from "@emotion/react"
import { ItemCard } from "../../components/Button/ItemCard"

//todo 共通化検討 商品表示系をこのコンポーネントで行う

type NewItem = {
  onClick?: () => void
  imageUrl?: string
  label?: string
  price?: number
}

type NewItemsListProps = {
  newItemsData: NewItem[]
}

export const NewItemsList = memo<NewItemsListProps>(({ newItemsData }) => {
  return (
    <div css={styles.root}>
      <div css={styles.title}>🆕 新商品</div>
      <div css={styles.grid}>
        {newItemsData.map((item, index) => (
          <ItemCard key={index} imageUrl={item.imageUrl} label={item.label} onClick={item.onClick} price={item.price}/>
        ))}
      </div>
    </div>
  )
})

const styles = {
  root: css({
    marginTop: "30px",
  }),
  title: css({
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
  }),
  grid: css({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 横4つ
    gap: "12px",
    padding: "0 12px",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)", // タブレット
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // スマホ
    },
  }),
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
    height: "140px", // コンパクト
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
}

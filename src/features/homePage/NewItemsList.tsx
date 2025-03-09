/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Button } from "../../components/Button/Button";
import { css } from "@emotion/react";
import { CssVariables } from "../../types/CssVariables";

type newItemsData = {
  onClick?: () => void;
  imageUrl?: string;
  label?: string;
  price?: number;
};

type newItemsDataProps = {
  newItemsData: newItemsData[];
};

/**
 * 特集表示
 * @param newItemsData 新商品に表示するデータ
 */

export const NewItemsList = memo<newItemsDataProps>(
  ({ newItemsData }: newItemsDataProps) => {
    const styles = {
      root: css({
        marginTop: "30px",
      }),
      newItemsListConteiner: css({
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "16px", 
        padding: "16px",

        // タブレットサイズの場合（最大1024px以下）2列に変更
        "@media (max-width: 1024px)": {
          gridTemplateColumns: "repeat(2, 1fr)", 
        },

        // スマートフォンサイズの場合（最大600px以下）1列に変更
        "@media (max-width: 600px)": {
          gridTemplateColumns: "repeat(2, 1fr)", 
          fontSize:"12px",
        },
      }),
      button: css({
        width: "100%",
        boxSizing: "border-box", 
      }),
    };
    return (
      <div css={styles.root}>
        <div css={css({ textAlign: "center" })}>新商品</div>
        <div css={styles.newItemsListConteiner}>
          {newItemsData.map((item, index) => (
            <Button
              key={index}
              onClick={item.onClick}
              imageUrl={item.imageUrl}
              size={"medium"}
              textBoxHeight={"50px"}
              css={styles.button}
              label={
                <div
                  css={css({
                    display: "flex",
                    justifyContent: "space-between",
                  })}
                >
                  <div>{item.label}</div>
                  <div>{item.price}円</div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    );
  }
);


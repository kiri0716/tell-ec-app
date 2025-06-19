import { css } from "@emotion/react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Indicator } from "./Indicator";

type carouselProps = {
  slides: Slide[];
};

/**
 * 自動スクロールのカルーセル
 * @param
 * @returns
 */

export const Carousel = ({ slides }: carouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  // 現在のスライドインデックス
  const [currentIndex, setCurrentIndex] = useState(0);

  // スライドの変更時にインデックスを更新
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // 初期インデックスを設定

    // クリーンアップ処理: off メソッドの引数はイベントリスナー関数
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // 自動スクロール
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 5秒ごとに次のスライドに遷移

    // コンポーネントがアンマウントされたときにクリア
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div>
      <div css={styles.carouselWrapper}>
        <div ref={emblaRef} css={styles.carouselContainer}>
          <div css={styles.carouselTrack}>
            {slides.map((slide, index) => {
              const opacity = currentIndex === index ? 1 : 0.4;
              return (
                <div key={index} css={styles.slideItem}>
                  {slide.link ? (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={slide.image}
                        alt={`slide ${index}`}
                        css={[styles.slideImage, { opacity: opacity }]}
                      />
                    </a>
                  ) : (
                    <img
                      src={slide.image}
                      alt={`slide ${index}`}
                      css={[styles.slideImage, { opacity: opacity }]}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Indicator currentIndex={currentIndex} slides={slides} />
    </div>
  );
};

const styles = {
  carouselWrapper: css({
    width: "100%",
    margin: "0 auto", // 中央寄せ
    overflow: "hidden",
  }),
  carouselContainer: css({
    display: "flex",
    width: "100%",
  }),
  carouselTrack: css({
    display: "flex",
  }),
  slideItem: css({
    flex: "0 0 auto",
    width: "50%",
    margin: "0 10px",
  }),
  slideImage: css({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    transition: "opacity 0.5s ease",
  }),
};

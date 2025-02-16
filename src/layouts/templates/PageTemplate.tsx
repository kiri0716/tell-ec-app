import { memo, ReactNode } from "react";

type PageTemplateProps = {
  titleLabel?: string;
  children: ReactNode;
};

/**
 * ページタイトルを追加するテンプレート
 * 各ページテンプレートのpropsに「& React.ComponentProps<typeof PageTemplate>」を追加して、PageTemplateタグを囲んで使用する。
 */

export const PageTemplate = memo<PageTemplateProps>(
  ({ titleLabel = "ハンドメイド工房tell", children }: PageTemplateProps) => {
    return (
      <>
        <title>{titleLabel}</title>
        {children}
      </>
    );
  }
);

PageTemplate.displayName = "PageTemplate";

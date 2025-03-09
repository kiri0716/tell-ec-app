import { ComponentProps, memo } from "react";
import { PageTemplate } from "./PageTemplate";
import { Header } from "./Header";

type HomePageTemplateProps = {} & ComponentProps<typeof PageTemplate>;

/**
 * ホーム画面のテンプレート
 */

export const HomePageTemplate = memo<HomePageTemplateProps>(
  ({ children }: HomePageTemplateProps) => {
    return (
      <PageTemplate>
        <Header headerType={"home"} />
        {children}
      </PageTemplate>
    );
  }
);

HomePageTemplate.displayName="HomePageTemplate"
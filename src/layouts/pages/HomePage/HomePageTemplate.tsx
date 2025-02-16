import { ComponentProps, memo } from "react";
import { PageTemplate } from "../../templates/PageTemplate";
import { Header } from "../../templates/Header";

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
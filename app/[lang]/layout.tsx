import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import { getDictionary } from "../_dictionaries/get-dictionary";
import { getLayoutConfig } from "@/_config/layout.config";
import { getMetadata } from "@/_config/meta.config";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = getMetadata();

interface IRootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function RootLayout({
  children,
  params,
}: IRootLayoutProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const pageMap = await getPageMap(`/${lang}`);
  const layoutConfig = getLayoutConfig(dictionary);

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout pageMap={pageMap} {...layoutConfig}>
          {children}
        </Layout>
      </body>
    </html>
  );
}

import nextra from "nextra";
import bundleAnalyzer from "@next/bundle-analyzer";

const withNextra = nextra({
  latex: true,
  search: { codeblocks: false },
  contentDirBasePath: "/",
  defaultShowCopyCode: true,
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer(
  withNextra({
    reactStrictMode: true,
    i18n: {
      locales: ["en", "zh"],
      defaultLocale: "en",
    },
    redirects: () => [
      {
        source: "/",
        destination: "/docs/introduction",
        statusCode: 302,
      },
    ],
  }),
);

export default nextConfig;

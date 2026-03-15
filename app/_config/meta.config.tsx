import type { Metadata } from "next";

/**
 * Get metadata configuration
 */
export const getMetadata = (): Metadata => ({
  /** Alternates configuration */
  alternates: {
    /** Canonical link */
    canonical: "./",
  },
  /** Apple Web App configuration */
  appleWebApp: {
    /** Apple Web App title */
    title: "Nextra418",
  },
  /** Application name */
  applicationName: "Nextra418",
  /** Website description */
  description:
    "The most minimal Nextra 4 docs template with i18n out of the box. No extra components, no opinions — just the skeleton.",
  /** Generator name */
  generator: "Next.js",
  /** Website keywords */
  keywords: ["Nextra418", "Nextra", "Template", "Next.js"],
  /** Metadata base URL */
  metadataBase: new URL("https://nextra418.vercel.app/"),
  /** Open Graph social sharing configuration */
  openGraph: {
    /** Locale */
    locale: "en_US",
    /** Site name */
    siteName: "Nextra418",
    /** Type */
    type: "website",
    /** Page URL */
    url: "./",
  },
  /** Other metadata */
  other: {
    /** Windows tile color */
    "msapplication-TileColor": "#fff",
  },
  /** Website title configuration */
  title: {
    /** Default title */
    default: "Nextra418",
    /** Title template, %s will be replaced with page title */
    template: "%s | Nextra418",
  },
  /** Twitter card configuration */
  twitter: {
    /** Twitter site URL */
    site: "https://nextra418.vercel.app/",
  },
  /** Website icon configuration */
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.png",
    },
  ],
});

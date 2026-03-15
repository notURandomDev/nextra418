import { Dictionary } from "@/_dictionaries/i18n-config";
import { Navbar, Footer, LastUpdated } from "nextra-theme-docs";
import { Banner, Search } from "nextra/components";
import pack from "../../package.json";

/**
 * Layout component configuration
 * Used for Layout component props in app/layout.tsx
 */
export const getLayoutConfig = (dictionary: Dictionary) => ({
  /** Whether to show copy page content button */
  copyPageButton: false,
  /** Whether to show dark mode toggle button */
  darkMode: true,
  /** Documentation repository base URL */
  docsRepositoryBase: "https://github.com/notURandomDev/nextra418/blob/main",
  /** Edit link text */
  editLink: dictionary.editPage,
  /** Feedback link configuration */
  feedback: {
    /** Feedback link text */
    content: dictionary.feedback.content,
    /** Labels to add when creating a new issue */
    labels: "feedback",
  },
  /** Top banner content */
  banner: (
    <Banner storageKey={`release-notes-${pack.version}`}>
      ✨ v{pack.version} {dictionary.release.title} -{" "}
      <a href={`/docs/release-notes`}>{dictionary.release.notes}</a>
    </Banner>
  ),
  /** Navbar component */
  navbar: (
    <Navbar
      logo={<span>Nextra418</span>}
      projectLink="https://github.com/notURandomDev/nextra418"
    />
  ),
  /** Footer component */
  footer: <Footer>MIT {new Date().getFullYear()} © Nextra418.</Footer>,
  i18n: [
    { locale: "zh", name: "简体中文" },
    { locale: "en", name: "English" },
  ],
  /** Navigation links configuration */
  navigation: {
    /** Whether to show previous page navigation */
    prev: true,
    /** Whether to show next page navigation */
    next: true,
  },
  /** next-themes theme configuration */
  nextThemes: {
    /** Theme attribute */
    attribute: "class" as const,
    /** Default theme */
    defaultTheme: "system",
    /** Whether to disable transition animation when switching themes */
    disableTransitionOnChange: false,
    /** Theme storage key */
    storageKey: "theme",
  },
  /** Search component */
  search: <Search placeholder={dictionary.search.placeholder} />,
  /** Sidebar configuration */
  sidebar: {
    /** Whether to automatically collapse inactive folders */
    autoCollapse: true,
    /** Default menu collapse level */
    defaultMenuCollapseLevel: 1,
    /** Whether to expand sidebar by default */
    defaultOpen: true,
    /** Whether to show sidebar toggle button */
    toggleButton: true,
  },
  /** Table of contents configuration */
  toc: {
    /** Whether TOC is displayed floating */
    float: true,
    /** Back to top button text */
    backToTop: dictionary.backToTop,
    /** TOC title */
    title: dictionary.toc.title,
  },
  lastUpdated: <LastUpdated>{dictionary.lastUpdated}</LastUpdated>,
});

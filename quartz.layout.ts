import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jso8910",
      "RSS Feed": "https://jso8910.github.io/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "Articles",
      sortFn: (a, b) => {
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          // If the displayName ends with "Part X)", sort by the number
          if (/Part \d*\)$/.test(a.displayName) && /Part \d\)$/.test(b.displayName)) {
            return Number(a.displayName.match(/Part (\d*)\)$/)[1]) - Number(b.displayName.match(/Part (\d*)\)$/)[1])
          } else if (/Part \d*\)$/.test(a.displayName)) {
            return -1
          } else if (/Part \d\)$/.test(b.displayName)) {
            return 1
          }
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return 1
        } else {
          return -1
        }
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Recent posts",
        linkToMore: "tags/article",
        limit: 10,
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'jso8910/jso8910.github.io',
        // from data-repo-id
        repoId: 'R_kgDOOj0Gtw',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOOj0Gt84Cp6SC',
        inputPosition: 'top',
      }
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}

// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// utils/mdx.ts
import slugger from "github-slugger";
var getTableOfContents = (mdxContent) => {
  const regexp = new RegExp(/^(### |## )(.*)\n/, "gm");
  const headings = [...mdxContent.matchAll(regexp)];
  let tableOfContents = [];
  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingText = heading[2].trim();
      const headingType = heading[1].trim() === "##" ? "h2" : "h3";
      const headingLink = slugger.slug(headingText, false);
      return {
        text: headingText,
        id: headingLink,
        level: headingType
      };
    });
  }
  return tableOfContents;
};

// config/site-config.ts
var websiteUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
var githubBaseUrl = "https://github.com/jhonswg";
var siteConfig = {
  repo: {
    url: githubBaseUrl,
    editUrl: `${githubBaseUrl}/edit/main/content`,
    blobUrl: `${githubBaseUrl}/blob/main`
  },
  author: {
    name: "Bryan Barrios",
    github: "bryanbarrios",
    twitter: "@bryanbarrios__",
    email: "bryansbarrios@outlook.com"
  },
  seo: {
    title: "Jhonswg - Stake and Earn with us",
    description: "A lil docs template for lil projects.",
    openGraph: {
      url: websiteUrl,
      type: "website",
      image: {
        url: `${websiteUrl}/static/images/banner.png`,
        width: 1240,
        height: 480,
        alt: "Lil Documentation Template: A lil docs template for lil projects.",
        type: "image/png"
      },
      locale: "en_US",
      siteName: "Jhonswg - Stake and Earn with us"
    },
    twitter: {
      site: "@bryanbarrios__",
      handle: "@bryanbarrios__",
      cardType: "summary_large_image",
      image: {
        url: `${websiteUrl}/static/images/banner.png`,
        width: 1012,
        height: 506,
        alt: "Lil Documentation Template: A lil docs template for lil projects.",
        type: "image/png"
      }
    },
    robots: "index, follow"
  }
};
var site_config_default = siteConfig;

// contentlayer.config.ts
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  editUrl: {
    type: "string",
    resolve: (doc) => site_config_default.repo?.editUrl ? `${site_config_default.repo.editUrl}/${doc._id}` : null
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the document",
      required: true
    }
  },
  computedFields: {
    ...computedFields,
    headings: {
      type: "json",
      resolve: (doc) => getTableOfContents(doc.body.raw)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZJTSIUIN.mjs.map

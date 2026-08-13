import * as React from "react";

type SeoData = {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
};

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

export default function usePageSeo(data?: SeoData) {
  React.useEffect(() => {
    if (!data) return;
    const canonical = new URL(data.canonicalPath || window.location.pathname, window.location.origin).toString();
    const image = data.image ? new URL(data.image, window.location.origin).toString() : `${window.location.origin}/logo.png`;

    document.title = data.title;
    setMeta('meta[name="description"]', "name", "description", data.description);
    setMeta('meta[property="og:title"]', "property", "og:title", data.title);
    setMeta('meta[property="og:description"]', "property", "og:description", data.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", data.title);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", data.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", data.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [data?.title, data?.description, data?.image, data?.canonicalPath]);
}

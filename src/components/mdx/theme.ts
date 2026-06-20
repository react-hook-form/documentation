import type { PrismTheme } from "prism-react-renderer"

export const darkTheme: PrismTheme = {
  plain: {
    backgroundColor: "var(--color-purple)",
    color: "#f8f8f2",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#f92672",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#8292a2",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "#e6d06c",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#f8f8f2",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#ae81ff",
      },
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "#e6db74",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#f8f8f2",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "#a6e22e",
        fontStyle: "italic",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#ef3b7d",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "#a77afe",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "property"],
      style: {
        color: "#f92672",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#a6e22e !important",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "#8292a2",
      },
    },
    {
      types: ["rule"],
      style: {
        color: "#e6db74",
      },
    },
  ],
}

export const lightTheme: PrismTheme = {
  plain: {
    backgroundColor: "white",
    color: "#1a1a2e",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#c0153e",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "#166534",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#5c6773",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "#b45309",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#1a1a2e",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#7c3aed",
      },
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "#7c3aed",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#555569",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "#166534",
        fontStyle: "italic",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#bf1650",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "#7c3aed",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "#4b5563",
      },
    },
    {
      types: ["tag", "property"],
      style: {
        color: "#bf1650",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#166534",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "#5c6773",
      },
    },
    {
      types: ["rule"],
      style: {
        color: "#7c3aed",
      },
    },
  ],
}

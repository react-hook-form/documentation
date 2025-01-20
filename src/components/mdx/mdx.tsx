import { PrismSyntaxHighlight } from "./code"
import { Pre } from "./pre"
import TabGroup from "../TabGroup"
import { YouTube } from "./youtube"
import TypeText from "../TypeText"
import Popup from "../Popup"
import { Components } from "@mdx-js/react/lib"
import { Admonition } from "../Admonition"
import { CodeSandBoxLink } from "../CodeSandbox"
import tableStyles from "../../styles/table.module.css"
import { SelectNav } from "@/components/selectNav"
import CodeArea from "@/components/CodeArea"

export const MDXComponents: Components = {
  // p: P,
  // strong: Strong,
  // blockquote: Blockquote,
  // ol: OL,
  // ul: UL,
  // li: LI,
  // h1: H1,
  // h2: H2,
  // h3: H3,
  // h4: H4,
  // hr: Divider,
  // a: Link,
  // img: ResponsiveImage,
  // Layout,
  SelectNav,
  CodeArea,
  table(props) {
    return (
      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table} {...props} />
      </div>
    )
  },
  Admonition,
  Popup,
  TypeText,
  YouTube(props) {
    return <YouTube {...props} />
  },
  CodeSandbox: CodeSandBoxLink,
  pre(props) {
    return <Pre {...props} />
  },
  code({ className, children, ...props }) {
    return className ? (
      <PrismSyntaxHighlight className={className} {...props}>
        {children}
      </PrismSyntaxHighlight>
    ) : (
      <code {...props}>{children}</code>
    )
  },
  TabGroup,
  PrettyObject({ value }: { value: Record<string, unknown> }) {
    return JSON.stringify(value, null, 2).replace(/"/g, "")
  },
}

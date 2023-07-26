import { PrismSyntaxHighlight } from "./code"
import { Pre } from "./pre"
import TabGroup from "../TabGroup"
import { YouTube } from "./youtube"
import TypeText from "../TypeText"
import Popup from "../Popup"
import { Admonition } from "../Admonition"
import { CodeSandBoxLink } from "../CodeSandbox"
import tableStyles from "@/styles/table.module.css"
import { SelectNav } from "@/components/selectNav"
import CodeArea from "@/components/CodeArea"
import FormState from "@/components/useForm/FormState"
import SetValue from "@/components/useForm/SetValue"
import Register from "@/components/useForm/Register"
import type { MDXComponents as Components } from "mdx/types"

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
  Register,
  SetValue,
  FormState,
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
}

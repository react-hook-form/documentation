import { PrismSyntaxHighlight } from "./code"
import { Pre } from "./pre"

export const MDXComponents = {
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
  // YouTube: YouTube,
  pre(props) {
    return <Pre {...props} />
  },
  code({ className, children, ...props }) {
    return className ? (
      <PrismSyntaxHighlight className={className}>
        {children}
      </PrismSyntaxHighlight>
    ) : (
      <code {...props}>{children}</code>
    )
  },
}

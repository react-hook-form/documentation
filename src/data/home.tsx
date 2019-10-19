import * as React from "react"

export default {
  title: {
    en: "Home",
    jp: "ホーム",
    zh: "首页",
  },
  description: {
    en: "React hook for form validation without the hassle",
    jp: "React hook for form validation without the hassle",
    zh: "React hook用于表单验证，无需麻烦",
  },
  slogan: {
    en:
      "Performant, flexible and extensible forms with easy-to-use validation.",
    jp:
      "高性能で柔軟かつ拡張可能な使いやすいフォームバリデーションライブラリ。",
    zh: "高性能、灵活、易拓展、易于使用的表单校验库。",
  },
  getStarted: {
    en: "Get Started",
    jp: "始めましょう",
    zh: "起步",
  },
  demo: {
    en: "Demo",
    jp: "デモ",
    zh: "演示",
  },
  findInteresting: {
    en: {
      heading: "Find it useful and interesting?",
      description: `Form validation should be much simpler. React Hook Form will lead you to write less code and have better performance. Check out the Get Started section and learn more on the API documentation page.`,
    },
    jp: {
      heading: "Find it useful and interesting?",
      description: `Form validation should be much simpler. React Hook Form will lead you to write less code and have better performance. Check out the Get Started section and learn more on the API documentation page.`,
    },
    zh: {
      heading: "发现它有用和有趣?",
      description: `表单验证应该更简单。 React钩子形式将导致您编写更少的代码并具有更好的性能。 查看"入门"部分，并在API文档页面了解更多信息。`,
    },
  },
  features: {
    en: [
      {
        title: "DX",
        description: `Intuitive, feature-complete API providing a seamless experience to developers when building forms.`,
      },
      {
        title: "HTML standard",
        description: `Leverage existing HTML markup and validate your forms with our constraint-based validation API.`,
      },
      {
        title: "Super Light",
        description: `Performance is important and package size matters. React Hook Form is a tiny library without any dependencies.`,
      },
      {
        title: "Performance",
        description: `Minimizes the number of re-renders and faster mounting, striving to provide the best user experience.`,
      },
      {
        title: "Adoptable",
        description: `Since form state is inherently local, it can be easily adopted without other dependencies.`,
      },
    ],
    jp: [
      {
        title: "DX",
        description: `Intuitive, feature-complete API providing a seamless experience to developers when building forms.`,
      },
      {
        title: "HTML 標準",
        description: `Leverage existing HTML markup and validate your forms with our constraint-based validation API.`,
      },
      {
        title: "スーパーライト",
        description: `Performance is important and package size matters. React Hook Form is a tiny library without any dependencies.`,
      },
      {
        title: "性能",
        description: `Minimizes the number of re-renders and faster mounting, striving to provide the best user experience.`,
      },
      {
        title: "採用可能",
        description: `Since form state is inherently local, it can be easily adopted without other dependencies.`,
      },
    ],
    zh: [
      {
        title: "开发体验",
        description:
          "直观的功能和完整的API在构建表单时为开发人员提供最好体验。",
      },
      {
        title: "HTML标准",
        description: `利用现有的HTML，并开始使用约束验证API验证您的表单。`,
      },
      {
        title: "超轻",
        description: `性能很重要，尺寸很重要。 它是一个很小的库，没有任何依赖关系。`,
      },
      {
        title: "高性能",
        description: `最大限度地减少render的数量和更快的安装，努力提供最佳的用户体验。`,
      },
      {
        title: "适应性强",
        description: `由于form状态是基于本地的，因此可以轻松地在没有其他依赖关系的情况下采用它。`,
      },
    ],
  },
  codeComparison: {
    en: {
      title: "Library Code Comparison",
      description: `Reducing the amount of code that you have to write is one of the primary goals for React Hook Form. To illustrate that, let's look at a very simple form of validation among some of the most popular form validation libraries.`,
    },
    jp: {
      title: "Library Code Comparison",
      description: `Reducing the amount of code that you have to write is one of the primary goals for React Hook Form. To illustrate that, let's look at a very simple form of validation among some of the most popular form validation libraries.`,
    },
    zh: {
      title: "库代码比较",
      description: `减少您必须编写的代码量是React Hook Form的主要目标之一。 为了说明这一点，让我们来看看一些最流行的表单验证库中非常简单的验证形式。`,
    },
  },
  rendering: {
    en: {
      title: "Reduce Rendering",
      description: `Do you ever wonder how many component re-renders have been triggered by the user? React Hook Form embraces uncontrolled form validation to reduce unnecessary performance impact.`,
      totalReRender: "Total re-renders:",
    },
    jp: {
      title: "Reduce Rendering",
      description: `Do you ever wonder how many component re-renders have been triggered by the user? React Hook Form embraces uncontrolled form validation to reduce unnecessary performance impact.`,
      totalReRender: "Total re-renders:",
    },
    zh: {
      title: "减少Rendering",
      description: `你有没有想过用户触发了多少组件重新renders？ React Hook Form包含不受控制的窗体验证，以减少不必要的性能影响。`,
      totalReRender: "Total re-renders:",
    },
  },
  mount: {
    en: {
      title: "Faster Mounting",
      description: (
        <p>
          The following results demonstrate how long it took to render the
          components. Results are captured under a 6x CPU slow down on App start
          with the Chrome Dev Tools' performance tab. The running code is from
          the section above{" "}
          <a href="#codeComparison">Library Code Comparison</a>.
        </p>
      ),
      totalMount: "No. of mount(s)",
      totalChange: "No. of committing change(s)",
      totalTime: "Total time",
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> Want to see more intense
          performance tests?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            Check out the result of 1000 fields within a form here
          </a>
          .
        </>
      ),
    },
    jp: {
      title: "Faster Mounting",
      description: (
        <p>
          The following results demonstrate how long it took to render the
          components. Results are captured under a 6x CPU slow down on App start
          with the Chrome Dev Tools' performance tab. The running code is from
          the section above{" "}
          <a href="#codeComparison">Library Code Comparison</a>.
        </p>
      ),
      totalMount: "No. of mount(s)",
      totalChange: "No. of committing change(s)",
      totalTime: "Total time",
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> Want to see more intense
          performance tests?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            Check out the result of 1000 fields within a form here
          </a>
          .
        </>
      ),
    },
    zh: {
      title: "更快的安装",
      description: (
        <p>
          以下结果说明了render组件需要多长时间。 结果在6x
          CPU下捕获应用程序从Chrome DevTools的性能选项卡开始减速。
          运行的代码来自上面的<a href="#codeComparison">库代码</a>比较部分。
        </p>
      ),
      totalMount: "安装的次数(s)",
      totalChange: "提交更改的次数(s)",
      totalTime: "总时间",
      performanceTests: (
        <>
          希望看到更激烈的性能测试？
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            在这里查看表单中1000个字段的结果
          </a>
          。
        </>
      ),
    },
  },
  liveDemo: {
    en: {
      title: "Live Demo",
      description: (
        <>
          The following form demonstrates form validation in action. Each column
          represents what has been captured in the custom hook. You can also
          change fields in the form by clicking the <strong>EDIT</strong>{" "}
          button.
        </>
      ),
      submit: "Submit",
      watchTitle: "Watch",
      errorTitle: "Errors",
      touchedTitle: "Touched",
      watch: "Change input value to see watched values",
      error: "Validation errors will appear here",
      touched: "Touched fields will display here",
    },
    jp: {
      title: "现场演示",
      description: (
        <>
          The following form demonstrates form validation in action. Each column
          represents what has been captured in the custom hook. You can also
          change fields in the form by clicking the <strong>EDIT</strong>{" "}
          button.
        </>
      ),
      submit: "提出する",
      watchTitle: "見る",
      errorTitle: "エラー",
      touchedTitle: "触れた",
      watch: "Change input value to see watched values",
      error: "Validation errors will appear here",
      touched: "Touched fields will display here",
    },
    zh: {
      title: "现场演示",
      description: (
        <>
          下面的表单演示了表单验证的操作。 每列表示在自定义挂接中捕获的内容。 您也可以通过单击<strong>编辑</strong>按钮来更改窗体中的字段。
        </>
      ),
      submit: "提交",
      watchTitle: "观察",
      errorTitle: "错误",
      touchedTitle: "接触过的",
      watch: "更改输入值以查看观看的值",
      error: "验证错误将出现在这里",
      touched: "触摸的表格将显示在这里",
    },
  },
}

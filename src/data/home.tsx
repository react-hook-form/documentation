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
    zh: "React hook for form validation without the hassle",
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
      heading: "Find it useful and interesting?",
      description: `Form validation should be much simpler. React Hook Form will lead you to write less code and have better performance. Check out the Get Started section and learn more on the API documentation page.`,
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
        description: "",
      },
      {
        title: "HTML standard",
        description: `Leverage your existing HTML markup, and start validating your forms with constraint validation API.`,
      },
      {
        title: "Super Light",
        description: `Performance is important and package size matters. it is a tiny library and without any dependencies.`,
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
      title: "Library Code Comparison",
      description: `Reducing the amount of code that you have to write is one of the primary goals for React Hook Form. To illustrate that, let's look at a very simple form of validation among some of the most popular form validation libraries.`,
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
      title: "Reduce Rendering",
      description: `Do you ever wonder how many component re-renders have been triggered by the user? React Hook Form embraces uncontrolled form validation to reduce unnecessary performance impact.`,
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
          with the Chrome Dev Tools' performance tab.  The running code is from the section
          above <a href="#codeComparison">Library Code Comparison</a>.
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
          with the Chrome Dev Tools' performance tab.  The running code is from the section
          above <a href="#codeComparison">Library Code Comparison</a>.
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
      title: "Faster Mounting",
      description: (
        <p>
          The following results demonstrate how long it took to render the
          components. Results are captured under a 6x CPU slow down on App start
          with the Chrome Dev Tools' performance tab.  The running code is from the section
          above <a href="#codeComparison">Library Code Comparison</a>.
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
  },
}

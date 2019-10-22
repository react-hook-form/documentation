import * as React from "react"
import { Note } from "../styles/typography"

export default {
  title: {
    en: "FAQs",
    kr: "자주 묻는 질문",
    jp: "よくある質問",
    zh: "常见问题",
  },
  header: {
    en: {
      title: "FAQs",
      description: "frequently asked question.",
    },
    kr: {
      title: "FAQs",
      description: "frequently asked question.",
    },
    jp: {
      title: "よくある質問",
      description: "frequently asked question.",
    },
    zh: {
      title: "常见问题",
      description: "经常问的问题。",
    },
  },
  questions: {
    en: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              this repo link
            </a>
            .
          </p>
        ),
      },
      {
        title: "How to create an accessible input error and message?",
        description: (
          <p>
            React Hook Form is based on{" "}
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Uncontrolled Component
            </a>
            , which gives you the ability to build an accessible custom form
            easily.
          </p>
        ),
      },
      {
        title: "Does it work with Class Components?",
        description: (
          <>
            <p>
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
              longer term, we expect Hooks to be the primary way people write
              React components.
            </blockquote>
          </>
        ),
      },
      {
        title: "How to reset the form?",
        description: (
          <>
            <p>There are two methods to clear the form.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  This method does the same thing as clicking a form's reset
                  button, and only clears
                  <code>input/select/checkbox</code> values.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form's <code>reset</code> method will reset all
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "How to initialize form values?",
        description: (
          <p>
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
          </p>
        ),
      },
      {
        title: "What if you don't have access to ref?",
        description: (
          <>
            <p>
              You can actually <code>register</code> an input without a{" "}
              <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
              <code>setError</code> and <code>triggerValidation</code>.
            </p>

            <p>
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
            </p>
          </>
        ),
      },
      {
        title: "Browser Support?",
        description: (
          <>
            <p>React Hook Form support all major browsers.</p>

            <p>
              For legacy IE11 support, you can import react-hook-form IE 11
              version.
            </p>
          </>
        ),
      },
      {
        title: "Why is first keystroke is not working?",
        description: (
          <>
            <p>
              Double check if you are using <code>value</code> instead of{" "}
              <code>defaultValue</code>.
            </p>

            <p>
              React Hook Form is built based on uncontrolled input, which means
              you don't need to change input <code>value</code> via{" "}
              <code>state</code> by <code>onChange</code>. Hence you don't need{" "}
              <code>value</code> at all, in fact, you only need{" "}
              <code>defaultValue</code> for initial input value.
            </p>
          </>
        ),
      },
      {
        title: "Testing failed due to MutationObserver?",
        description: (
          <p>
            If you have difficulty during testing and the issue was caused by{" "}
            <code>MutationObserver</code>. Make sure you install{" "}
            <code>mutationobserver</code> and import this package in your test{" "}
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            .
          </p>
        ),
      },
    ],
    kr: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              this repo link
            </a>
            .
          </p>
        ),
      },
      {
        title: "How to create an accessible input error and message?",
        description: (
          <p>
            React Hook Form is based on{" "}
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Uncontrolled Component
            </a>
            , which gives you the ability to build an accessible custom form
            easily.
          </p>
        ),
      },
      {
        title: "Does it work with Class Components?",
        description: (
          <>
            <p>
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
              longer term, we expect Hooks to be the primary way people write
              React components.
            </blockquote>
          </>
        ),
      },
      {
        title: "How to reset the form?",
        description: (
          <>
            <p>There are two methods to clear the form.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  This method does the same thing as clicking a form's reset
                  button, and only clears
                  <code>input/select/checkbox</code> values.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form's <code>reset</code> method will reset all
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "How to initialize form values?",
        description: (
          <p>
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
          </p>
        ),
      },
      {
        title: "What if you don't have access to ref?",
        description: (
          <>
            <p>
              You can actually <code>register</code> an input without a{" "}
              <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
              <code>setError</code> and <code>triggerValidation</code>.
            </p>

            <p>
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
            </p>
          </>
        ),
      },
      {
        title: "Browser Support?",
        description: (
          <>
            <p>React Hook Form support all major browsers.</p>

            <p>
              For legacy IE11 support, you can import react-hook-form IE 11
              version.
            </p>
          </>
        ),
      },
      {
        title: "Why is first keystroke is not working?",
        description: (
          <>
            <p>
              Double check if you are using <code>value</code> instead of{" "}
              <code>defaultValue</code>.
            </p>

            <p>
              React Hook Form is built based on uncontrolled input, which means
              you don't need to change input <code>value</code> via{" "}
              <code>state</code> by <code>onChange</code>. Hence you don't need{" "}
              <code>value</code> at all, in fact, you only need{" "}
              <code>defaultValue</code> for initial input value.
            </p>
          </>
        ),
      },
      {
        title: "Testing failed due to MutationObserver?",
        description: (
          <p>
            If you have difficulty during testing and the issue was caused by{" "}
            <code>MutationObserver</code>. Make sure you install{" "}
            <code>mutationobserver</code> and import this package in your test{" "}
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            .
          </p>
        ),
      },
    ],
    jp: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              this repo link
            </a>
            .
          </p>
        ),
      },
      {
        title: "How to create an accessible input error and message?",
        description: (
          <p>
            React Hook Form is based on{" "}
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Uncontrolled Component
            </a>
            , which gives you the ability to build an accessible custom form
            easily.
          </p>
        ),
      },
      {
        title: "Does it work with Class Components?",
        description: (
          <>
            <p>
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
              longer term, we expect Hooks to be the primary way people write
              React components.
            </blockquote>
          </>
        ),
      },
      {
        title: "How to reset the form?",
        description: (
          <>
            <p>There are two methods to clear the form.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  This method does the same thing as clicking a form's reset
                  button, and only clears
                  <code>input/select/checkbox</code> values.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form's <code>reset</code> method will reset all
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "How to initialize form values?",
        description: (
          <p>
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
          </p>
        ),
      },
      {
        title: "What if you don't have access to ref?",
        description: (
          <>
            <p>
              You can actually <code>register</code> an input without a{" "}
              <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
              <code>setError</code> and <code>triggerValidation</code>.
            </p>

            <p>
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
            </p>
          </>
        ),
      },
      {
        title: "Browser Support?",
        description: (
          <>
            <p>React Hook Form support all major browsers.</p>

            <p>
              For legacy IE11 support, you can import react-hook-form IE 11
              version.
            </p>
          </>
        ),
      },
      {
        title: "Why is first keystroke is not working?",
        description: (
          <>
            <p>
              Double check if you are using <code>value</code> instead of{" "}
              <code>defaultValue</code>.
            </p>

            <p>
              React Hook Form is built based on uncontrolled input, which means
              you don't need to change input <code>value</code> via{" "}
              <code>state</code> by <code>onChange</code>. Hence you don't need{" "}
              <code>value</code> at all, in fact, you only need{" "}
              <code>defaultValue</code> for initial input value.
            </p>
          </>
        ),
      },
      {
        title: "Testing failed due to MutationObserver?",
        description: (
          <p>
            If you have difficulty during testing and the issue was caused by{" "}
            <code>MutationObserver</code>. Make sure you install{" "}
            <code>mutationobserver</code> and import this package in your test{" "}
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            .
          </p>
        ),
      },
    ],
    zh: [
      {
        title: "React Hook Form的性能",
        description: (
          <p>
            性能是构建此自定义挂钩(Hook)的主要目标之一。 React Hook
            Form依赖于不受控制的组件，因此<code>register</code>函数发生在
            <code>ref</code>的原因。
            这种方法将减少由于用户输入或值改变而发生的重新rendering数量。
            组件安装到页面也更快，因为它们不受控制。
            对于安装速度，我已经完成了一个快速比较测试，
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              你可以通过这个回购链接参考
            </a>
            。
          </p>
        ),
      },
      {
        title: "如何创建一个可访问的输入错误和消息？",
        description: (
          <p>
            React Hook Form基于不受控制
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              (Uncontrolled Component)
            </a>
            的组件，它使您能够轻松构建可访问的自定义表单。
          </p>
        ),
      },
      {
        title: "它是否与Class类组件一起使用？",
        description: (
          <>
            <p>不, 但是你可以在它周围构建一个包装并在你的类组件中使用。</p>

            <blockquote>
              您不能在类组件内部使用钩子，但您绝对可以在单个树中将类和函数组件与钩子混合。
              组件是一个类还是一个使用Hook的函数是该组件的实现细节。
              从长远来看，我们预计钩子是人们编写React组件的主要方式。
            </blockquote>
          </>
        ),
      },
      {
        title: "如何重置表单？",
        description: (
          <>
            <p>有两种方法。</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  此方法与单击表单的重置按钮相同，并且只清除
                  <code>input/select/checkbox</code>框值。
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook
                  Form的重置方法将重置所有字段值，并且还将清除表单中的所有错误。
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "如何初始化值？",
        description: (
          <p>
            React Hook Form依赖于不受控制的组件。
            对于不受控制的组件，可以为单个字段指定默认值
            <code>defaultValue</code>或默认选中的值<code>defaultChecked</code>。
            但是，钩子本身也提供了一种更简单的方法来初始化所有输入值。
            下面的例子:
          </p>
        ),
      },
      {
        title: "如何分享参考用法?",
        description: (
          <p>
            React Hook Form需要<code>ref</code>来收集输入值，但是，您可能需要将
            <code>ref</code>用于其他目的（例如，如果您想要使用它）。
            滚动到视图中）。 以下示例将向您展示如何。
          </p>
        ),
      },
      {
        title: "如果你没有访问ref怎么办？",
        description: (
          <>
            <p>
              您实际上可以在没有<code>ref</code>的情况下注册
              <code>register</code>输入。 事实上，您可以手动设置值，设置错误
              <code>setError</code>和触发验证<code>triggerValidation</code>。
            </p>

            <p>
              <Note>注意:</Note> 由于<code>ref</code>尚未注册，因此React Hook
              Form将无法将事件侦听器注册到输入。
              这意味着您将不得不手动更新值和错误。
            </p>
          </>
        ),
      },
      {
        title: "浏览器支持?",
        description: (
          <>
            <p>React Hook Form支持所有主流浏览器。</p>

            <p>对于传统的IE11支持，您可以从IE11版本导入。</p>
          </>
        ),
      },
      {
        title: "为什么第一次按键不起作用？",
        description: (
          <>
            <p>
              仔细检查是否使用值<code>value</code>而不是默认值
              <code>defaultValue</code>。
            </p>

            <p>
              React Hook Form是基于不受控制的输入构建的，这意味着您不需要通过
              <code>onChange</code>更改输入值。
              因此，您根本不需要值，事实上，您只需要初始输入值<code>value</code>
              的默认值<code>defaultValue</code>。
            </p>
          </>
        ),
      },
      {
        title: "因MutationObserver测试失败?",
        description: (
          <p>
            如果您在测试过程中遇到困难，并且问题是由
            <code>MutationObserver</code>引起的。 确保安装
            <code>MutationObserver</code>并在测试设置中导入此包
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            文件。
          </p>
        ),
      },
    ],
  },
}

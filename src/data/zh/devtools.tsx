import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "开发工具",
  description: "React Hook Form 开发工具可帮助验证您的表单。",
  install: "安装",
  step1: (
    <>
      <b className={typographyStyles.note}>步骤 1: </b>安装{" "}
      <code>@hookform/devtools</code>作为开发依赖包.
    </>
  ),
  step2: (
    <>
      <b className={typographyStyles.note}>步骤 2: </b>与您的React集成
      App就像将组件导入到您的App / Form， 然后加入<code>control</code>
      到其开发工具组件中。
    </>
  ),
  demoDescription: "您可以与以下演示交互，以查看实际的开发工具。",
  function: "功能性",
  functionDetail: (
    <>
      <li>
        <p>读取输入和整个表单状态。</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>注意: </b>因为RHF基于
          不受控制的输入，<strong>update</strong>
          按钮将刷新DevTool读取最新的输入值和表单状态。
        </p>
      </li>
      <li>
        <p>输入或表单有效或无效时的视觉反馈</p>
      </li>
      <li>
        <p>搜索注册的输入以及自定义注册的组件。</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>注意: </b>
          您可以轻松找通过点击<strong>Native</strong>
          按钮进行输入。这会很有用在处理大型表单时。
        </p>
      </li>
    </>
  ),
  features: [
    {
      title: "基于React",
      description:
        "DevTool本身是由React构建的，因此您可以轻松地与React应用程序集成。",
    },
    {
      description:
        "React Hook Form致力于在使用React构建表单方面提供丰富的经验。此工具将帮助调试表单。",
    },
    {
      title: "开源",
      description: "DevTools是一个开源项目，因此我们所有人都可以一起改善体验。",
    },
  ],
}

import * as React from "react"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import SideMenu from "./SideMenu"
import { useStateMachine } from "little-state-machine"
import CodeArea from "./CodeArea"

const links = [
  {
    title: "NestedValue",
  },
  {
    title: "Resolver",
  },
  {
    title: "OnSubmit",
  },
  {
    title: "Control",
  },
]

const enLinks = [
  {
    title: "NestedValue",
  },
  {
    title: "Resolver",
  },
  {
    title: "OnSubmit",
  },
  {
    title: "Control",
  },
]

export default ({ defaultLang }: { defaultLang: string }) => {
  const {
    state,
    state: { language },
  } = useStateMachine()
  const [activeIndex, setActiveIndex] = React.useState(0)
  // @ts-ignore
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <div className={containerStyles.container}>
      <section>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          TS Support
        </h1>
        <p className={typographyStyles.subHeading}>
          Better TS support is in our mission.
        </p>
      </section>

      <div className={containerStyles.wrapper}>
        <SideMenu
          isStatic
          version={6}
          links={links}
          activeIndex={activeIndex}
          enLinks={enLinks}
          goToSection={() => {}}
          currentLanguage={currentLanguage}
        />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>NestedValue</h2>
            </code>

            <p>
              This type will support situation when form values and errors's
              data shape is not matched.
            </p>

            <CodeArea
              rawData={`import { useForm, NestedValue } from 'react-hook-form';

type FormValues = {
  key1: string;
  key2: number;
  key3: NestedValue<{
    key1: string;
    key2: number;
  }>;
  key4: NestedValue<string[]>
};

const { errors } = useForm<FormValues>();

errors?.key1?.message // no type error
errors?.key2?.message // no type error
errors?.key3?.message // no type error
errors?.key4?.message // no type error`}
            />
          </section>

          <hr />

          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>Resolver</h2>
            </code>

            <CodeArea
              rawData={`import { useForm, NestedValue } from 'react-hook-form';

type FormValues = {
  key1: string;
  key2: number;
  key3: NestedValue<{
    key1: string;
    key2: number;
  }>;
  key4: NestedValue<string[]>
};

const { errors } = useForm<FormValues>();

errors?.key1?.message // no type error
errors?.key2?.message // no type error
errors?.key3?.message // no type error
errors?.key4?.message // no type error`}
            />
          </section>

          <hr />

          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>OnSubmit</h2>
            </code>

            <CodeArea
              rawData={`import { useForm, NestedValue } from 'react-hook-form';

type FormValues = {
  key1: string;
  key2: number;
  key3: NestedValue<{
    key1: string;
    key2: number;
  }>;
  key4: NestedValue<string[]>
};

const { errors } = useForm<FormValues>();

errors?.key1?.message // no type error
errors?.key2?.message // no type error
errors?.key3?.message // no type error
errors?.key4?.message // no type error`}
            />
          </section>

          <hr />

          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>Control</h2>
            </code>

            <CodeArea
              rawData={`import { useForm, NestedValue } from 'react-hook-form';

type FormValues = {
  key1: string;
  key2: number;
  key3: NestedValue<{
    key1: string;
    key2: number;
  }>;
  key4: NestedValue<string[]>
};

const { errors } = useForm<FormValues>();

errors?.key1?.message // no type error
errors?.key2?.message // no type error
errors?.key3?.message // no type error
errors?.key4?.message // no type error`}
            />
          </section>
        </main>
      </div>
    </div>
  )
}

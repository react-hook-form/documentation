import * as React from "react"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import Link from "../../styles/link"
import { Note } from "../../styles/typography"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import smartForm from "../../components/codeExamples/smartForm"
import { CodeHeading } from "../../components/ApiPage"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import { Link as PageLink } from "gatsby"

export default {
  title: "Erweiterte Anwendung",
  header: {
    title: "Erweitert",
    description:
      "Bauen von komplexen und benutzerfreundlichen Formularen mit React Hook Form.",
  },
  controlledMixedWithUnControlled: {
    title: "Controlled vermischt mit Uncontrolled Komponenten",
    description: (
      <p>
        React Hook Form verwendet unkontrollierte Komponenten und ist auch mit
        kontrollierten Komponenten kompatibel. Die meisten UI Libraries
        unterstützen nur kontrollierte Komponenten, zum Beispiel{" "}
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>{" "}
        und{" "}
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd
        </a>
        . Mit React Hook Form ist das re-rendern von kontrollierten Komponenten
        ebenfalls optimiert. Hier ist ein Beispiel, in dem kontrollierte und
        unkontrollierte Komponenten gemeinsam gezeigt werden.
      </p>
    ),
  },
  errorMessage: {
    title: "Fehlermeldung",
    description: (
      <p>
        Fehlermeldungen bieten visuelles Feedback für Nutzer, wenn es mit deren
        Eingabe ein Problem gibt. In React Hook Form ist das Objekt{" "}
        <code>errors</code> verfügbar, welches die momentanen Fehlermeldungen
        beinhält. Es gibt verschiedene Möglichkeiten um die Anzeige von Fehlern
        zu verbessern.
      </p>
    ),
    register: (
      <>
        Sie können ihre eigene Fehlermeldung während der Registrierung (
        <code>register</code>) angeben, indem Sie das <code>message</code>
        Attribut setzen. Eg:
      </>
    ),
    component: "Create a ErrorMessage component to help your print out error.",
    optionalChaining: (
      <>
        <p>
          Der{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            optional chaining
          </a>{" "}
          Operator <code>?.</code> erlaubt das Lesen von Fehlern ohne Sorgen um
          Fehler durch lesen von <code>null</code> oder <code>undefined</code>.
          or <code>undefined</code>.
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
    get: (
      <p>
        Wenn Ihr Projekt{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>
        verwendet, dann können Sie dessen{" "}
        <code>
          <a
            href="https://lodash.com/docs/4.17.15#get"
            target="_blank"
            rel="noopener noreferrer"
          >
            get
          </a>
        </code>{" "}
        Funktion verwenden. Eg:
        <br />
        <br />
        <code>{`get(errors, 'firstName.message')`}</code>
      </p>
    ),
  },
  accessibility: {
    title: "Nutzerfreundlichkeit (Accessability - A11y)",
    description: (
      <>
        <p>
          React Hook Form bietet Support für native Formularvalidierung, welche
          Ihnen erlaubt ihre eigenen Validierungsregeln zu erstellen, da
          Formulare meist mit selbst erstelltem Design und Layout verwendet
          werden. Es ist unsere Aufgabe, Formulare benutzerfreundlich zu machen.
        </p>

        <p>
          Das folgende Beispiel implementiert funktionale Validierung - die
          Nutzerfreundlichkeit kann hingegen verbessert werden.
        </p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          Das folgende Beispiel ist eine verbessert Version, die
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            target="_blank"
          >
            ARIA
          </a>{" "}
          verwendet.
        </p>
        <CodeArea rawData={accessibleCodeFinal} />

        <p>
          Nach dieser Verbesserung wird ein screen reader folgendes Sagen:{" "}
          <i>“Name, edit, invalid entry, This is required.”</i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "Formular auf mehreren Seiten",
    description: (
      <>
        <p>
          Es ist Gang und Gebe Informationen über verschiedene Seiten und
          Sektionen hinweg zu sammeln. Wir empfehlen eine state management
          library zu verwenden um Nutzereingabe über Seiten hinweg zu speichern.
          In diesem Beispiel werden wir{" "}
          <Link
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
          >
            little state machine
          </Link>{" "}
          als unsere state management library verwenden (Sie können diese durch{" "}
          <Link href="https://github.com/reduxjs/redux" target="_blank">
            redux
          </Link>{" "}
          ersetzen, wenn Sie damit vertrauter sind).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <Note>Schritt 1:</Note> Routen und Store aufsetzen.
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Schritt 2:</Note> Seiten erstellen und Daten abfragen. Daten zum
          Store senden und zur nächsten Formularseite gehen.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Schritt 3:</Note> Senden Sie die finalen Daten oder zeigen Sie
          sie an.
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          Wenn Sie diesem Ablauf folgen, sollten Sie in der Lage sein ein
          Formular auf mehrere Seiten aufzuteilen.
        </p>
      </>
    ),
  },
  smartForm: {
    title: "Kluge Formular Komponente",
    description: (
      <>
        <p>
          Die Idee ist, möglichst einfach Formulare zusammenzubauen. Wir werden
          uns die <code>Form</code> komponente genauer anschauen.
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>Sehen wir uns an was in den einzelnen Komponenten passiert.</p>

        <CodeHeading>
          <h2>Form</h2>
        </CodeHeading>

        <p>
          Die <code>Form</code> Komponente sorgt dafür, dass alle
          <code>react-hook-form</code> Methoden in die Kinderkomponenten
          eingefügt werden.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <CodeHeading>
          <h2>Input / Select</h2>
        </CodeHeading>

        <p>
          Die Aufgabe dieser Eingabekomponenten ist es, die unterliegende
          Komponente mit <code>react-hook-form</code> zu verknüpfen.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          Mit den von der <code>Form</code> Komponente eingefügten
          <code>react-hook-form</code> props können einfach komplexe Formulare
          erstellt werden.
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "Field Arrays",
    description: (
      <>
        <p>
          Dies ist eine der besten Eigenschaften von React Hook Form: anstatt
          Komponenten zu importieren (wie bei anderen Libraries), kann
          bestehendes HTML verwendet werden um diese Funktionalität zu
          implementieren. Der Schlüssel liegt in dem <code>name</code> Attribut.
          In React Hook Form representiert das <code>name</code> Attribut die
          Datenstruktur.
        </p>

        <p>
          Das folgende Beispiel zeigt wie Field Arrays erstellt werden können,
          indem man das <code>name</code> Attribut verändert.
        </p>

        <p>
          <Note>Notiz:</Note> Wenn Ihre Applikation Funktionalität wie: Löschen,
          Einfügen, Anhängen, ... braucht, dann ist{" "}
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
            target="_blank"
            rel="noreferrer noopener"
          >
            hier der Link für die Implementierung.
          </a>{" "}
          mit <PageLink to={"/api#Controller"}>Controller</PageLink>.
        </p>
      </>
    ),
  },
  schema: {
    title: "Schema Validierung",
    description: (
      <>
        <p>
          React Hook Form unterstützt schema-basierte Formularvalidierung mit{" "}
          <a href="https://github.com/jquense/yup" target="_blank">
            Yup
          </a>
          , indem das Schema als <code>validationSchema</code>-Attribut an{" "}
          <a href="/api#useForm">useForm</a> übergeben wird. React Hook Form
          validiert die Eingabe gegen das Schema und gibt entweder
          <a href="/api#errors">errors</a> oder ein valides Resultat zurück.
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <Note>Schritt 1:</Note> Installieren Sie <code>Yup</code>.
        </p>
      </>
    ),
    step2: (
      <p>
        <Note>Schritt 2:</Note> Bereiten Sie ihr Schema zur Validierung vor und
        registrieren Sie ihre Eingabefelder mit React Hook Form.
      </p>
    ),
  },
  connectForm: {
    title: "Formular verbinden",
    description: (
      <p>
        Wenn wir Formulare bauen, können unsere Eingabefelder tief verschachtelt
        liegen. Hier kann <a href="/api#FormContext">FormContext</a> sehr
        hilfreich sein. Die Developer Experience kann jedoch noch weiter
        verbessert werden, indem man eine <code>ConnectForm</code> Komponente
        erstellt, die React's{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>{" "}
        verwendet. Der Vorteil ist, dass ein Input sich jetzt von überall aus
        verbinden kann.
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "Bedingte kontrollierte Komponente",
    description: (
      <>
        <p>
          React Hook Form macht die Verwendung von bedingten unkontrollierten
          Feldern sehr einfach, da das Feld automatisch
          <code>unregister</code> aufruft, sobald es nicht mehr gerendered wird
          -{" "}
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            hier ist ein Beispiel
          </a>{" "}
          für dieses Verhalten. Jedoch ist dies nicht der Fall für kontrolliete
          Komponenten, da deren <code>ref</code> nicht registriert wurde. Hier
          kann man folgendes tun:
        </p>
        <ul>
          <li>
            <p>
              Importieren Sie <Link to="/api#Controller">Controller</Link> um
              Ihre Komponente zu wrappen und lassen Sie sie das Registrieren und
              Unregistrieren managen
            </p>
          </li>
          <li>
            <p>
              Verwenden Sie
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>{" "}
              mit eigener Registrierungslogik
            </p>
          </li>
        </ul>
        <p>Hier sind die Beispiele:</p>
      </>
    ),
  },
  formContext: {
    title: "FormContext Performance",
    description: (
      <p>
        React Hook Form's{" "}
        <PageLink to="/api/#FormContext">FormContext</PageLink> basiert auf{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          React's Context
        </a>{" "}
        API. Es löst das Problem, dass props nicht manuell nach unten gepassed
        werden müssen. Dies verursacht einen rerender an den Kind-Komponenten,
        aber Hier kann unsere App mittels des untenstehenden Beispiels optimiert
        werden.
      </p>
    ),
  },
}

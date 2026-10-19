import Seo from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import StarRepo from "../components/StarRepo"
import cards from "../styles/cards.module.css"
import styles from "./media.module.css"

interface Asset {
  name: string
  description: string
  file: string
  variant: "lockup" | "mark"
  surface: "navy" | "black" | "light"
}

const LOGO_PATH = "/images/logo"

const assets: Asset[] = [
  {
    name: "Logo",
    description: "Full lockup on navy. Best for banners and social cards.",
    file: "react-hook-form-logo",
    variant: "lockup",
    surface: "navy",
  },
  {
    name: "Logo, monochrome",
    description: "Full lockup on black, for single-color contexts.",
    file: "react-hook-form-logo-grey",
    variant: "lockup",
    surface: "black",
  },
  {
    name: "Icon",
    description: "The mark on its own. Use it for avatars and favicons.",
    file: "react-hook-form-logo-only",
    variant: "mark",
    surface: "light",
  },
  {
    name: "Icon, monochrome",
    description: "Neutral grey mark for single-color contexts.",
    file: "react-hook-form-logo-only-grey",
    variant: "mark",
    surface: "light",
  },
]

const colors = [
  { name: "Pink", hex: "#EC5990" },
  { name: "Navy", hex: "#07122A" },
  { name: "White", hex: "#FFFFFF" },
]

const DownloadIcon = (
  <svg viewBox="0 0 16 16" aria-hidden>
    <path d="M2.75 14A1.75 1.75 0 011 12.25v-2.5a.75.75 0 011.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25v-2.5a.75.75 0 011.5 0v2.5A1.75 1.75 0 0113.25 14H2.75zM7.25 7.69V1.75a.75.75 0 011.5 0v5.94l1.97-1.97a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 6.78a.75.75 0 111.06-1.06l1.97 1.97z" />
  </svg>
)

const Media = () => {
  return (
    <Layout>
      <Seo
        title="Media"
        description="Logos, images, and brand assets for React Hook Form."
      />
      <div className={cards.page}>
        <PageHeader
          eyebrow="Media"
          title="Brand assets"
          lead="Logos and colors for articles, talks and projects that feature React Hook Form."
        />

        <main>
          <section aria-labelledby="logos" className={styles.section}>
            <h2 id="logos" className={styles.sectionLabel}>
              Logos
            </h2>
            <ul className={styles.assets}>
              {assets.map(({ name, description, file, variant, surface }) => (
                <li key={file} className={styles.asset}>
                  <div className={`${styles.preview} ${styles[surface]}`}>
                    <img
                      src={`${LOGO_PATH}/${file}.svg`}
                      alt={`React Hook Form ${name.toLowerCase()}`}
                      className={styles[variant]}
                    />
                  </div>
                  <div className={styles.assetBody}>
                    <div>
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                    <div className={styles.downloads}>
                      {["svg", "png"].map((ext) => (
                        <a
                          key={ext}
                          href={`${LOGO_PATH}/${file}.${ext}`}
                          download
                          className={styles.download}
                          aria-label={`Download ${name} as ${ext.toUpperCase()}`}
                        >
                          {DownloadIcon}
                          {ext.toUpperCase()}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="colors" className={styles.section}>
            <h2 id="colors" className={styles.sectionLabel}>
              Colors
            </h2>
            <ul className={styles.colors}>
              {colors.map(({ name, hex }) => (
                <li key={hex} className={styles.color}>
                  <span className={styles.swatch} style={{ background: hex }} />
                  <span className={styles.colorName}>{name}</span>
                  <code>{hex}</code>
                </li>
              ))}
            </ul>
          </section>

          <StarRepo />
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export default Media

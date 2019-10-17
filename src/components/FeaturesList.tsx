import styled from "styled-components"
import * as React from "react"
import { Title } from "../styles/typography"
import breakpoints from "../styles/breakpoints"
import { AnimateGroup, AnimateKeyframes } from "react-simple-animate"
import home from "../data/home"
import generic from "../data/generic"

const FeaturesContent = styled.section`
  text-align: center;

  & h3 {
    font-weight: 300;
    font-size: 20px;
    margin-top: 10px;
  }

  & svg {
    fill: white;
    width: 50px;
    display: block;
    margin: 0 auto;
    height: 60px;
  }

  & > div {
    padding-bottom: 30px;

    @media ${breakpoints.fromXlargeScreen} {
      padding-bottom: 0;
    }
  }

  & > div > div {
    transform: scale(0);
  }

  @media ${breakpoints.fromMediumScreen} {
    & h3 {
      font-size: 22px;
    }

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    max-width: 1024px;
    margin: 20px auto 30px;
  }

  @media ${breakpoints.fromXlargeScreen} {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 40px;
    max-width: 1200px;
  }
`

const Features = styled.div`
  margin-top: -60px;

  @media ${breakpoints.fromMediumScreen} {
    margin-top: 60px;
  }

  & > h2 {
    margin-bottom: 30px;

    @media ${breakpoints.fromMediumScreen} {
      max-width: 450px;
      margin: 0 auto 20px;
    }
  }
`

const props = {
  keyframes: [
    { 0: "opacity: 0; transform: scale(0)" },
    { 50: "opacity: 0.3; transform: scale(1.3)" },
    { 70: "transform: scale(0.8)" },
    { 100: "transform: scale(1)" },
  ],
  fillMode: "forwards" as "forwards",
  duration: 0.3,
}

export default function FeaturesList({
  isPlayFeature,
  currentLanguage,
}: {
  isPlayFeature: boolean
  currentLanguage: string
}) {
  return (
    <Features>
      <AnimateGroup play={isPlayFeature}>
        <Title>{generic.features[currentLanguage]}</Title>
        <FeaturesContent>
          <div id="featureLast">
            <AnimateKeyframes {...props} sequenceIndex={0}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  width: 45,
                  height: 45,
                  border: "2px solid white",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 21,
                  marginTop: 4,
                }}
              >
                <code
                  style={{ lineHeight: "19px", fontSize: "15px" }}
                >{`</>`}</code>
              </div>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][0].title}</h3>
            <p>{home.features[currentLanguage][0].description}</p>
          </div>

          <div>
            <AnimateKeyframes {...props} sequenceIndex={1}>
              <svg viewBox="0 0 512 512">
                <title>{home.features[currentLanguage][1].title}</title>
                <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6" />
                <path
                  fill="#fff"
                  d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"
                />
                <path fill="#fff" d="M256 480.5V131H404.3L376 447" />
                <path
                  fill="#0e101c"
                  d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
                />
                <path
                  fill="#0e101c"
                  d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"
                />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][1].title}</h3>
            <p>{home.features[currentLanguage][1].description}</p>
          </div>

          <div>
            <AnimateKeyframes {...props} sequenceIndex={2}>
              <svg viewBox="0 0 100 125">
                <title>{home.features[currentLanguage][2].title}</title>
                <path d="M5,92.196c0,0,9.342-8.233,12.888-11.816c0.097-0.1,0.2-0.208,0.297-0.312c10.855,4.003,32.667-5.268,52.239-22.641  c0.577-0.497,0.479-0.28,1.024-0.795l-20.956-4.658l27.153-1.737l0.293-0.246C98.634,30.786,94.702,7.803,94.702,7.803  s-25.642,0.3-46.966,12.71l-1.578,20.272l-5.047-15.733c-1.352,1-1.791,1.295-3.083,2.421c-4.546,4.005-7.771,7.382-11.265,11.511  l2.401,15.721l-7.488-9.461c-9.515,13.243-12.903,25.574-7.898,31.79c-0.565,0.749-1.129,1.548-1.689,2.392  C7.368,86.518,5,92.196,5,92.196z M17.442,76.457c0,0,26.146-40.739,70.729-58.628C88.171,17.829,47.99,39.296,17.442,76.457z" />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][2].title}</h3>
            <p>{home.features[currentLanguage][2].description}</p>
          </div>

          <div>
            <AnimateKeyframes {...props} sequenceIndex={3}>
              <svg viewBox="0 0 24 30" x="0px" y="0px">
                <title>{home.features[currentLanguage][3].title}</title>
                <path d="M20.87469,10.47565a9.00465,9.00465,0,1,0-10.399,10.399A8.99479,8.99479,0,0,0,20.87469,10.47565ZM18.669,16.40247a1.9419,1.9419,0,0,1-2.5022.62738,8.94432,8.94432,0,0,0-8.33319-.00019,1.94287,1.94287,0,0,1-2.50366-.6289A7.95274,7.95274,0,0,1,4.09424,10.761,8.00112,8.00112,0,0,1,20,12,7.92283,7.92283,0,0,1,18.669,16.40247Zm-1.81543-9.256a.49983.49983,0,0,1,0,.707l-3.90271,3.90271A.96262.96262,0,0,1,13,12a1,1,0,1,1-1-1,.96262.96262,0,0,1,.24377.04919l3.90271-3.90271A.49983.49983,0,0,1,16.85352,7.14648Z" />
              </svg>
            </AnimateKeyframes>

            <h3>{home.features[currentLanguage][3].title}</h3>
            <p>{home.features[currentLanguage][3].description}</p>
          </div>

          <div>
            <AnimateKeyframes {...props} sequenceIndex={4}>
              <svg viewBox="0 0 100 125">
                <title>{home.features[currentLanguage][4].title}</title>
                <path d="M95.934,26.48l-3.713,8.296c-1.01,1.928-2.794,3.025-5.35,3.293h-1.395  c-1.708-0.105-3.567-0.14-5.577-0.105c-2.429,0.395-4.59,0.912-6.483,1.551c-1.511,0.5-3.027,0.576-4.55,0.227  c-0.615-0.174-1.487-0.512-2.614-1.011c-0.418-0.209-1.487-0.931-3.207-2.162c-1.789-1.29-3.485-2.329-5.089-3.119  c-1.405-0.768-4.101-2.046-8.087-3.835c-2.277-1.104-3.753-2.097-4.426-2.979c-0.663-0.895-0.75-1.976-0.262-3.242  c0.267-0.72,0.808-1.255,1.621-1.604c1.138-0.581,2.498-0.535,4.079,0.14c1.904,0.86,3.224,1.453,3.956,1.778  c1.29,0.581,3.317,1.325,6.082,2.23c0.942,0.291,1.883,0.489,2.823,0.593h1.203l-1.08-0.488c-6.356-2.916-10.533-4.799-12.531-5.647  c-1.952-0.813-3.643-0.941-5.072-0.382c-1.383,0.581-2.335,1.417-2.858,2.509c-0.279,0.616-0.471,1.447-0.575,2.492  c-0.744-0.046-2.26-0.111-4.549-0.192c-4.799,2.313-7.401,3.544-7.808,3.695c-0.941,0.314-1.906,0.488-2.893,0.523  c-1.081-0.024-1.876-0.216-2.388-0.576c-0.604-0.255-1.034-0.895-1.29-1.917c-0.175-1.047,0.737-2.179,2.736-3.399l10.596-6.867  c5.101-0.603,10.08-1.423,14.937-2.457c1.068-0.244,2.103-0.145,3.102,0.296c3.115,1.604,6.659,3.23,10.632,4.88  c1.977,0.813,3.887,1.575,5.734,2.284c3.277,1.057,6.024,1.667,8.244,1.83h0.018c2.439,0.023,7.784-0.941,16.034-2.894  C98.606,19.631,98.606,21.717,95.934,26.48z" />
                <path d="M25.73,31.831c3.405,5.019,6.298,10.091,8.68,15.215  c3.764,8.168,5.49,15.047,5.176,20.636c-0.058,0.302-0.209,0.604-0.453,0.906c-0.348,0.384-0.604,0.61-0.767,0.68  c-4.276,1.371-8.511,1.731-12.706,1.081c-6.309-1.139-11.741-4.619-16.295-10.439c0.825-7.576,2.347-13.485,4.566-17.726  l2.962-4.113C19.567,35.154,22.512,33.075,25.73,31.831z" />
                <path d="M79.011,48.388c-0.709-0.917-1.587-1.476-2.632-1.672  c-9.572,0.235-14.992-1.101-16.261-4.009c-2.406-5.798-6.397-9.499-11.974-11.102c-5.577-1.592-11.648-0.93-18.213,1.986  c2.893,4.613,5.287,9.132,7.18,13.56c3.509,7.878,5.072,14.617,4.688,20.218c0,1.022-0.389,1.992-1.167,2.91  c-0.686,0.93-1.511,1.546-2.475,1.849c-3.01,1.01-7.129,1.301-12.357,0.871c-5.24-0.442-10.904-3.167-16.993-8.175  c-1.385,6.83-2.799,11.271-4.244,13.324c14.306,8.29,28.217,12.767,41.733,13.429c2.091-7.355,3.184-11.137,3.277-11.346  c0.523-1.36,0.837-2.133,0.941-2.318c0.244-0.406,0.546-0.784,0.906-1.133c0.789-0.778,1.69-1.243,2.702-1.395  c5.959-0.813,11.095-2.66,15.406-5.542c6.519-4.321,9.997-10.521,10.439-18.597C80.063,50.224,79.742,49.271,79.011,48.388z   M53.181,50.445c-0.686,0.674-1.51,1.01-2.475,1.01c-0.988,0-1.818-0.336-2.493-1.01c-0.685-0.674-1.028-1.505-1.028-2.492  c0-0.977,0.343-1.802,1.028-2.475c0.674-0.674,1.504-1.012,2.493-1.012c0.965,0,1.789,0.337,2.475,1.012  c0.675,0.673,1.012,1.498,1.012,2.475C54.192,48.939,53.855,49.771,53.181,50.445z" />
              </svg>
            </AnimateKeyframes>
            <h3>{home.features[currentLanguage][4].title}</h3>
            <p>{home.features[currentLanguage][4].description}</p>
          </div>
        </FeaturesContent>
      </AnimateGroup>
    </Features>
  )
}

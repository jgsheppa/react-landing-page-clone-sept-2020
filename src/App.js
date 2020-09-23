/** @jsx jsx */
/** @jsxFrag React.Fragment */
/*eslint-disable no-unused-vars*/
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import morphocodeLogo from './images/morphocode-logo.png';
import exploringCities from './images/morphocode-exploring-cities.png';
import illustrationWork from './images/morphocode-illustration-workflow.png';
import illustrationAcademy from './images/morphocode-illustration-academy.png';
import interactiveTools from './images/morphocode-interactive-tools-cover-500x300.jpg';
import designMockUps from './images/morphocode-explorer-design-mock-ups-web-500x300.png';
import movementPatternsMunich from './images/morphocode-personal-movement-patterns-munich-500x300.jpg';
import fiveMinuteWalk from './images/featured-8-500x300.png';
import melbournePedestrian from './images/morphocode-melbourne-pedestrian-count-featured-500x300.png';
import bestAmericanInfographics from './images/the-best-american-infographics-2015-cover-featured-500x300.jpg';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  max-width: 1440px;
  padding: 0 15px;
  margin: 0 180px;

  img {
    width: 120px;
    max-height: 15.39px;
  }

  > div {
    display: flex;
    max-width: 1080px;

    a {
      margin-right: 25px;
      padding: 10px 0px;
      color: rgba(102, 102, 102, 0.85);
      font-weight: 800;
      font-size: 17px;
      transition: color 0.2s ease;
      text-decoration: none;
    }

    a:hover {
      color: #000;
    }
  }
`;

const sectionOne = css`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  max-width: 1440px;
  max-height: 600px;
  padding: 57.25px 15px;
  margin: 0 auto 0 175px;

  h1 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-size: 48px;
    width: 100%;
    margin: 0 0 24px;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 18px;
    margin: 0 0 1.3em;
    max-width: 30em;
    line-height: 30px;
  }

  img {
    max-width: 600px;
    max-height: 100%;
  }
`;

const imgStyles = css`
  max-width: 720px;
  max-height: 600px;
`;

const sectionTwo = css`
  margin: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 0 15px;
  max-width: 1440px;
  max-height: 600px;

  > div {
    padding: 10% 15px;
    max-width: 520px;
  }

  h1 {
    font-size: 36px;
    display: block;
    width: 100%;
    margin: 0 0 24px;
  }

  p {
    font-size: 18px;
    margin: 0 0 1.3em;
    max-width: 30em;
    line-height: 30px;
  }

  img {
    max-width: 600px;
    max-height: 600px;
  }

  a {
    font-size: 16px;
    color: #1d6ff3;
    text-decoration: none !important;
  }
`;

const sectionThree = css`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 0 15px;

  > div {
    margin: 0 0 0 34px;
    padding: 10% 15px;
    max-width: 545px;
  }

  h1 {
    font-size: 36px;
    width: 100%;
  }

  p {
    font-size: 18px;
  }

  img {
    max-width: 600px;
    max-height: 600px;
    transition: opacity 1s ease;
  }

  a {
    font-size: 16px;
    color: #1d6ff3;
    text-decoration: none !important;
  }
`;

const sectionFour = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px 30px;
  width: 100%;
  padding: 0 15px;
  max-width: 1440px;
  margin-bottom: 100px;

  h1 {
    font-size: 24px;
    margin: 0 0 12px;
    padding-left: 15px;
  }
`;

const flexBoxGridContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 1080px;
`;
const flexBoxGrid = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1080px;

  .blogPost {
    display: flex;
    justify-content: center;
    padding: 0 15px 30px;
    background-color: #fff;
    max-width: 100%;
    position: relative;
    background-color: rgb(255, 255, 255, 0);
  }

  .blogText {
    max-width: 100%;
    height: 205px;
    background-color: rgb(255, 255, 255, 0.95);
    padding: 15px 20px;
    box-sizing: border-box;
  }

  .col {
    width: 100%;
    padding: 0 15px 30px;
  }

  h2 {
    font-size: 24px;
    margin: 0;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    max-height: auto;
    margin-bottom: -75px;
  }

  a {
    color: #4a4a4a;
    font-size: 16px;
    text-decoration: none !important;
  }
`;

const sectionFive = css`
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(238, 238, 238);
  height: 282px;
  max-width: 1500px;

  .sectionFiveTextLeft {
    display: flex;
    flex-direction: column;
    padding: 50px 15px 30px;

    h1 {
      margin: 0 0 16px;
      font-size: 36px;
    }

    p {
      font-size: 18px;
      padding: 0 0 18px;
    }
  }
`;

const inputEmailStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  padding: 0 15px 30px;

  input {
    font-size: 18px;
    border-radius: 4px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px solid #979797;
    box-shadow: none;
    padding: 0.5em 0.7em;
    width: 296px;
  }

  button {
    background-color: #1d6ff3;
    color: #fff;
    box-sizing: border-box;
    padding: 0.2em 1.2em;
    border-color: 1px solid #979797;
    font-size: 16px;
    font-weight: 400px;
    height: 42px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    box-shadow: none;
    letter-spacing: 0.04em;
    transition: color, background 0.2s;
    cursor: pointer;
  }
`;

const footerStyles = css`
  display: flex;
  justify-content: space-around;
  flex-basis: 25%;
  padding: 50px 30px 125px;

  h1 {
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 16px;
  }

  a {
    font-size: 15px;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const footerInfoStyles = css`
  display: flex;
  padding: 0px 15px 30px;
  width: 221px;

  > h1 {
    margin: 0px 0px 16px;
    opacity: 0.8;
  }

  a {
    font-size: 0.9375rem;
    color: #637280;
    padding: 4px 0px;
    line-height: 2;
    letter-spacing: -0.25px;
  }
`;

const socialMediaStyles = css`
  display: flex;
  flex-direction: row;
  max-width: 100px;

  a {
    margin: 0 16px 0 0;

    > div {
      text-decoration: none !important;
      padding: 0;
      color: #1f8ceb;
      opacity: 1;
      min-width: 19px;
      min-height: 19px;
    }
  }

  .fa:hover {
    transition: color 0.3s, opacity 0.3s, transform 0.3s;
    color: #1d6ff3;
  }
`;

const divider = css`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
  max-width: 30px;
`;

function App() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Helmet>
      <header>
        <div css={headerStyles}>
          <a href="https://morphocode.com/">
            <img src={morphocodeLogo} alt="Morphocode logo" />
          </a>
          <div>
            <a href="https://morphocode.com/academy/">Academy</a>
            <a href="https://morphocode.com/blog/">Blog</a>
            <a href="https://morphocode.com/work/">Work</a>
            <a href="https://morphocode.com/contact/">Contact</a>
            <a href="https://morphocode.com/about/">About</a>
          </div>
        </div>
      </header>
      <main>
        <section css={sectionOne}>
          <div>
            <h1>Exploring cities through data analysis and visualization</h1>
            <p>
              Morphocode is a design and development firm that uses data to
              visualize urban dynamics and provide location insights. Our team
              brings together expertise across architecture, urban planning, and
              software engineering.
            </p>
          </div>
          <div css={imgStyles}>
            <img src={exploringCities} alt="Artistic rendering of city plan" />
          </div>
        </section>
        <section css={sectionTwo}>
          <div>
            <h1>We research, design, and develop</h1>
            <p>
              Our portfolio ranges from interactive web maps and information
              graphics to custom software tools for data analysis and
              visualization.
            </p>
            <a href="https://morphocode.com/work/">View Projects</a>
          </div>
          <img
            src={illustrationWork}
            alt="Abstract representation of research"
          />
        </section>
        <section css={sectionThree}>
          <div>
            <h1>Learn with Morphocode</h1>
            <p>
              Morphocode Academy is an online school that covers topics in data
              visualization, creative coding, and urban informatics.
            </p>
            <a href="https://morphocode.com/academy/">Start Learning</a>
          </div>
          <img
            src={illustrationAcademy}
            alt="Abstract representation of the idea of learning"
          />
        </section>
        <section css={sectionFour}>
          <div css={flexBoxGridContainer}>
            <h1>From the blog</h1>
            <div css={flexBoxGrid}>
              <div>
                <div className="col">
                  <a href="https://morphocode.com/the-power-of-interactive-tools/">
                    <img
                      src={interactiveTools}
                      alt="Abstraction of interactive tools"
                    />
                    <div className="blogPost">
                      <div className="blogText">
                        <h2>The power of interactive tools</h2>
                        <div css={divider}></div>
                        <p>
                          Tools augment our problem-solving capacity. We rely on
                          them to expand our minds and provide ease, accuracy,
                          and [...]
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <a href="https://morphocode.com/the-making-of-morphocode-explorer/">
                  <img src={designMockUps} alt="Graphs and pie charts " />
                  <div className="blogPost">
                    <div className="blogText">
                      <h2>The making of Morphocode Explorer</h2>
                      <div css={divider}></div>
                      <p>
                        Over the last year, we’ve been working on a new web tool
                        for interactive data exploration [...]
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://morphocode.com/urban-performance-measures/">
                  <img
                    src={movementPatternsMunich}
                    alt="City plan with strong red lines, similar to veins "
                  />
                  <div className="blogPost">
                    <div className="blogText">
                      <h2>Urban performance measures</h2>
                      <div css={divider}></div>
                      <p>
                        Urban performance measures help communities make
                        informed decisions and measure results against goals.
                        [...]
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div css={flexBoxGrid}>
              <div className="col">
                <a href="https://morphocode.com/the-5-minute-walk/">
                  <img src={fiveMinuteWalk} alt="Radius with distances " />
                  <div className="blogPost">
                    <div className="blogText">
                      <h2>The 5-minute walk</h2>
                      <div css={divider}></div>
                      <p>
                        The five-minute walk, also known as the “pedestrian
                        shed” is considered to be the distance people are
                        willing [...]
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://morphocode.com/location-time-urban-data-visualization/">
                  <img
                    src={melbournePedestrian}
                    alt="Blue technical waves with peaks and valleys"
                  />
                  <div className="blogPost">
                    <div className="blogText">
                      <h2>Location + time: urban data visualization</h2>
                      <div css={divider}></div>
                      <p>
                        The most common ways to visually organize information
                        are based on location and time. In this interactive
                        story, [...]
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://morphocode.com/morphocode-best-american-infographics-2015/">
                  <img
                    src={bestAmericanInfographics}
                    alt="Booklet of the Best American Infographics"
                  />
                  <div className="blogPost">
                    <div className="blogText">
                      <h2>Morphocode in the Best American Infographics</h2>
                      <div css={divider}></div>
                      <p>
                        We are extremely happy to be included in The Best
                        American Infographics. The third volume in the series
                        [...]
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div css={sectionFive}>
            <div className="sectionFiveTextLeft">
              <h1>Start Learning</h1>
              <p>
                Get the latest articles, tutorials, and free resources from
                Morphocode
              </p>
            </div>
            <div css={inputEmailStyle}>
              <input placeholder="Enter your email"></input>
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </main>
      <footer css={footerStyles}>
        <div css={footerInfoStyles}>
          <h1>ACADEMY</h1>
          <a>Start Learning</a>
          <a>Mapping Urban Data</a>
          <a>Getting started with Rabbit</a>
        </div>
        <div css={footerInfoStyles}>
          <h1>WORKS</h1>
          <a>Urban layers</a>
          <a>Rabbit</a>
          <a>The heritage of Sofia</a>
          <a>The pulse of Melbourne</a>
        </div>
        <div css={footerInfoStyles}>
          <h1>FROM THE BLOG</h1>
          <a>The use of color in maps</a>
          <a>Global trends of urbanization</a>
          <a>Small multiples</a>
          <a>Morphocode in the best american infographics</a>
          <a>Inspiration</a>
          <a>Featured stories</a>
        </div>
        <div css={footerInfoStyles}>
          <h1>GET TO KNOW US</h1>
          <a>About</a>
          <a>Contact us</a>
          <div css={divider}></div>
          <div css={socialMediaStyles}>
            <a href="https://www.facebook.com/morphocode">
              <div class="fa fa-facebook"></div>
            </a>
            <a href="https://twitter.com/morphocode">
              <div class="fa fa-twitter"></div>
            </a>
            <a href="https://linkedin.com/company/morphocode/">
              <div class="fa fa-linkedin"></div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

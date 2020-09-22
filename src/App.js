/** @jsx jsx */
import { jsx, css } from '@emotion/core';
/** @jsxFrag React.Fragment */
import React from 'react';
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
  justify-content: space-betwen;
  height: 72px;
  align-items: center;
  margin: 0 32.5px;
  padding: 0 15px;

  img {
    width: 120px;
    max-height: 15.39px;
  }

  > div {
    display: flex;

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 0 auto;

  > div {
    padding: 57.25px 15px;
    max-width: 545px;
    margin: 0 0 0 27.5px;
  }

  h1 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-size: 48px;
    letter-spacing: -0.25px;
    width: 433px;
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
    max-width: 502px;
    max-height: 502px;
  }
`;

const sectionTwo = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 0 15px;

  > div {
    padding: 10% 15px;
    max-width: 520px;
  }

  h1 {
    font-size: 36px;
    letter-spacing: -0.25px;
    display: block;
    width: 433px;
    margin: 0 0 24px;
  }

  p {
    font-size: 18px;
    margin: 0 0 1.3em;
    max-width: 30em;
    line-height: 30px;
  }

  img {
    max-width: 492px;
    height: auto;
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
  }

  p {
    font-size: 18px;
  }

  img {
    max-width: 502px;
    height: auto;
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
  padding: 0 15px 30px;
  text-align: left;
  width: 100%;
  padding: 0 15px;
  max-width: 985px;
  h1 {
    font-size: 16px;
  }
`;

const flexBoxGrid = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-height: 350;
  align-items: center;
  max-width: 750px;

  .blogPost {
    display: flex;
    padding: 0 15px 30px;
    background-color: #fff;
  }

  .blogText {
    max-width: 215px;
  }

  .col {
    flex: 1 50px;
  }

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }

  img {
    max-width: 200px;
    max-height: 350px;
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
    padding: 0.4em 0.7em;
  }

  button {
    background-color: #1d6ff3;
    color: #fff;
    box-sizing: border-box;
    padding: 0.4em 1.2em;
    border-color: 0px solid #979797;
    font-size: 16px;
    height: 42px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    box-shadow: none;
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
    text-decoration: none !important;
    padding: 0;
    color: #1f8ceb;
    width: 19px;
    height: 19px;
    margin: 0 16px 0 0;
    opacity: 1;
  }

  .fa::before {
    width: 19px;
    height: 19px;
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
          <img src={morphocodeLogo} alt="Morphocode logo" />
          <div>
            <a href="#a">Academy</a>
            <a href="#a">Blog</a>
            <a href="#a">Work</a>
            <a href="#a">Contact</a>
            <a href="#a">About</a>
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
          <img src={exploringCities} />
        </section>
        <section css={sectionTwo}>
          <div>
            <h1>We research, design, and develop</h1>
            <p>
              Our portfolio ranges from interactive web maps and information
              graphics to custom software tools for data analysis and
              visualization.
            </p>
            <a href="#a">View Projects</a>
          </div>
          <img src={illustrationWork} />
        </section>
        <section css={sectionThree}>
          <div>
            <h1>Learn with Morphocode</h1>
            <p>
              Morphocode Academy is an online school that covers topics in data
              visualization, creative coding, and urban informatics.
            </p>
            <a href="#a">Start Learning</a>
          </div>
          <img src={illustrationAcademy} />
        </section>
        <section css={sectionFour}>
          <h1>From the blog</h1>
          <div css={flexBoxGrid}>
            <div>
              <div className="col">
                <a href="#">
                  <img src={interactiveTools} />
                  <div className="blogPost">
                    <div className="blogText">
                      <h2>The power of interactive tools</h2>
                      <div css={divider}></div>
                      <p>
                        Tools augment our problem-solving capacity. We rely on
                        them to expand our minds and provide ease, accuracy, and
                        [...]
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <a href="#">
                <img src={designMockUps} />
                <div className="blogPost">
                  <div>
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
              <a href="#">
                <img src={movementPatternsMunich} />
                <div className="blogPost">
                  <div>
                    <h2>Urban performance measures</h2>
                    <div css={divider}></div>
                    <p>
                      Urban performance measures help communities make informed
                      decisions and measure results against goals. [...]
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img src={fiveMinuteWalk} />
                <div className="blogPost">
                  <div>
                    <h2>The 5-minute walk</h2>
                    <div css={divider}></div>
                    <p>
                      The five-minute walk, also known as the “pedestrian shed”
                      is considered to be the distance people are willing [...]
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img src={melbournePedestrian} />
                <div className="blogPost">
                  <div>
                    <h2>Location + time: urban data visualization</h2>
                    <div css={divider}></div>
                    <p>
                      The most common ways to visually organize information are
                      based on location and time. In this interactive story,
                      [...]
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img src={bestAmericanInfographics} />
                <div className="blogPost">
                  <div>
                    <h2>Morphocode in the Best American Infographics</h2>
                    <div css={divider}></div>
                    <p>
                      We are extremely happy to be included in The Best American
                      Infographics. The third volume in the series [...]
                    </p>
                  </div>
                </div>
              </a>
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
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-linkedin"></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

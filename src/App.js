/** @jsx jsx */
import { jsx, css } from '@emotion/core';
/** @jsxFrag React.Fragment */
import React from 'react';
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
  padding: 0 15px;
  height: 72px;
  align-items: center;
  margin: 0 39px;

  img {
    width: 120px;
    max-height: 15.39px;
  }
`;

const navStyle = css`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  a {
    padding: 10px 0px;
    color: rgba(102, 102, 102, 0.85);
    font-weight: 500;
    font-size: 16px;
    transition: color 0.2s ease;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;

const sectionOne = css`
  display: flex;
  flex-direction: row;
  text-align: left;

  > div {
    padding: 10% 15px;
    max-width: 545px;
    margin: 0 0 0 34px;
  }

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 16px;
  }

  img {
    max-width: 502px;
    max-height: 502px;
  }
`;

const sectionTwo = css`
  display: flex;
  flex-direction: row-reverse;
  text-align: left;
  padding: 0 15px;

  > div {
    padding: 10% 15px;
    max-width: 520px;
  }

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  img {
    max-width: 492px;
    height: auto;
  }

  a {
    font-size: 16px;
  }
`;

const sectionThree = css`
  display: flex;
  flex-direction: row;
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
    max-width: 50%;
    height: auto;
    transition: opacity 1s ease;
  }

  a {
    font-size: 16px;
  }
`;

const sectionFour = css`
  padding: 0 15px 30px;
  text-align: left;
  width: 100%;
  padding: 0 15px;

  .blogPost {
    padding: 0 15px 30px;
  }
  h1 {
    font-size: 36px;
    margin: 0 0 15px;
    padding-left: 15px;
    text-decoration: none;
  }

  p {
    font-size: 18px;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    transition: opacity 1s ease;
  }

  a {
    font-size: 16px;
  }
`;

const blogGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const innerText = css`
  padding: 15px 20px;
`;

const sectionFive = css`
  display: flex;
  background-color: #777;
  height: 282px;

  .sectionFiveText {
    display: flex;
    flex-direction: row;

    h1 {
      margin: 0 0 16px;
    }
  }

  input {
    font-size: 18px;
  }

  button {
    background-color: #1d6ff3;
    color: #fff;
    box-sizing: border-box;
    padding: 6.4px 19.2px;
    border-width: 1px;
    border-style: solid;
    border-color: #1d6ff3;
    font-size: 16px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }
`;

const inputEmailStyle = css`
  display: flex;
  height: 123px;
`;

const footerStyles = css`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 16px;
  }

  a {
    font-size: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  return (
    <>
      <header>
        <div css={headerStyles}>
          <img src={morphocodeLogo} />
          <div css={navStyle}>
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
          <div css={blogGrid}>
            <a href="#">
              <div className="blogPost">
                <img src={interactiveTools} />
                <div css={innerText}>
                  <h2>The power of interactive tools</h2>
                  <p>
                    Tools augment our problem-solving capacity. We rely on them
                    to expand our minds and provide ease, accuracy, and [...]
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="blogPost">
                <img src={designMockUps} />
                <div css={innerText}>
                  <h2>The making of Morphocode Explorer</h2>
                  <p>
                    Over the last year, we’ve been working on a new web tool for
                    interactive data exploration [...]
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="blogPost">
                <img src={movementPatternsMunich} />
                <div css={innerText}>
                  <h2>Urban performance measures</h2>
                  <p>
                    Urban performance measures help communities make informed
                    decisions and measure results against goals. [...]
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="blogPost">
                <img src={fiveMinuteWalk} />
                <div css={innerText}>
                  <h2>The 5-minute walk</h2>
                  <p>
                    The five-minute walk, also known as the “pedestrian shed” is
                    considered to be the distance people are willing [...]
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="blogPost">
                <img src={melbournePedestrian} />
                <div css={innerText}>
                  <h2>Location + time: urban data visualization</h2>
                  <p>
                    The most common ways to visually organize information are
                    based on location and time. In this interactive story, [...]
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="blogPost">
                <img src={bestAmericanInfographics} />
                <div css={innerText}>
                  <h2>Morphocode in the Best American Infographics</h2>
                  <p>
                    We are extremely happy to be included in The Best American
                    Infographics. The third volume in the series [...]
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section>
          <div css={sectionFive}>
            <div className="sectionFiveText">
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
        <div>
          <h1>ACADEMY</h1>
          <a>Start Learning</a>
          <a>Mapping Urban Data</a>
          <a>Getting started with Rabbit</a>
        </div>
        <div>
          <h1>WORKS</h1>
          <a>Urban layers</a>
          <a>Rabbit</a>
          <a>The heritage of Sofia</a>
          <a>The pulse of Melbourne</a>
        </div>
        <div>
          <h1>FROM THE BLOG</h1>
          <a>The use of color in maps</a>
          <a>Global trends of urbanization</a>
          <a>Small multiples</a>
          <a>Morphocode in the best american infographics</a>
          <a>Inspiration</a>
          <a>Featured stories</a>
        </div>
        <div>
          <h1>GET TO KNOW US</h1>
          <a>About</a>
          <a>Contact us</a>
          <div>
            <a>
              <img />
            </a>
            <a>
              <img />
            </a>
            <a>
              <img />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

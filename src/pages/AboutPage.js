import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to the Hopeful Programmer! This website is the culmination
            of some of my brainchilds over the past few years. I am excited to
            share my lessons learned about minimalism, physical health, mental
            health, and living a purposeful, meaningful life...at least what I
            have learned that helps me do so. Hope definition (Webster's
            Collegiate Dictionary): to cherish a desire with expectation of
            fulfillment.{" "}
          </p>
          <p>Perfect.</p>
          <p>Let's be hopeful. Let's go after hope.</p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 90%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

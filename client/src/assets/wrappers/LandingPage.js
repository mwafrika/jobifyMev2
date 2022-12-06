import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    /* display: grid;
    align-items: center; */
    display: flex;
    overflow: hidden;
    margin-top: -3rem;
    //
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  .slide-container {
    width: 45vw;
  }
  .slide-container img {
    width: 100%;
  }
  @media (min-width: 992px) {
    .page {
      /* grid-template-columns: 1fr 1fr; */
      display: flex;
      column-gap: 2rem;
      align-items: center;
    }
    .main-img {
      /* display: block; */
      display: flex;
      flex-direction: row;
    }
  }
  @media (max-width: 992px) {
    .page {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 6rem;
    }
    .info {
      margin-top: 6rem;
    }
  }
`;
export default Wrapper;

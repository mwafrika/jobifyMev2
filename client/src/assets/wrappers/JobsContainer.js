import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    overflow-x: hidden;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      /* grid-template-columns: 1fr 1fr; */
      grid-template-columns: repeat(auto-fill, minmax(35%, 1fr));
      width: 100%;
      gap: 1rem;
    }
  }
`;
export default Wrapper;

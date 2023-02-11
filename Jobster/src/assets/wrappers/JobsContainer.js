import styled from 'styled-components'

// folosesc packaeg-ul styled-components pt sintaxa de mai jos. styled-components
// ii css dar in fisier js, poti sa adaugi doar css nu si logica js. acest package are
// rolul de a crea o clasa unica pt fiecare element care se afla intre const pe care ai 
//creat-o si in care pui stilurile css, in cazul nostu ii const Wrapper

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
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`
export default Wrapper

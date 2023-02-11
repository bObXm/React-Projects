import styled from 'styled-components'

// folosesc packaeg-ul styled-components pt sintaxa de mai jos. styled-components
// ii css dar in fisier js, poti sa adaugi doar css nu si logica js. acest package are
// rolul de a crea o clasa unica pt fiecare element care se afla intre const pe care ai 
//creat-o si in care pui stilurile css, in cazul nostu ii const Wrapper

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
export default Wrapper

import styled from 'styled-components'

// folosesc packaeg-ul styled-components pt sintaxa de mai jos. styled-components
// ii css dar in fisier js, poti sa adaugi doar css nu si logica js. acest package are
// rolul de a crea o clasa unica pt fiecare element care se afla intre const pe care ai 
//creat-o si in care pui stilurile css, in cazul nostu ii const Wrapper

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper

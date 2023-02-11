import styled from 'styled-components';

// folosesc packaeg-ul styled-components pt sintaxa de mai jos. styled-components
// ii css dar in fisier js, poti sa adaugi doar css nu si logica js. acest package are
// rolul de a crea o clasa unica pt fiecare element care se afla intre const pe care ai 
//creat-o si in care pui stilurile css, in cazul nostu ii const Wrapper

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;

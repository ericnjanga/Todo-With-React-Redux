import styled from 'styled-components';

const style = {};
style.AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  code {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    display: inline-block;
    font-family: "Source Code Pro", Menlo, monospace;
    font-size: 2.4rem;
    border-radius: 3px;
    background-color: #F5F7F9;
    padding: 10px 15px;
    margin: 0 1px;
    color: #744cbc;
    &: after {
      letter-spacing: -1em;
      content: "\00a0";
    }
  }

  .lexic {
    padding: 20px;
    opacity: 0.5;
    font-style: italic;
  }
`;

export default style;

import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import Wrapper from './tools/Wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <Root />
  </Wrapper>

); 
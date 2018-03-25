import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

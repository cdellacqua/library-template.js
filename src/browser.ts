import './style.css';
// TODO: use your library in this file, this is the script that runs in the demo page (npm run dev:browser)
import {hello} from './lib';

const appDiv = document.getElementById('app') as HTMLDivElement;

appDiv.appendChild(document.createTextNode('hello, ' + hello()));

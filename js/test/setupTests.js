//import './tempPolyfills';
import raf from 'raf/polyfill';

import './__mocks__/react';

// configure the enzyme adapter for tests
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true // disableLifecyleMethods allows to modify props through different tests
});

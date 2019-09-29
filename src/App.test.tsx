import React from 'react';
import ReactDOM from 'react-dom';

describe('aaa', () => {
	beforeEach(() => jest.resetModules())
	beforeEach(() => jest.resetModuleRegistry())

	it('renders without crashing', () => {
		jest.doMock('./Dummy')
		const { default: App } = require('./App')
		const div = document.createElement('div');
		ReactDOM.render(<App />, div)
		ReactDOM.unmountComponentAtNode(div);
	});
})

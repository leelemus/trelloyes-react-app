import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Cards Commponent', () => {
    it('Card component successfully renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Cards as expected', () => {
        const tree = renderer
            .create(<Card title="TEST TITLE" content="Test Content" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });    
});
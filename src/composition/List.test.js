import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cards = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' }
];
const testHeader = "Test Header";
const testKey = 2;

describe ('List Component', () => {
    it('Render component', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List 
            key={testKey}
            header={testHeader}
            cards={cards}
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Lists as expected', () => {
        const tree = renderer
            .create(<List 
                key={testKey}
                header={testHeader}
                cards={cards}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });    
});

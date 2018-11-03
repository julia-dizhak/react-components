import React from 'react';

// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Search from '../Search';
import preload from './../../data.json';
import ShowCard from '../ShowCard';
   
describe('search', () => {

    it('search renders correctly', () => {
        // const component = renderer.create(<Search />);
        // const tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
        
        const component = shallow(<Search />);
        expect(component).toMatchSnapshot();
    });

    it('search should render correct amount of shows', () => {
        const component = shallow(<Search />);
        expect(component.find(ShowCard).length).toEqual(preload.shows.length);
    });

    it('test', () => {
        const component = shallow(<Search />);
        const searchWord = 'black';

        component.find('input').simulate('change', {target: {value: searchWord}});
        
        const showCount = preload.shows
            .filter(show =>
                `${show.title} ${show.description}`.toUpperCase()
                    .indexOf(searchWord.toUpperCase()) >= 0
            ).length;
        
        expect(component.find(ShowCard).length).toEqual(showCount);    
    });

})


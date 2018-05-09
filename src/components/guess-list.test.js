import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './guess-list';

xdescribe('<GuessList />', ()=> {

    it('renders without crashing', ()=>{
        shallow(<GuessList/>);
    });

});//end outermost describe
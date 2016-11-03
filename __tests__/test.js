// Link.react-test.js
import React from 'react';
import TestComp from '../js/testcomponent';
import { mount } from 'enzyme';

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <TestComp />
//   );
//   let tComp1 = component.toJSON();
  
//   console.log(tComp1)

// });

test('logic for testcomp', function() {
  const wrapper = mount(
    <TestComp />
  );

  expect(wrapper.find('p').text()).toBe("Render this thing")

})
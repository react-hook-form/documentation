const enzymeInput = `const element = wrapper.find("select[data-testid='a']");
element.getDOMNode().value = "foo";
element.getDOMNode().dispatchEvent(new Event("input"));`

export default enzymeInput

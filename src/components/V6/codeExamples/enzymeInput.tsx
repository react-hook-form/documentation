export default `const element = wrapper.find("select[data-testid='a']");
element.getDOMNode().value = "foo";
element.getDOMNode().dispatchEvent(new Event("input"));`

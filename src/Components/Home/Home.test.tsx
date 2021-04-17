import Home from ".";
import { shallow } from "enzyme";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<Home />", () => {
    const wrapper = shallow(<Home />);

    it("should render", () => {
      expect(wrapper).toBeTruthy();
    });

    it("should call useHistory push property with '/inscription' arg", () => {
      const expectedArg = "/inscription";
      const button = wrapper.find(".home-button");
      button.simulate("click");
      expect(mockHistoryPush).toHaveBeenCalledWith(expectedArg);
    });
});
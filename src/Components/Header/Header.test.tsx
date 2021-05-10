import { shallow } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import Header from ".";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
    location: { pathname: "connexion" },
  }),
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("Header", () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      token: "",
      _id: "",
      username: "",
      email: "",
    }));
  });

  it("should render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
  });

  it("should redirect", () => {
    const wrapper = shallow(<Header />);
    const buttons = wrapper.find("button");
    const redirects = ["../nouveautes", "../connexion", "../inscription"];

    buttons.forEach((button, i) => {
      button.simulate("click");
      expect(mockHistoryPush).toHaveBeenCalledWith(redirects[i]);
    });
  });
});

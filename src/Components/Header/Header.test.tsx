import { shallow } from 'enzyme'; 
import Header from '.';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
    location: { pathname: "connexion" }
  }),
}));

describe("Header", () => {
  it("should render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
  });

  it("should redirect", () => {
    const wrapper = shallow(<Header />);
    const buttons = wrapper.find("button");
    const redirects = [
      "nouveautes",
      "connexion",
      "inscription"
    ];

    buttons.forEach((button, i) => {
      button.simulate("click");
      expect(mockHistoryPush).toHaveBeenCalledWith(redirects[i]);
    });
  });
});

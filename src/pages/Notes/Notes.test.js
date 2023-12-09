const { configure, shallow } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const NotesList = require('../../components/NotesList/NotesList');
const Notes = require('../Notes/Notes');

configure({ adapter: new Adapter() });

describe('<Notes/>', () => {
  it('should render <NotesList/> if fetched notes', () => {
    const wrapper = shallow(<Notes notes />);
    expect(wrapper.contains(<NotesList />)).toEqual(true);
  });
});

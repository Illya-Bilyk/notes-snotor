import { Button } from 'components/NoteForm/NoteForm.styled';
import { useState } from 'react';
import { connect } from 'react-redux';
import { SET_DB_SETTINGS, SET_LS_SETTINGS } from 'store/actions';

const ModalSettings = props => {
  const [settings, setSettings] = useState('ls');

  const handleSubmit = () => {
    settings === 'ls' ? props.onLocalStorageType() : props.onDataBaseType();
    props.onClose();
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '125px',
        margin: '50px',
      }}
    >
      <label>Choose an option for saving notes:</label>
      <select
        name="settings"
        onChange={event => setSettings(event.target.value)}
      >
        <option value="ls">Local Storage</option>
        <option value="db">Firebase</option>
      </select>
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onDataBaseType: () => dispatch({ type: SET_DB_SETTINGS }),
    onLocalStorageType: () => dispatch({ type: SET_LS_SETTINGS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSettings);

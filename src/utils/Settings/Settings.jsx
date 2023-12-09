import {
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownItemText,
} from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SET_DB_SETTINGS, SET_LS_SETTINGS } from 'store/actions';

const Settings = props => {
  const [settings, setSettings] = useState('ls');

  useEffect(() => {
    settings === 'ls' ? props.onLocalStorageType() : props.onDataBaseType();
  }, [props, settings]);

  return (
    <DropdownButton
      id="settings"
      title="Settings"
      variant="primary"
      className="px-3"
    >
      <DropdownItem id="ls" onClick={() => setSettings('ls')}>
        Local Storage
      </DropdownItem>
      <DropdownItem id="db" onClick={() => setSettings('db')}>
        Firebase
      </DropdownItem>

      <DropdownDivider />
      <DropdownItemText>
        Current:
        <strong> {settings === 'ls' ? 'Local Storage' : 'Firebase'}</strong>
      </DropdownItemText>
    </DropdownButton>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onDataBaseType: () => dispatch({ type: SET_DB_SETTINGS }),
    onLocalStorageType: () => dispatch({ type: SET_LS_SETTINGS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

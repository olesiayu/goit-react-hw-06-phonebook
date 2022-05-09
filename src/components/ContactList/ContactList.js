import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} number={number} name={name} id={id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;

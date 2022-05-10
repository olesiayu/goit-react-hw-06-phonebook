import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from 'components/ListItem/ListItem';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.items);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ListItem key={id} number={number} name={name} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;

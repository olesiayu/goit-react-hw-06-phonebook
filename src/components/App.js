import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact } from '../redux/contactsSlice';
import { updateFilter } from '../redux/filterSlice';
import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.items);

  const formSubmitHandler = (name, number) => {
    const sameName = contacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (sameName) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2 className={s.title}>Contacts</h2>
      <Filter
        value={filter}
        onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      />
      <ContactList contacts={getVisibleContacts()} />
    </div>
  );
}

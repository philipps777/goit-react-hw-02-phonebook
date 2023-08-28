import { List, Li, ButtonList, Number } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </List>
);

export const ContactItem = ({ contact, onDelete }) => (
  <Li>
    {contact.name}: <Number>{contact.number}</Number>
    <ButtonList onClick={() => onDelete(contact.id)}>Delete</ButtonList>
  </Li>
);

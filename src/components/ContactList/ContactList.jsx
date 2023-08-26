export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </ul>
);

export const ContactItem = ({ contact, onDelete }) => (
  <li>
    {contact.name} {contact.number}
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

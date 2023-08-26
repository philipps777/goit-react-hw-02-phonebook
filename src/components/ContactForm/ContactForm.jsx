export const ContactForm = ({
  onAdd,
  contacts,
  name,
  number,
  onNameChange,
  onNumberChange,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in your contacts.`);
      return;
    }
    onAdd({ name, number });
    onNameChange('');
    onNumberChange('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        value={name}
        onChange={e => onNameChange(e.target.value)}
        required
      />
      <input
        type="text"
        name="number"
        value={number}
        onChange={e => onNumberChange(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

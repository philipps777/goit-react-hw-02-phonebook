import { Form, FormWrapper, Button, Input } from './ContactForm.styled';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    onAdd({ name, number });
    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            value={name}
            onChange={this.handleInputChange}
            required
          />
          <Input
            type="text"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            required
          />
          <Button type="submit">Add Contact</Button>
        </Form>
      </FormWrapper>
    );
  }
}

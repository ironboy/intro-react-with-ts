import { useState } from 'react';
import Input from './Input';

export default function RegisterForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    moreAboutMe: ''
  });

  const { firstName, lastName, email,
    password, repeatPassword, moreAboutMe } = formData;

  function change(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  function submitForm(event: React.SubmitEvent<HTMLFormElement>) {
    // prevent page reload
    event.preventDefault();
    if (password !== repeatPassword) {
      alert('Lösenorden matchar inte!');
      return;
    }
    // Copy formData and remove repeatPassword
    // (undefined properties are not serialized to JSON)
    let cleanData = { ...formData, repeatPassword: undefined };
    // Send to backend
    alert(JSON.stringify(cleanData, null, '  '));
  }

  return <form onSubmit={submitForm}>
    <Input label="Förnamn" name="firstName"
      type="text" value={firstName} onChange={change} />
    <Input label="Efternamn" name="lastName"
      type="text" value={lastName} onChange={change} />
    <Input label="E-post" name="email"
      type="email" value={email} onChange={change} />
    <Input label="Lösenord" name="password"
      type="password" value={password} onChange={change} />
    <Input label="Upprepa lösenord" name="repeatPassword"
      type="password" value={repeatPassword} onChange={change} />
    <Input label="Mer om dig" name="moreAboutMe" onChange={change}
      type="text" value={moreAboutMe} optional />
    <button type="submit">Registrera dig</button>
  </form>;
}
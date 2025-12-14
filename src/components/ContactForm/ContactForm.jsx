import { useId } from 'react'

const ContactForm = ({ handleCreate }) => {
  const nameId = useId()
  const numberId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()

    const contact = {
      name: e.target.elements.Name.value,
      number: e.target.elements.Number.value,
    }

    handleCreate(contact)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name:</label>
      <br />
      <input type="text" name="Name" id={nameId} required />
      <br />
      <br />

      <label htmlFor={numberId}>Number:</label>
      <br />
      <input type="text" name="Number" id={numberId} required />
      <br />
      <br />

      <button type="submit">Add contact</button>
    </form>
  )
}

export default ContactForm

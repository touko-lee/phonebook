import { useState } from 'react'

const Person = (props) => {
  return(
    <li>{props.id} {props.name} {props.number}</li>
  )
}
// part 5
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const findName = persons.find(person => person.name === newName)
    if(findName){
      window.alert(newName + " is already in the phonebook")
      return
    }

    const Person = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }
    setPersons(persons.concat(Person))
    setNewName('')
  }

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumbersChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input
          value={newFilter}
          onChange={handleFilterChange}
          />
      </div>
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handlePersonsChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumbersChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person => 
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </div>
    </div>
  )
}

export default App
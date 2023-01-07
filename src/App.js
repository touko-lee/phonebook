import { useState } from 'react'

const Person = (props) => {
  return(
    <li>{props.id} {props.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1}
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const findName = persons.find(person => person.name === newName)
    if(findName){
      window.alert(newName + " is already in the phonebook")
      return
    }

    const Person = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(Person))
    setNewName('')
  }

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }

  // part 3
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handlePersonsChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <Person key={person.id} name={person.name} />
        )}
      </div>
    </div>
  )
}

export default App
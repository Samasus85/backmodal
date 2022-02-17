import React from 'react'
import Card from './components/ui/Card'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useState } from 'react'

const initState = [
	{
		id: 1,
		title: 'Toilet Paper',
		amount: 1.5,
		date: new Date(2023, 7, 14),
	},
	{
		id: 2,
		title: 'Car Insuranse',
		amount: 200,
		date: new Date(2025, 2, 28),
	},
	{
		id: 3,
		title: 'Cosmetics',
		amount: 100,
		date: new Date(2024, 8, 18),
	},
	{
		id: 5,
		title: 'Books',
		amount: 4.7,
		date: new Date(2022, 10, 4),
	},
]

function App() {
	const [expenses, setExpenses] = useState(initState)
	const addExpenseDataHandler = (expense) => {            // NewExpenses'те onAddExpense'ти иштетекенибизде бул функция иштейт
		setExpenses((prevState => {
			return [expense, ...prevState]                //жаны массив тузобуз, ага эски массивти копировать этип коёбуз 
		}))
	}
	return (
		<Card >
			<NewExpenses onAddExpense={addExpenseDataHandler} />  {/* NewExpenses' ке пропс катары беребиз */}
			<Expenses items={expenses} />
		</Card>
	)
}

export default App;

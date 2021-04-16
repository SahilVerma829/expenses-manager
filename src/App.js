import React from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense';

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Tishu Paper',
			amount: 94.12,
			date: new Date(2021, 2, 14),
		},
		{ id: 'e2', title: 'New TV', amount: 799.42, date: new Date(2021, 1, 11) },
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.12,
			date: new Date(2021, 3, 19),
		},
		{ id: 'e4', title: 'New Desk', amount: 450, date: new Date(2021, 2, 23) },
	];

	// return React.createElement(
	// 	'div',
	// 	{},
	// 	React.createElement('h2', {}, 'Hello'),
	// 	React.createElement(Expenses, { items: expenses })
	// );
	const addExpenseHandler = (expense) => {
		console.log(expense);
	};

	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;

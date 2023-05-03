import ProductList from "./components/ProductList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from 'react';

function App(){
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'Rent', amount: 100, category: 'Food'},
        {id: 2, description: 'Coffee', amount: 200, category: 'Food'},
        {id: 3, description: 'Gas', amount: 300, category: 'Grocery'},
        {id: 4, description: 'Food', amount: 400, category: 'Food'},
    ])

    const category = [
        {id: 1, name: 'Food'},
        {id: 2, name: 'Grocery'},
        {id: 3, name: 'Transport'},
    ]

    const [selectedCategory, setSelectedCategory] = useState(0)

    const onDeleteExpense = (id: number) => {
        setExpenses(expenses.filter((expense) => expense.id !== id))
    }

    const filteredExpenses = selectedCategory === 0 ? expenses 
                            : expenses.filter((expense) => expense.category === category[selectedCategory-1].name);

    
    const addExpense = (data: any) => {
        const setSelectedCategoryObj = category.find((category) => category.id === parseInt(data.category));

        const newExpense = {
            id: expenses.length + 1,
            description: data.description,
            amount: data.amount,
            category: setSelectedCategoryObj? setSelectedCategoryObj.name : '',
        }

        setExpenses([...expenses, newExpense]);
    }
    
    const [product, setProduct] = useState('');
    
    return (
        <>
        <select className="form-select mb-3" onChange={(event)=> setProduct(event.target.value)}>
            <option value="">Select Category</option>
            <option value="Housing">Housing</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
        </select>
        <ProductList product={product}/>
        </>
       
    );
}

export default App;
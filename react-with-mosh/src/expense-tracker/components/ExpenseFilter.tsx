import React from 'react'

interface Category {
    id: number;
    name: string;
}
interface Props{
    category: Category[];
    selectCategory: (id: number) => void;
}

const ExpenseFilter = ({category, selectCategory}: Props) => {
  return (
   <select className='form-select' onChange={(event) => selectCategory(parseInt(event.target.value))}>
     <option value="0">All Categories</option>
     {category.map((category) => (
       <option key={category.id} value={category.id}>{category.name}</option>
     ))}
   </select>
  );
}

export default ExpenseFilter;
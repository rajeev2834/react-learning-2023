import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Category {
    id: number;
    name: string;
}
interface Props{
    category: Category[];
    addExpense: (data : any) => void;
}

const schema = z.object({
    description: z.string().min(5, {message: 'Description must be 5 characters long'}),
    amount: z.number({invalid_type_error: "Amount is required field."}).min(10, {message: "Amount must be greater or equal to 10"}),
    category: z.enum(['1', '2', '3'], {errorMap: () => {return {message: 'Category is required'}}}),
});

type FormData = z.infer<typeof schema>

const ExpenseForm = ({category, addExpense}: Props) => {
    const { register, handleSubmit, formState : {errors, isValid}, reset } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data : any) => {
        addExpense(data);
        reset();
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input id='description' type="text" className="form-control" 
            {...register('description', {required: true}) }/>
            {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input id='amount' type="number" className="form-control" 
            {...register('amount', {valueAsNumber: true}) }/>
            {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select id='category' className="form-select" {...register('category', {required: true,})}>
                <option value="">Choose category...</option>
                {category.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <div className="mb-3"><button disabled={!isValid} className="btn btn-outline-success">Add data</button></div>
    </form>
  );
}

export default ExpenseForm;
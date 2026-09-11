import type {
  ContactFieldLabel,
  ContactFieldType,
} from '@/data/09-ContactData';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: ContactFieldLabel;
  type: ContactFieldType;
  errorMessage?: string;
}

const InputField = <T extends FieldValues>({
  type,
  errorMessage,
  register,
  name,
  label,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-[6px] lg:gap-2'>
      <div className='flex justify-between items-center'>
        <label htmlFor={name} className='text-sm lg:text-md font-semibold'>
          {label}
        </label>
        {errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}
      </div>
      {type === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          rows={3}
          className='focus:outline-0 px-4 py-2 border rounded-xl'
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          {...register(name)}
          className='focus:outline-0 px-4 py-2 border rounded-xl'
        />
      )}
    </div>
  );
};

export default InputField;

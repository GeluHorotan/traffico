type Props = {
  value: string;
  type: string;
  name: string;
  error: string;
  id: string;

  label: string;

  placeholder?: string;
  onChangeHandler: () => void;
  onBlurHandler: () => void;
};

const Input = ({
  value,
  onChangeHandler,
  onBlurHandler,
  type,
  name,
  error,
  id,
  label,
  placeholder,
}: Props) => {
  return (
    <div className="flex flex-col relative gap-3  ">
      <label
        htmlFor={name}
        className=" text-accent_dark flex items-center justify-between"
      >
        <p> {label}</p>
        <span className="text-accent_primary   ">{error}</span>
      </label>

      <div className=" relative w-full ">
        <input
          placeholder={placeholder ? placeholder : ''}
          name={name}
          type={type}
          id={id}
          className={`peer ${
            value
              ? 'drop-shadow-2xl shadow-accent_primary border-2 font-bold'
              : 'border-[1px]'
          }  placeholder:text-accent_black placeholder:text-lg relative transition-all bg-white rounded-md border-accent_primary  duration-100 w-full ease-in-out  py-2 px-10
           outline-none text-lg`}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
    </div>
  );
};

export default Input;

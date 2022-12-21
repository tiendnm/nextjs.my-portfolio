import clsx from "clsx";
import React, { HTMLInputTypeAttribute, FormEvent } from "react";
interface inputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
  labelText: string;
  labelFor: string | undefined;
  id: string | undefined;
  name: string | undefined;
  type: HTMLInputTypeAttribute | undefined;
  isRequired: boolean;
  placeholder: string | undefined;
  customClass: string | undefined;
  autoComplete: string | undefined;
}
export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  autoComplete,
}: inputProps) {
  return (
    <div className="my-5">
      <label
        htmlFor={labelFor}
        className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={isRequired}
        className={clsx([
          `relative block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none sm:text-sm`,
          ,
          customClass,
        ])}
        placeholder={placeholder}
      />
    </div>
  );
}

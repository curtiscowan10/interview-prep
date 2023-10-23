import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { Control, FieldValues, FieldError } from "react-hook-form";

type FormTextFieldProps = {
  control?: Control<FieldValues>;
  name: string;
  label: string;
  required: boolean;
  className?: string;
  error?: FieldError;
};

const FormTextField = ({
  control,
  name,
  label,
  required,
  className,
  error,
}: FormTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="standard"
          margin="normal"
          required={required}
          className={className}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default FormTextField;

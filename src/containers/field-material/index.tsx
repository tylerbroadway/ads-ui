import { Checkbox, FormControlLabel, Select, TextField } from "@material-ui/core";
import * as React from "react";

export const renderTextField = ({
  input,
  label,
  meta,
  type,
  // tslint:disable-next-line:trailing-comma
  ...custom
}: any) => (
    <TextField
      label={label}
      error={meta.touched && meta.invalid}
      type={type}
      helperText={meta.touched && meta.error}
      {...input}
      {...custom}
    />
  );

export const renderCheckbox = ({
  input,
  label,
  // tslint:disable-next-line:trailing-comma
  ...custom
}: any) => (
    <FormControlLabel label={label} control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
        {...custom}
      />
    } />
  );

export const renderSelectField = ({
  input,
  children,
  // tslint:disable-next-line:trailing-comma
  ...custom
}: any) => (
    <Select
      {...input}
      onChange={(value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );

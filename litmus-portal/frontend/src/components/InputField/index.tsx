import { TextField, OutlinedInputProps } from '@material-ui/core';
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useStyles, useStylesLitmus } from './styles';

interface InputFieldProps {
  label: string;
  type?: string;
  helperText?: string;
  validationError: boolean;
  success?: boolean;
  disabled?: boolean;
  value: string;
  required?: boolean;
  iconType?: string | undefined;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  value,
  disabled,
  helperText,
  validationError,
  success,
  required,
  iconType,
  handleChange,
}) => {
  const LitmusTextFieldStylesExternal = useStyles();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const classes = useStylesLitmus(success);

  const handleClickShowPassword = () => {
    setShowPassword(true);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowPassword(false);
  };

  if (type === 'password' && validationError === false) {
    return (
      <TextField
        className={LitmusTextFieldStylesExternal.inputArea}
        label={label}
        helperText={helperText}
        value={value}
        type={showPassword ? 'text' : 'password'}
        required={required}
        onChange={handleChange}
        variant="filled"
        InputProps={
          {
            classes,
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } as Partial<OutlinedInputProps>
        }
      />
    );
  }
  if (type === 'password' && validationError === true) {
    return (
      <TextField
        className={LitmusTextFieldStylesExternal.inputArea}
        error
        label={label}
        helperText={helperText}
        value={value}
        type={showPassword ? 'text' : 'password'}
        required={required}
        onChange={handleChange}
        variant="filled"
        InputProps={
          {
            classes,
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } as Partial<OutlinedInputProps>
        }
      />
    );
  }

  if (iconType) {
    if (iconType === 'iconLeft' && validationError === false) {
      return (
        <TextField
          className={LitmusTextFieldStylesExternal.inputArea}
          label={label}
          helperText={helperText}
          value={value}
          type={type}
          required={required}
          onChange={handleChange}
          variant="filled"
          InputProps={
            {
              classes,
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            } as Partial<OutlinedInputProps>
          }
        />
      );
    }
    if (iconType === 'iconLeft' && validationError === true) {
      return (
        <TextField
          className={LitmusTextFieldStylesExternal.inputArea}
          error
          label={label}
          helperText={helperText}
          value={value}
          type={type}
          required={required}
          onChange={handleChange}
          variant="filled"
          InputProps={
            {
              classes,
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            } as Partial<OutlinedInputProps>
          }
        />
      );
    }
    if (iconType === 'iconRight' && validationError === false) {
      return (
        <TextField
          className={LitmusTextFieldStylesExternal.inputArea}
          label={label}
          helperText={helperText}
          value={value}
          type={type}
          required={required}
          onChange={handleChange}
          variant="filled"
          InputProps={
            {
              classes,
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            } as Partial<OutlinedInputProps>
          }
        />
      );
    }
    if (
      iconType === 'iconRight' &&
      validationError === false &&
      success === true
    ) {
      return (
        <TextField
          className={LitmusTextFieldStylesExternal.inputArea}
          label={label}
          helperText={helperText}
          value={value}
          type={type}
          required={required}
          onChange={handleChange}
          variant="filled"
          InputProps={
            {
              classes,
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            } as Partial<OutlinedInputProps>
          }
        />
      );
    }
    if (iconType === 'iconRight' && validationError === true) {
      return (
        <TextField
          className={LitmusTextFieldStylesExternal.inputArea}
          error
          label={label}
          helperText={helperText}
          value={value}
          type={type}
          required={required}
          onChange={handleChange}
          variant="filled"
          InputProps={
            {
              classes,
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <img src="/icons/closeFilled.svg" alt="Error" />
                </InputAdornment>
              ),
            } as Partial<OutlinedInputProps>
          }
        />
      );
    }
    if (iconType === 'iconLeftRight' && validationError === false) {
      return (
        <TextField
          className={LitmusTextFieldStylesExternal.inputArea}
          label={label}
          helperText={helperText}
          value={value}
          type={type}
          required={required}
          onChange={handleChange}
          variant="filled"
          InputProps={
            {
              classes,
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            } as Partial<OutlinedInputProps>
          }
        />
      );
    }
    if (iconType === 'iconLeftRight' && validationError === true) {
      return (
        <TextField
          className={LitmusTextFieldStylesExternal.inputArea}
          error
          label={label}
          helperText={helperText}
          value={value}
          type={type}
          required={required}
          onChange={handleChange}
          variant="filled"
          InputProps={
            {
              classes,
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <img src="/icons/closeFilled.svg" alt="Error" />
                </InputAdornment>
              ),
            } as Partial<OutlinedInputProps>
          }
        />
      );
    }
  }

  return (
    <TextField
      className={LitmusTextFieldStylesExternal.inputArea}
      error={validationError}
      disabled={disabled}
      label={label}
      helperText={helperText}
      value={value}
      type={type}
      required={required}
      onChange={handleChange}
      variant="filled"
      InputProps={
        {
          classes,
          disableUnderline: true,
        } as Partial<OutlinedInputProps>
      }
    />
  );
};

export default InputField;

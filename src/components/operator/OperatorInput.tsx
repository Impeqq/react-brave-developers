import styled from "styled-components";

import { Field } from "formik";
import MaskedInput from "react-input-mask";
import { FormattedMessage } from "react-intl";

import Notification from "../Notification";

const PaymentInputTemplate = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const PaymentInputText = styled.label`
  margin: 0;
  margin-bottom: 15px;
  display: inline-block;
  font-weight: 500;
  font-size: 17px;
`;

interface InputValidation {
    props: {
      handleChange: void,
      handleBlur: void,
      errors: object,
      touched: object,
    },
    name: string,
    type: string,
    mask?: string
    label: string
  }

const OperatorInput = ({ props, name, type, mask, label }: InputValidation) => {
  return (
    <PaymentInputTemplate>
      <PaymentInputText htmlFor={name}>
      <FormattedMessage id={label} />
      </PaymentInputText>
      <Field name={name}>
        {({ field }) => (
          <MaskedInput
            {...field}
            mask={mask}
            id={name}
            type={type}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            className={
              props.errors[name] && props.touched[name]
                ? "text-input error"
                : "text-input"
            }
          />
        )}
      </Field>
      <Notification value={props.errors[name]} touch={props.touched[name]}/>
    </PaymentInputTemplate>
  );
}

export default OperatorInput
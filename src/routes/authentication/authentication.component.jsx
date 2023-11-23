

import SignUpForm from "../../components/category-item/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/category-item/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {


  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

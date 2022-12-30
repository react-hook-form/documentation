export const step1 = `import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

createStore({
  data: {
    firstName: '',
    lastName: '',
  }
});

export default function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );
}
`

export const step2 = `import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("./step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
`

export const step3 = `import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = props => {
  const { state } = useStateMachine(updateAction);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};`

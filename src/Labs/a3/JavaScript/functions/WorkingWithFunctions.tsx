import ES5Functions from './ES5Functions';
import ArrowFunctions from './ArrowFunctions';
import FunctionParenthesisAndParameters from './FunctionParenthesisAndParameters'
import ImpliedReturn from './ImpliedReturn';
const WorkingWithFunctions: React.FC = () => {
  return (
    <>
      <ES5Functions />
      <ArrowFunctions />
      <FunctionParenthesisAndParameters />
      <ImpliedReturn />
    </>
  );
}

export default WorkingWithFunctions;
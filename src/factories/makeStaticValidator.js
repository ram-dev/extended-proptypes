import makeOptionalValidator from "./makeOptionalValidator";
import makeRequiredValidator from "./makeRequiredValidator";

// Takes a static validator (i.e. PropTypes.bool, PropTypes.func)
// and returns optional and required versions.
export default function makeStaticValidator (validator) {
  const output = makeOptionalValidator(validator);
  output.isRequired = makeRequiredValidator(validator);
  return output;
}
import "./style.css";

import { DocumentSelectionExample } from "./component/document-selection-example";
import { Calculator } from "./component/calculator";

const excute = () => {
  const documentSelectionExample = new DocumentSelectionExample();
  const calculator = new Calculator({
      type: '공학용'
  });

};

excute();

import "@testing-library/jest-dom";

import {
   configure, shallow
} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import DatosForm from "../../components/DatosForm";

configure({
   adapter: new Adapter()
});


describe('render components',()=>{
    test('render DatosForm',()=>{
        shallow(<DatosForm/>)
    })
    

})
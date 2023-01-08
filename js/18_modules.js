/*
   ES6 Modules ->  code break
    Two way for modules
    1. export 
        1. named  -> use only(export variable or function) 
        2. default -> use (export default variable or function)
    2. import 
        1.if name export ->  {}
        2. if default export -> their name or custom name 
        2. name or default export -> alias and custom name

    single dot -> represent current folder
    double dot -> represent outer main folder of current folder
*/

import { myVar } from "./01_variable"; // Named exported
import MyVar from './01_variable' // Default exported
import * as Variables from "./01_variable"; // name or default exported
import defaultVar, {myVar as custom} from  "./01_variable"; // mix 

console.log(myVar);

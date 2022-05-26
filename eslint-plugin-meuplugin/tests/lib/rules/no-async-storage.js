/**
 * @fileoverview Evita o uso do AsyncStorage do React Native
 * @author Cinara
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-async-storage"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-async-storage", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "import { AsyncStorage } from 'react-native';",
      errors: [{ message: "Utilize CorpAsyncStorage do modulo corp-lib em lugar de AsyncStorage", type: "ImportDeclaration" }],
    },
  ],
});

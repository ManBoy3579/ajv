(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{496:function(e,t,a){"use strict";a.r(t);var r=a(53),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frequently-asked-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),a("p",[e._v("The purpose of this document is to help find answers quicker. I am happy to continue the discussion about these issues, so please comment on some of the issues mentioned below or create a new issue if it seems more appropriate.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#using-json-schema"}},[e._v("Using JSON schema")]),a("ul",[a("li",[a("a",{attrs:{href:"#why-ajv-validates-empty-object-as-valid"}},[e._v("Why Ajv validates empty object as valid?")])]),a("li",[a("a",{attrs:{href:"#why-ajv-validates-only-the-first-item-of-the-array"}},[e._v("Why Ajv validates only the first item of the array?")])])])]),a("li",[a("a",{attrs:{href:"#ajv-api-for-returning-validation-errors"}},[e._v("Ajv API for returning validation errors")]),a("ul",[a("li",[a("a",{attrs:{href:"#why-ajv-assigns-errors-as-a-property-of-validation-function-or-instance-instead-of-returning-an-object-with-validation-results-and-errors"}},[e._v("Why Ajv assigns errors as a property of validation function (or instance) instead of returning an object with validation results and errors?")])]),a("li",[a("a",{attrs:{href:"#would-errors-get-overwritten-in-case-of-concurrent-validations"}},[e._v('Would errors get overwritten in case of "concurrent" validations?')])]),a("li",[a("a",{attrs:{href:"#can-we-change-extend-api-to-add-a-method-that-would-return-errors-rather-than-assign-them-to-errors-property"}},[e._v("Can we change / extend API to add a method that would return errors (rather than assign them to errors property)?")])]),a("li",[a("a",{attrs:{href:"#why-don-t-additionalproperties-false-errors-display-the-property-name"}},[e._v('Why don\'t "additionalProperties": false errors display the property name?')])])])]),a("li",[a("a",{attrs:{href:"#additional-properties-inside-compound-keywords-anyof-oneof-etc"}},[e._v("Additional properties inside compound keywords anyOf, oneOf, etc.")]),a("ul",[a("li",[a("a",{attrs:{href:"#why-the-keyword-additionalproperties-false-fails-validation-when-some-properties-are-declared-inside-a-subschema-in-anyof-etc"}},[e._v('Why the keyword additionalProperties: false fails validation when some properties are "declared" inside a subschema in anyOf/etc.?')])]),a("li",[a("a",{attrs:{href:"#why-the-validation-fails-when-i-use-option-removeadditional-with-the-keyword-anyof-etc"}},[e._v("Why the validation fails when I use option removeAdditional with the keyword anyOf/etc.?")])])])]),a("li",[a("a",{attrs:{href:"#generating-schemas-with-resolved-references-ref"}},[e._v("Generating schemas with resolved references ($ref)")]),a("ul",[a("li",[a("a",{attrs:{href:"#why-ajv-does-not-replace-references-ref-with-the-actual-referenced-schemas-as-some-validators-do"}},[e._v("Why Ajv does not replace references ($ref) with the actual referenced schemas as some validators do?")])]),a("li",[a("a",{attrs:{href:"#how-can-i-generate-a-schema-where-ref-keywords-are-replaced-with-referenced-schemas"}},[e._v("How can I generate a schema where $ref keywords are replaced with referenced schemas?")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"using-json-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-json-schema"}},[e._v("#")]),e._v(" Using JSON schema")]),e._v(" "),a("p",[e._v("Ajv implements JSON schema specification. Before submitting the issue about the behaviour of any validation keywords please review them in:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://tools.ietf.org/html/draft-handrews-json-schema-validation-00",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema specification"),a("OutboundLink")],1),e._v(" (draft-07)")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/json-schema.html"}},[e._v("JSON Schema reference")]),e._v(" in Ajv documentation")],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://spacetelescope.github.io/understanding-json-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema tutorial"),a("OutboundLink")],1),e._v(" (for draft-04)")])]),e._v(" "),a("h4",{attrs:{id:"why-ajv-validates-empty-object-as-valid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-validates-empty-object-as-valid"}},[e._v("#")]),e._v(" Why Ajv validates empty object as valid?")]),e._v(" "),a("p",[e._v('"properties" keyword does not require the presence of any properties, you need to use "required" keyword. It also doesn\'t require that the data is an object, so any other type of data will also be valid. To require a specific type use "type" keyword. '),a("RouterLink",{attrs:{to:"/strict-mode.html#strict-types"}},[e._v("Strict types mode")]),e._v(' introduced in v7 requires presence of "type" when "properties" are used, so the mistakes are less likely.')],1),e._v(" "),a("h4",{attrs:{id:"why-ajv-validates-only-the-first-item-of-the-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-validates-only-the-first-item-of-the-array"}},[e._v("#")]),e._v(" Why Ajv validates only the first item of the array?")]),e._v(" "),a("p",[e._v('"items" keyword support '),a("RouterLink",{attrs:{to:"/json-schema.html#items"}},[e._v("two syntaxes")]),e._v(" - 1) when the schema applies to all items; 2) when there is a different schema for each item in the beginning of the array. This problem means you are using the second syntax.")],1),e._v(" "),a("p",[e._v("In v7 with option "),a("code",[e._v("strictTuples")]),e._v(" ("),a("code",[e._v('"log"')]),e._v(' by default) this problem is less likely to happen, as Ajv would log warning about missing "minItems" and other keywords that are required to constrain tuple size.')]),e._v(" "),a("h2",{attrs:{id:"ajv-api-for-returning-validation-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajv-api-for-returning-validation-errors"}},[e._v("#")]),e._v(" Ajv API for returning validation errors")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/65",target:"_blank",rel:"noopener noreferrer"}},[e._v("#65"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/212",target:"_blank",rel:"noopener noreferrer"}},[e._v("#212"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/236",target:"_blank",rel:"noopener noreferrer"}},[e._v("#236"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/242",target:"_blank",rel:"noopener noreferrer"}},[e._v("#242"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/256",target:"_blank",rel:"noopener noreferrer"}},[e._v("#256"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"why-ajv-assigns-errors-as-a-property-of-validation-function-or-instance-instead-of-returning-an-object-with-validation-results-and-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-assigns-errors-as-a-property-of-validation-function-or-instance-instead-of-returning-an-object-with-validation-results-and-errors"}},[e._v("#")]),e._v(" Why Ajv assigns errors as a property of validation function (or instance) instead of returning an object with validation results and errors?")]),e._v(" "),a("p",[e._v("The reasons are history (other fast validators with the same api) and performance (returning boolean is faster). Although more code is written to process errors than to handle successful results, almost all server-side validations pass. The existing API is more efficient from the performance point of view.")]),e._v(" "),a("p",[e._v("Ajv also supports asynchronous validation (with asynchronous formats and keywords) that returns a promise that either resolves to "),a("code",[e._v("true")]),e._v(" or rejects with an error.")]),e._v(" "),a("h4",{attrs:{id:"would-errors-get-overwritten-in-case-of-concurrent-validations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#would-errors-get-overwritten-in-case-of-concurrent-validations"}},[e._v("#")]),e._v(' Would errors get overwritten in case of "concurrent" validations?')]),e._v(" "),a("p",[e._v("No. There is no parallel execution in JavaScript, and the cooperative concurrency model of javascript makes this pattern safe. While a validation is run, no other JavaScript code that can access the same memory can be executed. As long as the errors are used in the same execution block, the errors will not be overwritten.")]),e._v(" "),a("h4",{attrs:{id:"can-we-change-extend-api-to-add-a-method-that-would-return-errors-rather-than-assign-them-to-errors-property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-we-change-extend-api-to-add-a-method-that-would-return-errors-rather-than-assign-them-to-errors-property"}},[e._v("#")]),e._v(" Can we change / extend API to add a method that would return errors (rather than assign them to "),a("code",[e._v("errors")]),e._v(" property)?")]),e._v(" "),a("p",[e._v("No. In many cases there is a module responsible for the validation in the application, usually to load schemas and to process errors. This module is the right place to introduce any user-defined API. Convenience is a subjective thing, changing or extending API purely because of convenience would either break backward compatibility (even if it's done in a new major version it still complicates migration) or bloat API (making it more difficult to maintain).")]),e._v(" "),a("h4",{attrs:{id:"why-don-t-additionalproperties-false-errors-display-the-property-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-don-t-additionalproperties-false-errors-display-the-property-name"}},[e._v("#")]),e._v(" Why don't "),a("code",[e._v('"additionalProperties": false')]),e._v(" errors display the property name?")]),e._v(" "),a("p",[e._v("Doing this would create a precedent where validated data is used in error messages, creating a vulnerability (e.g., when ajv is used to validate API data/parameters and error messages are logged).")]),e._v(" "),a("p",[e._v("Since the property name is already in the params object, in an application you can modify the messages in any way you need. ajv-errors package allows modifying messages as well.")]),e._v(" "),a("h2",{attrs:{id:"additional-properties-inside-compound-keywords-anyof-oneof-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-properties-inside-compound-keywords-anyof-oneof-etc"}},[e._v("#")]),e._v(" Additional properties inside compound keywords anyOf, oneOf, etc.")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/127",target:"_blank",rel:"noopener noreferrer"}},[e._v("#127"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/129",target:"_blank",rel:"noopener noreferrer"}},[e._v("#129"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/134",target:"_blank",rel:"noopener noreferrer"}},[e._v("#134"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/140",target:"_blank",rel:"noopener noreferrer"}},[e._v("#140"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/193",target:"_blank",rel:"noopener noreferrer"}},[e._v("#193"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/205",target:"_blank",rel:"noopener noreferrer"}},[e._v("#205"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/238",target:"_blank",rel:"noopener noreferrer"}},[e._v("#238"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/264",target:"_blank",rel:"noopener noreferrer"}},[e._v("#264"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"why-the-keyword-additionalproperties-false-fails-validation-when-some-properties-are-declared-inside-a-subschema-in-anyof-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-the-keyword-additionalproperties-false-fails-validation-when-some-properties-are-declared-inside-a-subschema-in-anyof-etc"}},[e._v("#")]),e._v(" Why the keyword "),a("code",[e._v("additionalProperties: false")]),e._v(' fails validation when some properties are "declared" inside a subschema in '),a("code",[e._v("anyOf")]),e._v("/etc.?")]),e._v(" "),a("p",[e._v("The keyword "),a("code",[e._v("additionalProperties")]),e._v(" creates the restriction on validated data based on its own value ("),a("code",[e._v("false")]),e._v(" or schema object) and on the keywords "),a("code",[e._v("properties")]),e._v(" and "),a("code",[e._v("patternProperties")]),e._v(" in the SAME schema object. JSON Schema validators must NOT take into account properties used in other schema objects.")]),e._v(" "),a("p",[e._v("While you can expect that the schema below would allow the objects either with properties "),a("code",[e._v("foo")]),e._v(" and "),a("code",[e._v("bar")]),e._v(" or with properties "),a("code",[e._v("foo")]),e._v(" and "),a("code",[e._v("baz")]),e._v(" and all other properties will be prohibited, this schema will only allow objects with one property "),a("code",[e._v("foo")]),e._v(" (an empty object and any non-objects will also be valid):")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  additionalProperties"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  oneOf"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("baz"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("The reason for that is that "),a("code",[e._v("additionalProperties")]),e._v(" keyword ignores properties inside "),a("code",[e._v("oneOf")]),e._v(" keyword subschemas. That's not the limitation of Ajv or any other validator, that's how it must work according to the standard.")]),e._v(" "),a("p",[e._v("There are several ways to implement the described logic that would allow two properties, please see the suggestions in the issues mentioned above.")]),e._v(" "),a("h4",{attrs:{id:"why-the-validation-fails-when-i-use-option-removeadditional-with-the-keyword-anyof-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-the-validation-fails-when-i-use-option-removeadditional-with-the-keyword-anyof-etc"}},[e._v("#")]),e._v(" Why the validation fails when I use option "),a("code",[e._v("removeAdditional")]),e._v(" with the keyword "),a("code",[e._v("anyOf")]),e._v("/etc.?")]),e._v(" "),a("p",[e._v("This problem is related to the problem explained above - properties treated as additional in the sense of "),a("code",[e._v("additionalProperties")]),e._v(" keyword, based on "),a("code",[e._v("properties")]),e._v("/"),a("code",[e._v("patternProperties")]),e._v(" keyword in the same schema object.")]),e._v(" "),a("p",[e._v("See the example in the "),a("a",{attrs:{href:"https://ajv.js.org/guide/modifying-data.html#removing-additional-properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("Removing Additional Data"),a("OutboundLink")],1),e._v(" section of the docs.")]),e._v(" "),a("h2",{attrs:{id:"generating-schemas-with-resolved-references-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-schemas-with-resolved-references-ref"}},[e._v("#")]),e._v(" Generating schemas with resolved references ($ref)")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/22",target:"_blank",rel:"noopener noreferrer"}},[e._v("#22"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/125",target:"_blank",rel:"noopener noreferrer"}},[e._v("#125"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/146",target:"_blank",rel:"noopener noreferrer"}},[e._v("#146"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/228",target:"_blank",rel:"noopener noreferrer"}},[e._v("#228"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/336",target:"_blank",rel:"noopener noreferrer"}},[e._v("#336"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("#454"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"why-ajv-does-not-replace-references-ref-with-the-actual-referenced-schemas-as-some-validators-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-does-not-replace-references-ref-with-the-actual-referenced-schemas-as-some-validators-do"}},[e._v("#")]),e._v(" Why Ajv does not replace references ($ref) with the actual referenced schemas as some validators do?")]),e._v(" "),a("ol",[a("li",[e._v("The scope of Ajv is validating data against JSON Schemas; inlining referenced schemas is not necessary for validation. When Ajv generates code for validation it either inlines the code of referenced schema or uses function calls. Doing schema manipulation is more complex and out of scope.")]),e._v(" "),a("li",[e._v("When schemas are recursive (or mutually recursive) resolving references would result in self-referencing recursive data-structures that can be difficult to process.")]),e._v(" "),a("li",[e._v("There are cases when such inlining would also require adding (or modifying) "),a("code",[e._v("id")]),e._v(" attribute in the inlined schema fragment to make the resulting schema equivalent.")])]),e._v(" "),a("p",[e._v("There were many conversations about the meaning of "),a("code",[e._v("$ref")]),e._v(" in "),a("a",{attrs:{href:"https://github.com/json-schema-org",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema GitHub organisation"),a("OutboundLink")],1),e._v(". The consensus is that while it is possible to treat "),a("code",[e._v("$ref")]),e._v(" as schema inclusion with two caveats (above), this interpretation is unnecessary complex. A more efficient approach is to treat "),a("code",[e._v("$ref")]),e._v(" as a delegation, i.e. a special keyword that validates the current data instance against the referenced schema. The analogy with programming languages is that "),a("code",[e._v("$ref")]),e._v(" is a function call rather than a macro. See "),a("a",{attrs:{href:"https://github.com/json-schema-org/json-schema-spec/issues/279",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", for example.")]),e._v(" "),a("h4",{attrs:{id:"how-can-i-generate-a-schema-where-ref-keywords-are-replaced-with-referenced-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-generate-a-schema-where-ref-keywords-are-replaced-with-referenced-schemas"}},[e._v("#")]),e._v(" How can I generate a schema where "),a("code",[e._v("$ref")]),e._v(" keywords are replaced with referenced schemas?")]),e._v(" "),a("p",[e._v("There are two possible approaches:")]),e._v(" "),a("ol",[a("li",[e._v("Traverse schema (e.g. with json-schema-traverse) and replace every "),a("code",[e._v("$ref")]),e._v(" with the referenced schema.")]),e._v(" "),a("li",[e._v("Use a specially constructed JSON Schema with a "),a("RouterLink",{attrs:{to:"/keywords.html"}},[e._v("user-defined keyword")]),e._v(" to traverse and modify your schema.")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);
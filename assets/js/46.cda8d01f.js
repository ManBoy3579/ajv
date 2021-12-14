(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{506:function(t,a,s){"use strict";s.r(a);var e=s(53),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"user-defined-keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-keywords"}},[t._v("#")]),t._v(" User-defined keywords")]),t._v(" "),s("p",[t._v("You can extend keyword available in Ajv by defining your own keywords.")]),t._v(" "),s("p",[t._v("The advantages of defining keywords are:")]),t._v(" "),s("ul",[s("li",[t._v("allow creating validation scenarios that cannot be expressed using pre-defined keywords")]),t._v(" "),s("li",[t._v("simplify your schemas")]),t._v(" "),s("li",[t._v("help bringing a bigger part of the validation logic to your schemas")]),t._v(" "),s("li",[t._v("make your schemas more expressive, less verbose and closer to your application domain")]),t._v(" "),s("li",[t._v("implement data processors that modify your data ("),s("code",[t._v("modifying")]),t._v(" option MUST be used in keyword definition) and/or create side effects while the data is being validated")])]),t._v(" "),s("p",[t._v("If a keyword is used only for side-effects and its validation result is pre-defined, use option "),s("code",[t._v("valid: true/false")]),t._v(" in keyword definition to simplify both generated code (no error handling in case of "),s("code",[t._v("valid: true")]),t._v(") and your keyword functions (no need to return any validation result).")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("User-defined keywords make schemas non-portable")]),t._v(" "),s("p",[t._v("When extending JSON Schema standard with additional keywords, you have several potential concerns to be aware of:")]),t._v(" "),s("ul",[s("li",[t._v("portability of your schemas - they would only work with JavaScript or TypeScript applications where you can use Ajv.")]),t._v(" "),s("li",[t._v("additional documentation required to maintain your schemas.")])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Avoid using non-standard keywords with JTD schemas")]),t._v(" "),s("p",[t._v("While it is possible to define additional keywords for JSON Type Definition schemas (these keywords can only be used in "),s("code",[t._v("metadata")]),t._v(" member of the schema), it is strongly recommended not to do it - JTD is specifically designed for cross-platform APIs.")])]),t._v(" "),s("p",[t._v("You can define keywords with "),s("RouterLink",{attrs:{to:"/guide/api.html#api-addkeyword"}},[t._v("addKeyword")]),t._v(" method. Keywords are defined on the "),s("code",[t._v("ajv")]),t._v(" instance level - new instances will not have previously defined keywords.")],1),t._v(" "),s("p",[t._v("Ajv allows defining keywords with:")]),t._v(" "),s("ul",[s("li",[t._v("code generation function (used by all pre-defined keywords)")]),t._v(" "),s("li",[t._v("validation function")]),t._v(" "),s("li",[t._v("compilation function")]),t._v(" "),s("li",[t._v("macro function")])]),t._v(" "),s("p",[t._v("Example. "),s("code",[t._v("range")]),t._v(" and "),s("code",[t._v("exclusiveRange")]),t._v(" keywords using compiled schema:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("ajv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addKeyword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  keyword"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"range"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  schemaType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exclusiveRange"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("min"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentSchema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    parentSchema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exclusiveRange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" min "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("max")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" min "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("range"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusiveRange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" validate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ajv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("p",[t._v("Several keywords (typeof, instanceof, range and propertyNames) are defined in "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv-keywords",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-keywords"),s("OutboundLink")],1),t._v(" package - they can be used for your schemas and as a starting point for your own keywords.")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/keywords.html"}},[t._v("User-defined keywords")]),t._v(" reference for more details.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);
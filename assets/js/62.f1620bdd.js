(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{522:function(e,t,a){"use strict";a.r(t);var s=a(53),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv-cli repository"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"ajv-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajv-cli"}},[e._v("#")]),e._v(" ajv-cli")]),e._v(" "),a("p",[e._v("Command line interface for "),a("a",{attrs:{href:"https://github.com/epoberezkin/ajv",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv"),a("OutboundLink")],1),e._v(", one of the "),a("a",{attrs:{href:"https://github.com/ebdrup/json-schema-benchmark",target:"_blank",rel:"noopener noreferrer"}},[e._v("fastest json schema validators"),a("OutboundLink")],1),e._v(".\nSupports "),a("a",{attrs:{href:"http://json.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://json5.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON5"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"http://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("YAML"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli/actions?query=workflow%3Abuild",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/ajv-validator/ajv-cli/workflows/build/badge.svg",alt:"build"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/ajv-cli",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/ajv-cli.svg",alt:"npm"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/ajv-validator/ajv-cli?branch=master",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://coveralls.io/repos/github/ajv-validator/ajv-cli/badge.svg?branch=master",alt:"coverage"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://gitter.im/ajv-validator/ajv",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/gitter/room/ajv-validator/ajv.svg",alt:"gitter"}}),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#json-schema-version"}},[e._v("JSON schema version")])]),e._v(" "),a("li",[e._v("Commands\n"),a("ul",[a("li",[a("a",{attrs:{href:"#help-command"}},[e._v("Help")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#validate-data"}},[e._v("Validate data")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#compile-schemas"}},[e._v("Compile schemas")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#migrate-schemas"}},[e._v("Migrate schemas")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#test-validation-result"}},[e._v("Test validation result")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ajv-options"}},[e._v("Ajv options")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#version_history"}},[e._v("Version History, License")])])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g ajv-cli\n")])])]),a("h2",{attrs:{id:"json-schema-language-and-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-schema-language-and-version"}},[e._v("#")]),e._v(" JSON schema language and version")]),e._v(" "),a("p",[e._v("Parameter "),a("code",[e._v("--spec")]),e._v(" can be used with all commands (other than help) to choose JSON schema language:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--spec=draft7")]),e._v(" (default) - support JSON Schema draft-07 (uses "),a("code",[e._v('import Ajv from "ajv"')]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--spec=draft2019")]),e._v(" - support JSON Schema draft-2019-09 (uses "),a("code",[e._v('import Ajv from "ajv/dist/2019"')]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--spec=draft2020")]),e._v(" - support JSON Schema draft-2020-12 (uses "),a("code",[e._v('import Ajv from "ajv/dist/2020"')]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--spec=jtd")]),e._v(" - support "),a("a",{attrs:{href:"https://ajv.js.org/json-type-definition.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Type Definition"),a("OutboundLink")],1),e._v(" (uses "),a("code",[e._v('import Ajv from "ajv/dist/jtd"')]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),a("h3",{attrs:{id:"help-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help-command"}},[e._v("#")]),e._v(" Help command")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v("\najv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" validate\najv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" compile\najv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" migrate\najv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),a("h3",{attrs:{id:"validate-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate-data"}},[e._v("#")]),e._v(" Validate data")]),e._v(" "),a("p",[e._v("This command validates data files against JSON-schema")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv validate -s test/schema.json -d test/valid_data.json\najv -s test/schema.json -d test/valid_data.json\n")])])]),a("p",[e._v("You can omit "),a("code",[e._v("validate")]),e._v(" command name and "),a("code",[e._v(".json")]),e._v(" from the "),a("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_file_modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("input file names"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("h5",{attrs:{id:"s-file-name-of-json-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s-file-name-of-json-schema"}},[e._v("#")]),e._v(" "),a("code",[e._v("-s")]),e._v(" - file name of JSON-schema")]),e._v(" "),a("p",[e._v("Only one schema can be passed in this parameter")]),e._v(" "),a("h5",{attrs:{id:"d-json-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d-json-data"}},[e._v("#")]),e._v(" "),a("code",[e._v("-d")]),e._v(" - JSON data")]),e._v(" "),a("p",[e._v("Multiple data files can be passed, as in "),a("code",[e._v("-r")]),e._v(" parameter:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv -s test/schema.json -d "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test/valid*.json"')]),e._v("\n")])])]),a("p",[e._v("If some file is invalid exit code will be 1.")]),e._v(" "),a("h5",{attrs:{id:"r-referenced-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-referenced-schemas"}},[e._v("#")]),e._v(" "),a("code",[e._v("-r")]),e._v(" - referenced schemas")]),e._v(" "),a("p",[e._v("The schema in "),a("code",[e._v("-s")]),e._v(" parameter can reference any of these schemas with "),a("code",[e._v("$ref")]),e._v(" keyword.")]),e._v(" "),a("p",[e._v("Multiple schemas can be passed both by using this parameter multiple times and with "),a("a",{attrs:{href:"https://github.com/isaacs/node-glob#glob-primer",target:"_blank",rel:"noopener noreferrer"}},[e._v("glob patterns"),a("OutboundLink")],1),e._v(". Glob pattern should be quoted and extensions cannot be omitted.")]),e._v(" "),a("h5",{attrs:{id:"m-meta-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-meta-schemas"}},[e._v("#")]),e._v(" "),a("code",[e._v("-m")]),e._v(" - meta-schemas")]),e._v(" "),a("p",[e._v("Schemas can use any of these schemas as a meta-schema (that is the schema used in "),a("code",[e._v("$schema")]),e._v(" keyword - it is used to validate the schema itself).")]),e._v(" "),a("p",[e._v("Multiple meta-schemas can be passed, as in "),a("code",[e._v("-r")]),e._v(" parameter.")]),e._v(" "),a("h5",{attrs:{id:"c-custom-keywords-formats-definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-custom-keywords-formats-definitions"}},[e._v("#")]),e._v(" "),a("code",[e._v("-c")]),e._v(" - custom keywords/formats definitions")]),e._v(" "),a("p",[e._v('You can pass module(s) that define custom keywords/formats. The modules should export a function that accepts Ajv instance as a parameter. The file name should start with ".", it will be resolved relative to the current folder. The package name can also be passed - it will be used in require as is.\nThese modules can be written in TypeScript if you have '),a("code",[e._v("ts-node")]),e._v(" installed.")]),e._v(" "),a("p",[e._v("For example, you can use "),a("code",[e._v("-c ajv-keywords")]),e._v(" to add all keywords from "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-keywords",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv-keywords"),a("OutboundLink")],1),e._v(" package or "),a("code",[e._v("-c ajv-keywords/keywords/typeof")]),e._v(" to add only typeof keyword.")]),e._v(" "),a("h4",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("--errors=")]),e._v(": error reporting format. Possible values:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("js")]),e._v(" (default): JavaScript object")]),e._v(" "),a("li",[a("code",[e._v("json")]),e._v(": JSON with indentation and line-breaks")]),e._v(" "),a("li",[a("code",[e._v("line")]),e._v(": JSON without indentation/line-breaks (for easy parsing)")]),e._v(" "),a("li",[a("code",[e._v("text")]),e._v(": human readable error messages with data paths")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--changes=")]),e._v(": detect changes in data after validation."),a("br"),e._v("\nData can be modified with "),a("a",{attrs:{href:"#ajv-options"}},[e._v("Ajv options")]),e._v(" "),a("code",[e._v("--remove-additional")]),e._v(", "),a("code",[e._v("--use-defaults")]),e._v(" and "),a("code",[e._v("--coerce-types")]),e._v(")."),a("br"),e._v("\nThe changes are reported in JSON-patch format ("),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6902",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC6902"),a("OutboundLink")],1),e._v(")."),a("br"),e._v("\nPossible values are "),a("code",[e._v("js")]),e._v(" (default), "),a("code",[e._v("json")]),e._v(" and "),a("code",[e._v("line")]),e._v(" (see "),a("code",[e._v("--errors")]),e._v(" option).")])])]),e._v(" "),a("h3",{attrs:{id:"compile-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-schemas"}},[e._v("#")]),e._v(" Compile schemas")]),e._v(" "),a("p",[e._v("This command validates and compiles schema without validating any data.")]),e._v(" "),a("p",[e._v("It can be used to check that the schema is valid and to create a standalone module exporting validation function(s).")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv compile -s schema\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compile to module file")]),e._v("\najv compile -s schema -o validate.js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## compile to stdout, to allow code formatting (js-beautify has to be installed separately)")]),e._v("\najv compile -s schema -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" js-beautify "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" validate.js\n")])])]),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("h5",{attrs:{id:"s-file-name-s-of-json-schema-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s-file-name-s-of-json-schema-s"}},[e._v("#")]),e._v(" "),a("code",[e._v("-s")]),e._v(" - file name(s) of JSON-schema(s)")]),e._v(" "),a("p",[e._v("Multiple schemas can be passed both by using this parameter multiple times and with "),a("a",{attrs:{href:"https://github.com/isaacs/node-glob#glob-primer",target:"_blank",rel:"noopener noreferrer"}},[e._v("glob patterns"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv compile -s "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test/schema*.json"')]),e._v("\n")])])]),a("h5",{attrs:{id:"o-output-file-for-compiled-validation-function-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#o-output-file-for-compiled-validation-function-module"}},[e._v("#")]),e._v(" "),a("code",[e._v("-o")]),e._v(" - output file for compiled validation function module")]),e._v(" "),a("p",[e._v("If multiple schemas are compiled with this option the module will have multiple exports named as schema $id's or as file names, otherwise the module will export validation function as default export.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv compile -s "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"schema.json"')]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"validate_schema.js"')]),e._v("\n")])])]),a("p",[a("code",[e._v("-o")]),e._v(" without parameter should be used to output code to stdout to pass it to some code formatter.")]),e._v(" "),a("p",[e._v("This command also supports parameters "),a("code",[e._v("-r")]),e._v(", "),a("code",[e._v("-m")]),e._v(" and "),a("code",[e._v("-c")]),e._v(" as in "),a("a",{attrs:{href:"#validate-data"}},[e._v("validate")]),e._v(" command.")]),e._v(" "),a("h3",{attrs:{id:"migrate-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-schemas"}},[e._v("#")]),e._v(" Migrate schemas")]),e._v(" "),a("p",[e._v("This command validates and migrates schema from JSON Schema draft-04 to draft-07, draft-2019-09 or draft-2020-12 using "),a("a",{attrs:{href:"https://github.com/ajv-validator/json-schema-migrate",target:"_blank",rel:"noopener noreferrer"}},[e._v("json-schema-migrate"),a("OutboundLink")],1),e._v(" package.")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"#json-schema-version"}},[e._v("version of JSON Schema")]),e._v(" is determined by "),a("code",[e._v("--spec")]),e._v(" parameter (only "),a("code",[e._v('"draft7"')]),e._v(", "),a("code",[e._v('"draft2019"')]),e._v(" or  "),a("code",[e._v('"draft2020"')]),e._v(").")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv migrate -s schema\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compile to specific file name")]),e._v("\najv migrate -s schema -o migrated_schema.json\n")])])]),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("h5",{attrs:{id:"s-file-name-s-of-json-schema-s-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s-file-name-s-of-json-schema-s-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("-s")]),e._v(" - file name(s) of JSON-schema(s)")]),e._v(" "),a("p",[e._v("Multiple schemas can be passed both by using this parameter multiple times and with "),a("a",{attrs:{href:"https://github.com/isaacs/node-glob#glob-primer",target:"_blank",rel:"noopener noreferrer"}},[e._v("glob patterns"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv migrate -s "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test/schema*.json"')]),e._v("\n")])])]),a("p",[e._v("If parameter "),a("code",[e._v("-o")]),e._v(" is not specified the migrated schema is written to the same file and the original file is preserved with "),a("code",[e._v(".bak")]),e._v(" extension.")]),e._v(" "),a("p",[e._v("If migration doesn't change anything in the schema file no changes in files are made.")]),e._v(" "),a("h5",{attrs:{id:"o-output-file-for-migrated-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#o-output-file-for-migrated-schema"}},[e._v("#")]),e._v(" "),a("code",[e._v("-o")]),e._v(" - output file for migrated schema")]),e._v(" "),a("p",[e._v("Only a single schema can be migrated with this option.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv compile -s "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"schema.json"')]),e._v(" -o migrated_schema.json\n")])])]),a("h4",{attrs:{id:"options-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-2"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--indent=")]),e._v(": indentation in migrated schema JSON file, 4 by default")]),e._v(" "),a("li",[a("code",[e._v("--validate-schema=false")]),e._v(": skip schema validation")])]),e._v(" "),a("h3",{attrs:{id:"test-validation-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-validation-result"}},[e._v("#")]),e._v(" Test validation result")]),e._v(" "),a("p",[e._v("This command asserts that the result of the validation is as expected.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ajv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -s test/schema.json -d test/valid_data.json --valid\najv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -s test/schema.json -d test/invalid_data.json --invalid\n")])])]),a("p",[e._v("If the option "),a("code",[e._v("--valid")]),e._v(" ("),a("code",[e._v("--invalid")]),e._v(") is used for the "),a("code",[e._v("test")]),e._v(" to pass (exit code 0) the data file(s) should be valid (invalid).")]),e._v(" "),a("p",[e._v("This command supports the same options and parameters as "),a("a",{attrs:{href:"#validate-data"}},[e._v("validate")]),e._v(" with the exception of "),a("code",[e._v("--changes")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"ajv-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajv-options"}},[e._v("#")]),e._v(" Ajv options")]),e._v(" "),a("p",[e._v("You can pass the following "),a("a",{attrs:{href:"https://ajv.js.org/options.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ajv options"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Strict mode")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--strict=")])]),e._v(" "),a("td",[a("code",[e._v("true")]),e._v("/"),a("code",[e._v("false")]),e._v("/"),a("code",[e._v("log")]),e._v(" - set all "),a("a",{attrs:{href:"https://ajv.js.org/strict-mode.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("strict mode"),a("OutboundLink")],1),e._v(" restrictions")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--strict-schema=")])]),e._v(" "),a("td",[e._v("log on ("),a("code",[e._v("log")]),e._v(") or ignore ("),a("code",[e._v("false")]),e._v(") "),a("a",{attrs:{href:"https://ajv.js.org/strict-mode.html#prohibit-ignored-keywords",target:"_blank",rel:"noopener noreferrer"}},[e._v("strict "),a("OutboundLink")],1),e._v(" restrictions (the default is to log)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--strict-tuples=")])]),e._v(" "),a("td",[e._v("throw on ("),a("code",[e._v("true")]),e._v(") or ignore ("),a("code",[e._v("false")]),e._v(") "),a("a",{attrs:{href:"https://ajv.js.org/strict-mode.html#prohibit-unconstrained-tuples",target:"_blank",rel:"noopener noreferrer"}},[e._v("strict schema"),a("OutboundLink")],1),e._v(" restrictions (the default is to throw)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--strict-types=")])]),e._v(" "),a("td",[e._v("throw on ("),a("code",[e._v("true")]),e._v(") or ignore ("),a("code",[e._v("false")]),e._v(") "),a("a",{attrs:{href:"https://ajv.js.org/strict-mode.html#strict-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("strict types"),a("OutboundLink")],1),e._v(" restrictions (the default is to log)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--strict-required=")])]),e._v(" "),a("td",[e._v("throw on ("),a("code",[e._v("true")]),e._v(") or log ("),a("code",[e._v("log")]),e._v(") "),a("a",{attrs:{href:"https://ajv.js.org/strict-mode.html#defined-required-properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("required properties"),a("OutboundLink")],1),e._v(" restrictions (the default is to ignore)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--allow-matching-properties")])]),e._v(" "),a("td",[e._v("allow "),a("code",[e._v("properties")]),e._v(" "),a("a",{attrs:{href:"https://ajv.js.org/strict-mode.html#overlap-between-properties-and-patternproperties-keywords",target:"_blank",rel:"noopener noreferrer"}},[e._v("matching patterns"),a("OutboundLink")],1),e._v(" in "),a("code",[e._v("patternProperties")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--allow-union-types")])]),e._v(" "),a("td",[e._v("allow "),a("a",{attrs:{href:"https://ajv.js.org/strict-mode.html#union-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("union types"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--validate-formats=false")])]),e._v(" "),a("td",[e._v("disable format validation")])]),e._v(" "),a("tr",[a("td",[e._v("Validation and reporting")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--data")])]),e._v(" "),a("td",[e._v("use "),a("a",{attrs:{href:"https://ajv.js.org/guide/combining-schemas.html#data-reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("$data references"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--all-errors")])]),e._v(" "),a("td",[e._v("collect all validation errors")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--verbose")])]),e._v(" "),a("td",[e._v("include schema and data in errors")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--comment")])]),e._v(" "),a("td",[e._v("log schema "),a("code",[e._v("$comment")]),e._v("s")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--inline-refs=")])]),e._v(" "),a("td",[e._v("referenced schemas compilation mode (true/false/<number>)")])]),e._v(" "),a("tr",[a("td",[e._v("Modify validated data")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--remove-additional")])]),e._v(" "),a("td",[e._v("remove additional properties (true/all/failing)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--use-defaults")])]),e._v(" "),a("td",[e._v("replace missing properties/items with the values from default keyword")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--coerce-types")])]),e._v(" "),a("td",[e._v("change type of data to match type keyword")])]),e._v(" "),a("tr",[a("td",[e._v("Advanced")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--multiple-of-precision")])]),e._v(" "),a("td",[e._v("precision of multipleOf, pass integer number")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--messages=false")])]),e._v(" "),a("td",[e._v("do not include text messages in errors")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--loop-required=")])]),e._v(" "),a("td",[e._v("max size of "),a("code",[e._v("required")]),e._v(" to compile to expression (rather than to loop)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--loop-enum=")])]),e._v(" "),a("td",[e._v("max size of "),a("code",[e._v("enum")]),e._v(" to compile to expression (rather than to loop)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--own-properties")])]),e._v(" "),a("td",[e._v("only validate own properties (not relevant for JSON, but can have effect for JavaScript objects)")])]),e._v(" "),a("tr",[a("td",[e._v("Code generation")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--code-es5")])]),e._v(" "),a("td",[e._v("generate ES5 code")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--code-lines")])]),e._v(" "),a("td",[e._v("generate multi-line code")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--code-optimize=")])]),e._v(" "),a("td",[e._v("disable optimization ("),a("code",[e._v("false")]),e._v(") or number of optimization passes (1 pass by default)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("--code-formats=")])]),e._v(" "),a("td",[e._v("code to require formats object (only needed if you generate standalone code and do not use "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv-formats"),a("OutboundLink")],1),e._v(")")])])])]),e._v(" "),a("p",[e._v("Options can be passed using either dash-case or camelCase.")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://ajv.js.org/options.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ajv Options"),a("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),a("h2",{attrs:{id:"version-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-history"}},[e._v("#")]),e._v(" Version History")]),e._v(" "),a("p",[e._v("See https://github.com/ajv-validator/ajv-cli/releases")]),e._v(" "),a("h2",{attrs:{id:"licence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#licence"}},[e._v("#")]),e._v(" Licence")]),e._v(" "),a("p",[a("a",{attrs:{href:"./LICENSE"}},[e._v("MIT")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
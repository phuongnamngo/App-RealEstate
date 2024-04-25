module.exports = function (plop) {
  plop.setPrompt('selectLine', require('inquirer-select-line'));
  plop.setGenerator('reducer-api', {
    description: 'Create reducer state for api action',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'What is your store name?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your action name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/store/reducers/api/{{path}}/{{camelCase name}}.js',
        templateFile: 'plop-templates/store/action.js.hbs',
      },
      {
        type: 'add',
        path: 'src/store/reducers/api/{{path}}/initialState.js',
        templateFile: 'plop-templates/store/initialState.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/store/reducers/api/{{path}}/reset{{path}}State.js',
        templateFile: 'plop-templates/store/resetState.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/store/reducers/api/{{path}}/index.js',
        templateFile: 'plop-templates/store/index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'modify',
        path: 'src/store/reducers/api/{{path}}/index.js',
        pattern: /(\/\/endAppendAction\s)/g,
        template: "import {{camelCase name}} from './{{camelCase name}}';\r\n$1",
      },
      {
        type: 'modify',
        path: 'src/store/reducers/api/{{path}}/initialState.js',
        pattern: /(\/\/endAppendInitialState\s)/g,
        template: '{{camelCase name}}: {},\r\n    $1',
      },
      {
        type: 'modify',
        path: 'src/store/reducers/api/{{path}}/index.js',
        pattern: /(\/\/endAppendToReducer\s)/g,
        template: '{{camelCase name}},\r\n  $1',
      },
    ],
  });
};

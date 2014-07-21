'use strict';
var dataMocker = require('../src/schema.js');
var schema = {
    'type': 'object',
    'description': 'activity info',
    'properties': {
        'state': {
            'type': 'string',
            'description': 'current activity state',
            'enum': ['wait', 'process', 'over']
        },
        'deadline': {
            'type': 'number',
            'description': 'deadline of the activity'
        },
        'remainDays': {
            'type': 'integer',
            'description': 'days left.'
        },
        'test': {
            'type': 'String',
            'description': 'a string'
        }
    },
    'required': ['state', 'deadline', 'remainDays', 'needDays', 'seasonNum']
};

console.log(dataMocker(schema));

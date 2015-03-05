/** @jsx React.DOM */
'use strict';

var React = require('react');
var YCheckbox = require('./index.jsx!');

React.render((
    <div style={{padding: '10px'}}>
        <YCheckbox/> Normal
        <br/><br/>
        <YCheckbox size="l"/> Size l
        <br/><br/>
        <YCheckbox disabled/> Disabled
        <br/><br/>
        <YCheckbox focused/> Focused
    </div>
), document.getElementById('content'));

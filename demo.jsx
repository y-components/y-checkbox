/** @jsx React.DOM */
'use strict';

var React = require('react');
var YCheckbox = require('./index.jsx!');

React.render((
    <div>
        <YCheckbox/> Normal
        <br/><br/>
        <YCheckbox size="l"/> Size l
        <br/><br/>
        <YCheckbox disabled/> Disabled
        <br/><br/>
        <YCheckbox type="line"/> Type line
    </div>
), document.getElementById('content'));

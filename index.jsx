var React = require('react');
var b = require('b_').with('y-checkbox');

var Style = require('./index.css!');

var YCheckbox = {
	displayName: 'y-checkbox',

	__onFocus: function() {
		this.setState({focused: true});
	},

	__onBlur: function() {
		this.setState({focused: false});
	},

	__onMouseEnter: function() {
        this.setState({hovered: true});
    },

    __onMouseLeave: function() {
        this.setState({hovered: false});
    },

	getInitialState: function() {
		return {
			checked: this.props.checked,
			disabled: this.props.disabled,
			hovered: false,
			focused: this.props.focused
		};
	},

	toggle: function (e) {
		if (this.state.disabled) { return; }
		this.setState({ checked: !this.state.checked });
	},

	render: function () {
		var selectClasses = b({
			theme: this.props.theme || 'normal',
			size: this.props.size || 'm',
			checked: this.state.checked,
			disabled: this.state.disabled,
			hovered: this.state.hovered,
			focused: this.state.focused
		});

		return (
			<div
				className={selectClasses}
				onClick={this.toggle}
				onMouseEnter={this.__onMouseEnter}
                onMouseLeave={this.__onMouseLeave}
				>
				<input className={b('control')}
					type="checkbox"
					ref="checkboxInput"
					onFocus={this.__onFocus}
					onBlur={this.__onBlur}
					checked={this.state.checked}
					disabled={this.state.disabled}/>
			</div>
		);
	}
};

module.exports = React.createClass(YCheckbox);
module.exports.Class = YCheckbox;

var React = require('react');

var TabSelector = React.createClass({
  getInitialState: function(){
    return {selected: this.props.selected};
  },
  handleOnClick: function(e){
    console.dir(e.target);
    this.setState({'selected': e.target.getAttribute('data-value')});
  },
  render: function(){
    var tabs = this.props.data.map(function(item){
      var selected = item.value == this.state.selected ? 'selected' : '';
      return(
        <li data-value={item.value}
            className={selected}
            onClick={this.handleOnClick}
        >{item.value}</li>
      );

    }, this);
    return(
      <div clasName='tab-selected'>
        <label>{this.props.label}</label>
        <ul>
          {tabs}
        </ul>
      </div>
    );
  }
});

module.exports = TabSelector;

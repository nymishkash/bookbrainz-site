var React = require('react');
var EditForm = React.createFactory(require('../../components/forms/publisher.jsx'));
var props = JSON.parse(document.getElementById('props').innerHTML);

React.render(EditForm(props), document.getElementById('publisherForm'));
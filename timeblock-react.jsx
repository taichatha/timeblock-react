//Define a coolection to hold our logs
Tasks = new Mongo.Collection("tasks");
// Sets = new Mongo.Collection("sets");
// Lifts = new Mongo.Collection("lifts");

if (Meteor.isClient) {
  // This code is executed on the client only
  
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
}
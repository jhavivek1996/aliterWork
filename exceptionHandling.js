let json = {name: "bad json" };

try {

  let user = JSON.parse(json); // <-- when an error occurs...
   // doesn't work
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  console.log( user.name );
} catch (e) {
  // ...the execution jumps here
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( "JSON Error: " + e.message);
  console.log( e.message );
}
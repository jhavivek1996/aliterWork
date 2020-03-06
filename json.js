let data =

   `{   "id":1,
         "name":"Satish",
         "designation":"Python Developer",
         "place":"Nadiad",
         "college":"KJIT",
         "hobby":"Travelling",
         "date":new Date(2000, 2, 3)
    }`;
    // console.log(data.id);

    // let json = JSON.stringify(data);
    // console.log(json.toJSON);

    // let userData = JSON.parse(data);
    // console.log(data["0"]);
   
    // console.log(typeof(newj));
// console.log(data);

// toString(){
//     console.log("{name: "+this.name+", designation:"+ this.designation+"}");
// }


// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log( user.friends[1] ); // 1


// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//       isAdmin: false,
//       isEditor: true
//     }
//   };
  
//   console.log(JSON.stringify(user, null, 5));

// let room =
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
     number: 23,
      toJSON(){
          return this.number;
      }
  };

  console.log( JSON.stringify(meetup) );
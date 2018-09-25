const users = localStorage.getItem( 'users' ) || [ {
    role: 'admin',
    username: 'admin',
    name: 'Juan',
    password: '1234',
    uid:'1'
},
{
    role: 'doctor',
    username: 'doc1',
    name: 'Heriberto Menguele',
    password: 'doc1',
    uid:'2'
} ,
{
    role: 'technical',
    username: 'tech1',
    name: 'Richi el Chispas',
    password: 'tech1',
    uid:'3'
} ,
{
    role: 'patient',
    username: 'angus',
    name: 'Angustias Morales',
    password: 'uyuyuy',
    uid:'4'
},
{
    role: 'patient',
    username: 'lola',
    name: 'Dolores Fuertes',
    password: 'ayayay',
    uid:'5'
}
  ];


const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    },
    createUser(user){
       users.push(user);
       localStorage.setItem('users', users);
    }
}


export default api;
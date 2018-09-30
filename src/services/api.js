const users =JSON.parse( localStorage.getItem( 'usersHISRedux' ) )|| [ {
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

const histories=JSON.parse( localStorage.getItem( 'historiesHISRedux' ) )|| [
    {
        uid: '4',
        doctorid: '2',
        history: ['2/7 Ingresa en urgencias con dolor de cabeza. Se le extirpa la cabeza y se le da el alta']
    },
    {
        uid: '5',
        doctorid: '2',
        history: ['18/6 Ingresa en urgencias con un fuerte traumatismo provocado por caerle encima un suricato. Se le da el alta inmediata. El suricato evoluciona favorablemente', '20/8 Acude para tratarse de la vértebra T-12, entra por la V-30 desde la A-57 y llega tarde']
    }
];


const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    },
    createUser(user){
       users.push(user);
       /* histories.push({uid: user.uid, doctorid: '2', history: []}); */
       localStorage.setItem('usersHISRedux', JSON.stringify(users));
    },
    getUser(uid){
        return users.find(user => user.uid === uid);
    },
    getPatients(){
        return users.filter(user => user.role === "patient" );
    },
    getPatient(uid){
        return users.find(user => user.uid === uid && user.role === "patient");
    },
    getHistories(){
        return histories;
    },
    getHistory(uid){
        return histories.find(history => history.uid === uid );
    },
    getDoctor(doctorid){
        return users.find(user => user.uid === doctorid);
    },
    canSee(role){
        if (role === "admin" || role === "doctor") 
            return true;
    },
    getLoggedUser(uid){
        return users.find(user => user.uid === uid);
    }
}

export default api;
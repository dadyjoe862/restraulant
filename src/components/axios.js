// import  '../components/axios.js'

axios.defaults.baseURL="http://localhost:3000/";

axios.defaults.header.common['Authorisation']='Barear' + localStorage.getItem('token')
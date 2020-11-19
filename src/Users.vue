<template>
    <div>
        <select v-model="gender">
            <option value ='all'>All</option>
            <option value ='male'>male</option>
            <option value ='female'>female</option>
        </select>
        <br/>
        <button @click="ageCon = 'young'">young</button>
        <button @click="ageCon = 'old'">old</button>
        <button @click="ageCon = 'all'">All</button>
        <br/>
        <button @click="order = 'asc'">Age Asc</button>
        <button @click="order = 'desc'">Age Desc</button>
        <table border='1'>
            <tbody>
                <tr 
                v-for="user in orderedUsers"
                :key="user.username"
                >
                    <td><img :src="user.picture"/></td>
                    <td>{{user.username}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
 import users from "./users.json";

export default {
    data:() =>({
        users: [],
        gender: 'all',
        ageCon: 'all',
        order: 'asc',
    }),
    computed:{
        filteredUser(){
            return this.users
            .filter((elm) => (
                this.gender ==='all' ||
                elm.gender === this.gender
            ))
            .filter((elm) => {
                if (this.ageCon === 'all'){
                    return this.users
                }
                else if (this.ageCon ==='young'){
                    return elm.age <= 30
                }else if(this.ageCon ==='old'){
                    return elm.age > 30
                }                
            });
        },
        orderedUsers(){
            const arr = [...this.filteredUser]
            return arr.sort(
                (a,b)=>{
                    if(this.order ==='asc') {
                        return a.age - b.age
                    }
                    else {
                        return b.age - a.age
                    }
                }
            );
        },
    },
    mounted(){
        this.users = users
        //fetch('http://10.2.1.127/users.json')
        //.then((response) => response.json())
        //.then((data) => (this.users = data));
    }
}</script>
<style>

</style>
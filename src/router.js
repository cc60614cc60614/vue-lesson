import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import TodoList from './ToDoList';
import Counter from './Counter';
import AreaSelect from './AreaSelect';
import Currency from './Currency';
import Form from './Form';
import Style from './Style';
import Toggle from './Toggle';
import Users from './Users';
import Policy from './Policy';
import UserTable from './userTable';

const routes =[
    {         path: '/todo-list',        component: TodoList,    },
    {         path: '/counter',        component: Counter,    },
    {         path: '/area-select',        component: AreaSelect,    },
    {         path: '/currency',        component: Currency,    },
    {         path: '/form',        component: Form,    },
    {         path: '/style',        component: Style,    },
    {         path: '/toggle',        component: Toggle,    },
    {         path: '/users',        component: Users,    },
    {         path: '/policy',        component: Policy,    },
    {         path: '/user-table',        component: UserTable,    },
];

const router = new VueRouter({ routes:routes });
export default router;

// or you can write
// export default new VueRouter({ router:router })
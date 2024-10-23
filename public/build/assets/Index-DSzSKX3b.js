import{q as d,j as e,a as s}from"./app-BCgre1YW.js";import{c as a,M as l}from"./MainLayout-DhqFmO3I.js";import"./index-CFWMbi3i.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=a("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=a("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=a("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=a("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function m(){const{props:t}=d(),r=t.auth.user;return e.jsxs("div",{className:"min-h-screen bg-gray-100 p-6",children:[e.jsxs("div",{className:"bg-blue-600 text-white p-8 rounded-lg shadow-md mb-8",children:[e.jsxs("h1",{className:"text-4xl font-bold mb-4",children:["Welcome to SF Campus, ",r.first_name," ",r.last_name]}),e.jsx("p",{className:"text-lg",children:"Your academic journey starts here. Explore courses, track progress, and stay updated with the latest events."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs(s,{href:"/courses",className:"bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(o,{className:"text-blue-600 w-12 h-12 mr-4"}),e.jsx("h2",{className:"text-xl font-bold",children:"Your Courses"})]}),e.jsx("p",{className:"text-gray-600",children:"View and manage the courses you are enrolled in, track progress, and access materials."})]}),e.jsxs(s,{href:"/calendar",className:"bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(i,{className:"text-yellow-600 w-12 h-12 mr-4"}),e.jsx("h2",{className:"text-xl font-bold",children:"Academic Calendar"})]}),e.jsx("p",{className:"text-gray-600",children:"Stay up to date with upcoming lectures, exams, and other academic events."})]}),e.jsxs(s,{href:`/users/${r.id}/edit`,className:"bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(h,{className:"text-green-600 w-12 h-12 mr-4"}),e.jsx("h2",{className:"text-xl font-bold",children:"Profile"})]}),e.jsx("p",{className:"text-gray-600",children:"Manage your profile, view personal information, and update your settings."})]}),e.jsxs(s,{href:"/alerts",className:"bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(n,{className:"text-red-600 w-12 h-12 mr-4"}),e.jsx("h2",{className:"text-xl font-bold",children:"Alerts"})]}),e.jsx("p",{className:"text-gray-600",children:"Check recent alerts and notifications regarding your academic journey."})]}),e.jsxs(s,{href:"/campus-jobs",className:"bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(c,{className:"text-purple-600 w-12 h-12 mr-4"}),e.jsx("h2",{className:"text-xl font-bold",children:"Campus Jobs"})]}),e.jsx("p",{className:"text-gray-600",children:"Explore job opportunities available within the campus and apply for positions."})]})]})]})}m.layout=t=>e.jsx(l,{title:"Dashboard",children:t});export{m as default};

import{W as n,j as e}from"./app-BCgre1YW.js";import{M as l}from"./MainLayout-DhqFmO3I.js";import"./index-CFWMbi3i.js";function i(){const{data:t,setData:r,post:d,errors:a}=n({name:"",description:""}),o=s=>{s.preventDefault(),d("/admin/courses/store")};return e.jsxs("div",{className:"min-h-screen p-8 bg-gray-50",children:[e.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Add New Course"}),e.jsxs("form",{onSubmit:o,className:"bg-white p-6 rounded-md shadow-md max-w-lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",htmlFor:"name",children:"Course Name"}),e.jsx("input",{id:"name",type:"text",className:"w-full p-2 border border-gray-300 rounded-md",value:t.name,onChange:s=>r("name",s.target.value)}),a.name&&e.jsx("span",{className:"text-red-600 text-sm",children:a.name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-bold mb-2",htmlFor:"description",children:"Description"}),e.jsx("textarea",{id:"description",className:"w-full p-2 border border-gray-300 rounded-md",value:t.description,onChange:s=>r("description",s.target.value)}),a.description&&e.jsx("span",{className:"text-red-600 text-sm",children:a.description})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors",children:"Add Course"})]})]})}i.layout=t=>e.jsx(l,{title:"Add New Course",children:t});export{i as default};
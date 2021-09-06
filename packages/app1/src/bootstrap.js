import { throttleAlias } from "app2/LodashAlias";
import { template } from "lodash";

const compiled = template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');

document.getElementById('app1-root').innerHTML = compiled({ 'users': ['fred', 'barney'] });

document.getElementById("load-app2").addEventListener(
  "click",
  throttleAlias(async (event) => {
    event.target.innerHTML = '读取中...';
    const { shared } = await import("app2/Shared");
    event.target.innerHTML = '读取app2的js umd模块成功';
    document.body.innerHTML += shared();
  }, 3000)
);

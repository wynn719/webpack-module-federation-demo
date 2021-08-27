import { throttleAlias } from "app2/LodashAlias";
import { template } from "lodash";

const compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');

document.getElementById('app1-root').innerHTML = compiled({ 'users': ['fred', 'barney'] });

document.getElementById("load-app2").addEventListener(
  "click",
  throttleAlias(async () => {
    const { shared } = await import("app2/Shared");

    document.body.innerHTML += shared();
  }, 3000)
);

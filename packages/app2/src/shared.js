export const shared = () => 'app2 shared';
export const renderApp = (el) => el && (el.innerHtml = `<div>app2</div>`);

export default shared;
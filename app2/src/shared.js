export const shared = () => 'shared';
export const renderApp = (el) => el && (el.innerHtml = `<div>app2</div>`);

export default shared;
import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from '../routes';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { getStore } from '../store';
import { Provider } from 'react-redux';
export const render = (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      let promise = new Promise((resolve, reject) => {
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    let context = {
      styles: [],
    };
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.path}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
    }
    if (context.NotFound) {
      res.status(404);
    }
    const styles = context.styles.join('\n');
    res.send(`
    <html>
      <head>
        <title> react-ssr</title>
        <style>${styles}</style>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.context = {
            state:${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js' ></script>
      </body>
    </html>
  `);
  });
};

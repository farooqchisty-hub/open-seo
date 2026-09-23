// Front door for seogeoagent.pages.dev: hands every request to the app
// Worker over a service binding, so the app sees the pages.dev URL as its
// own origin.
export default {
  fetch(request, env) {
    return env.APP.fetch(request);
  },
};

// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { defineCustomElements as elsaCustomElements} from '../node_modules/@elsa-workflows/elsa-workflows-studio/loader'

elsaCustomElements();

createApp(App).mount('#app');

function AuthorizationMiddlewarePlugin(elsaStudio: any) {
  const { eventBus } = elsaStudio;

  eventBus.on("http-client-created", (e) => {
    // Register Axios middleware.
    e.service.register({
      onRequest(request: { headers: { [x: string]: string } }) {
        request.headers["x-Tenant"] = "3e20e444-4d9e-4dae-b36d-11eac36d9eb0";
        request.headers["Authorization"] =
          "Bearer " +
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3MDM0RjZDMjU0ODYzRkVCRjdGOTgwNjI3NDBBMjE5OEU1MDExOUQiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKd05QYkNWSVlfNl9mNWdHSjBDaUdZNVFFWjAifQ.eyJuYmYiOjE2OTUxMTM3MzksImV4cCI6MTY5NTExNzMzOSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS1kZXYuc3luY29ib3guY29tIiwiYXVkIjpbImNvbXBhbnlhZG1pbi5hbGwiLCJwcm9kdWN0Y29uZmlndXJhdG9yLmFsbCIsInJlcG9ydGluZy5wcmV2aWV3IiwicG9ydGFsLmFsbCIsIndlYmltc3luYy5hbGwiXSwiY2xpZW50X2lkIjoicG9ydGFsLXNwYSIsInN1YiI6IjY1OWI0ZDdmLTc3ZTktNGZkYS04ODc4LWEwYzRhNGQzMDYyMSIsImF1dGhfdGltZSI6MTY5NTExMDE3OSwiaWRwIjoibG9jYWwiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IldUUDNKUkRWQVA3S0pHQVJSVlRDWkxBNEc2S1haWTVVIiwiZW1haWwiOiJtYXJrc3VAd2ViaW0uY29tLnR3IiwibmFtZSI6IumDgeaZuiDomIciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtYXJrc3VAd2ViaW0uY29tLnR3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjU5YjRkN2YtNzdlOS00ZmRhLTg4NzgtYTBjNGE0ZDMwNjIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Im1hcmtzdUB3ZWJpbS5jb20udHciLCJzeW5jb2JveF9jb21wYW55X2lkIjoiMDMyZWE2MTAtOTQyNS00NGZjLWIyZDMtMzUyZmE1ZmM2OTgyIiwic3luY29ib3hfY29tcGFueV9uYW1lIjoi6KGb5q2m6LOH6KiKIiwic3luY29ib3hfdXNlcl9uYW1lIjoi6JiH6YOB5pm6Iiwic3luY29ib3hfdXNlcl9pZCI6IjY1OWI0ZDdmLTc3ZTktNGZkYS04ODc4LWEwYzRhNGQzMDYyMSIsInN5bmNvYm94X3VzZXJfZW1haWwiOiJtYXJrc3VAd2ViaW0uY29tLnR3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibWFya3N1QHdlYmltLmNvbS50dyIsInNjb3BlIjpbInByb2ZpbGUiLCJvcGVuaWQiLCJjb21wYW55YWRtaW4uYWxsIiwicHJvZHVjdGNvbmZpZ3VyYXRvci5hbGwiLCJyZXBvcnRpbmcucHJldmlldyIsInBvcnRhbC5hbGwiLCJ3ZWJpbXN5bmMuYWxsIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.q9Ils359fMq3IQlCWb6Bao2gdZt-5eKEmr4LGgAE0jT4K7sBBmiqB-X7l6tOwoINfGTwpPbT0rPfYapnSwOilcsUEcjzpVhNkSZ2sZOJdFIBGmu1MxR_mdqOJEDL7jRz6oTmSeOsg9dTJp14Hm_TijivUXjwQfLQtnY9110IHKv7Kf14We3WViZ4afDtwcKTJLesHZHimZTuzY214UOQ9NfKOQHYgi3uJt0Qlix9N2XsDYP3f9xzmnsEb9IoPXFXUTiqeUG8EJe2g8RBgbx0lMmanFYelYnNLfMZd5Fy_P8Ys6D5CGSv-vOXtWlCx6UnTEASR1J-_rMzEc9Vv6dqIA";

        return request;
      },
      onResponse(response: any) {
        return response;
      },
    });
  });
}

const elsaStudioRoot = document.querySelector("elsa-studio-root");

elsaStudioRoot?.addEventListener("initializing", (e) => {
  const elsaStudio = e.detail;
  elsaStudio.pluginManager.registerPlugin(AuthorizationMiddlewarePlugin);
});
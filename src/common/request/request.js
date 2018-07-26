import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

function getPhotosListData() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./api/gallery.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

function getAboutText() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./api/about.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res)
      },
      err => {
        reject(err)
      }
    );
  });
}

function getConcertsInfo() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./api/concerts.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res)
      },
      err => {
        reject(err)
      }
    );
  });
}
export {
  getPhotosListData,
  getAboutText,
  getConcertsInfo
}